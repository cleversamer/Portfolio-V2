import styled from "styled-components";
import Navbar from "../components/Navbar";
import SkillSet from "../components/SkillSet";
import List from "../components/List";
import Heading from "../components/Heading";

const Skills = () => {
  const skillSets = [
    {
      id: 1,
      title: "Programming languages",
      set: [
        { id: 1, title: "Java" },
        { id: 2, title: "JavaScript" },
        { id: 3, title: "Python" },
      ],
    },
    {
      id: 2,
      title: "Front-end development",
      set: [
        { id: 1, title: "HTML" },
        { id: 2, title: "CSS" },
        { id: 3, title: "Sass" },
        { id: 4, title: "Responsive design" },
        { id: 5, title: "DOM manipulation" },
        { id: 6, title: "React" },
        { id: 7, title: "Redux" },
      ],
    },
    {
      id: 3,
      title: "Back-end development",
      set: [
        { id: 1, title: "Node.js" },
        { id: 2, title: "RESTful API" },
        { id: 3, title: "MongoDB" },
      ],
    },
    {
      id: 4,
      title: "Full-stack development",
      set: [
        { id: 1, title: "Git & GitHub" },
        { id: 2, title: "Docker" },
        { id: 3, title: "Firebase" },
      ],
    },
  ];

  return (
    <Container>
      <Navbar page="skills" />

      <Content>
        <Heading
          title="technical skills"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, veniam est. Dolorem et voluptate delectus expedita nemo sunt, voluptatum obcaecati id aperiam doloremque ea possimus architecto suscipit est odio quis cupiditate molestiae voluptas nam maxime excepturi sit dicta laboriosam? Suscipit."
        />

        <List>
          {skillSets.map((skillSet) => (
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
`;

export default Skills;
