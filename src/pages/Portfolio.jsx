/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProjects } from "../store/projects";
import { selectSkills } from "../store/skills";
import * as config from "../config";
import { paginate } from "../utilities/paginate";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Badge from "../components/Badge";
import Project from "../components/Project";
import Pagination from "../components/Pagination";

const Portfolio = () => {
  const projects = useSelector(selectProjects);
  const skills = useSelector(selectSkills);
  const [selectedSkill, setSelectedSkill] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [displayProjects, setDisplayProjects] = useState([]);
  const [displaySkills, setDisplaySkills] = useState([]);

  useEffect(() => {
    setDisplayProjects(projects);

    let mappedSkills = skills.map((skill) => {
      if (skill.title === "All") {
        return { ...skill, count: projects.length, selected: true };
      }

      let count = 0;

      for (let project of projects) {
        let skillSet = project.techStack.map((i) => i.title);
        if (skillSet.includes(skill.title)) {
          count++;
        }
      }

      return { ...skill, count };
    });

    setDisplaySkills(mappedSkills);
  }, [projects, skills]);

  const handleBadgeClick = (badge) => {
    setSelectedSkill(badge.title);

    let bList = [...displaySkills];
    let pList = [...displayProjects];

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
    setDisplaySkills(bList);
    setDisplayProjects(pList);
  };

  const getPagedProjects = () => {
    const filtered = displayProjects.filter((p) => p.visible);
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
          {displaySkills?.map((badge) => (
            <Badge
              key={badge.title}
              badge={badge}
              onClick={() => handleBadgeClick(badge)}
            />
          ))}
        </Badges>

        {data.length ? (
          <Projects>
            {data.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </Projects>
        ) : (
          <NoProjects>
            <p>
              No{" "}
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                {selectedSkill}
              </span>{" "}
              projects found, or you have a network issue.
            </p>
          </NoProjects>
        )}

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
    justify-content: center;
    flex-wrap: wrap;
    width: fit-content;
    margin: 0 auto;
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

const NoProjects = styled.div`
  width: 100%;
  margin-top: 17vh;
  text-align: center;
  color: #303030;
  font-weight: 500;
  opacity: 0.9;
`;

export default Portfolio;
