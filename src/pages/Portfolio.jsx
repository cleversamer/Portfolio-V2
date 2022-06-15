/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { skillsQuery, projectsQuery } from "../firebase";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Badge from "../components/Badge";
import Project from "../components/Project";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(skillsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBadges([...data]);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(projectsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProjects(data);
    });

    return unsubscribe;
  }, []);

  const handleBadgeClick = (badge) => {
    let items = [...badges];

    if (badge.title === "All") {
      items = items.map((i) => ({ ...i, selected: false }));
      items[0].selected = true;
    } else {
      const index = items.findIndex((i) => i.title === badge.title);
      items[index].selected = !items[index].selected;

      const allSelected =
        items.filter((i) => i.selected).length === items.length - 1;

      if (allSelected) {
        items = items.map((i) => ({ ...i, selected: false }));
      }

      items[0].selected = allSelected;
    }

    setBadges(items);
  };

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
          {projects?.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </Projects>
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
  margin-top: 30px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 7vh;
  padding: 0 30px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Portfolio;
