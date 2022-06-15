import styled from "styled-components";
import Navbar from "../components/Navbar";
import SkillSet from "../components/SkillSet";
import List from "../components/List";
import Heading from "../components/Heading";

import { getSkillSets } from "../data";

const Skills = () => {
  return (
    <Container>
      <Navbar page="skills" />

      <Content>
        <Heading
          title="technical skills"
          description="This page shows my technical skills and the tech stack that I use to build web applications."
        />

        <List>
          {getSkillSets().map((skillSet) => (
            <SkillSet id={skillSet.id} skillSet={skillSet} />
          ))}
        </List>
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.main`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default Skills;
