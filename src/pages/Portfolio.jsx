/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import config from "../config";
import { skillsQuery, projectsQuery } from "../firebase";
import { paginate } from "../utilities/paginate";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Badge from "../components/Badge";
import Project from "../components/Project";
import Pagination from "../components/Pagination";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [badges, setBadges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const unsubscribe = onSnapshot(skillsQuery, (snapshot) => {
      const data = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((skill) => skill.visible);
      setBadges([...data]);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(projectsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        visible: true,
        ...doc.data(),
      }));
      setProjects(data);
    });

    return unsubscribe;
  }, []);

  const handleBadgeClick = (badge) => {
    let bList = [...badges];
    let pList = [...projects];

    bList = bList.map((i) => ({ ...i, selected: i.title === badge.title }));

    pList =
      badge.title === "All"
        ? pList.map((p) => ({ ...p, visible: true }))
        : pList.map((p) => {
            let skills = [...p.techStack];
            for (let i = 0; i < skills.length; i++) {
              if (skills[i].title === badge.title) {
                return { ...p, visible: true };
              }
            }

            return { ...p, visible: false };
          });

    setCurrentPage(1);
    setBadges(bList);
    setProjects(pList);
  };

  const getPagedProjects = () => {
    const filtered = projects.filter((p) => p.visible);
    const paged = paginate(filtered, currentPage, config.projectsPageSize);
    return { itemsCount: filtered.length, data: paged };
  };

  const { itemsCount, data } = getPagedProjects();

  return (
    <Container>
      <Navbar page="portfolio" />

      <Content>
        <Heading
          title="Portfolio projects"
          description="My professional experience includes designing and crafting code for various web functions and then testing the resulting code to meet client needs. I also have experience working in a collaborative environment and presenting status updates to project stakeholders."
        />

        <Badges>
          {badges?.map((badge) => (
            <Badge
              key={badge.title}
              badge={badge}
              onClick={() => handleBadgeClick(badge)}
            />
          ))}
        </Badges>

        <Projects>
          {data.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </Projects>

        <Pagination
          itemsCount={itemsCount}
          currentPage={currentPage}
          pageSize={config.projectsPageSize}
          onPageChange={setCurrentPage}
        />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 40px;
`;

const Content = styled.main`
  .heading {
    padding: 30px;
  }
`;

const Badges = styled.ul`
  list-style: none;
  width: 100%;
  overflow: auto;
  display: flex;
  gap: 10px;
  padding: 0 30px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    width: fit-content;
    margin: 0 auto;
    padding: 0 100px;
  }
`;

const Projects = styled.div`
  margin-top: 40px;
  display: grid;
  place-items: center;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 7vw;
  grid-row-gap: 7vh;
  padding: 0 30px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Portfolio;
