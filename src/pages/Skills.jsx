import { useSelector } from "react-redux";
import { selectSkillSets } from "../store/skillSets";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SkillSet from "../components/SkillSet";
import List from "../components/List";
import Heading from "../components/Heading";

const Skills = () => {
  const skillSets = useSelector(selectSkillSets);

  return (
    <Container>
      <Navbar page="skills" />

      <Content>
        <Heading
          title="technical skills"
          description="This page shows my technical skills and the tech stack that I use to build web applications."
        />

        <List>
          {skillSets.map((skillSet) => (
            <SkillSet key={skillSet.id} skillSet={skillSet} />
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
