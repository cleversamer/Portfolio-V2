import styled from "styled-components";

const SkillSet = ({ skillSet }) => {
  return (
    <Container>
      <Heading>{skillSet.title}</Heading>

      <Skills>
        {skillSet.set
          .filter((skill) => !skill.hidden)
          .map((skill) => (
            <li key={skill.title}>{skill.title}</li>
          ))}
      </Skills>
    </Container>
  );
};

const Container = styled.section`
  background-color: #f5f6f7;
  padding: 20px 30px;
  border-radius: 20px;
  border-top: 3px solid #9747ff;
  transition-duration: 167ms;
  min-height: 250px;
  cursor: pointer;

  :hover {
    transform: scale(0.99);
  }
`;

const Heading = styled.h2`
  text-transform: capitalize;
  width: 100%;
  min-width: max-content;
  text-align: center;
  color: #9747ff;
  font-size: 22px;
  border-bottom: 1px solid #9747ff;
  line-height: 1.2;

  @media screen and (max-width: 820px) {
    font-size: 20px;
  }
`;

const Skills = styled.ol`
  padding-top: 10px;

  li {
    padding-bottom: 10px;
    font-size: 15px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    text-transform: capitalize;
    margin-left: 30px;
  }
`;

export default SkillSet;
