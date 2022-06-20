import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Heading>
        Hi, I’m Samer A.
        <br />
        I’m a <Highlight>Software engineer</Highlight>
      </Heading>

      <Paragraph>
        I am a software engineer with 3+ years of experience in programming, and
        I have a solid understanding of JavaScript and its frameworks. I have
        excellent experience in building and developing scalable, maintainable,
        and high-performance applications.
      </Paragraph>

      <Resume download href="assets/resume.pdf" className="click-animation-2">
        View my resume
      </Resume>
    </Container>
  );
};

const Container = styled.section`
  font-family: "Inter", sans-serif;
  margin: auto 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`;

const Heading = styled.h2`
  font-size: 58px;
  margin-bottom: 10px;
  width: 100%;
  min-width: max-content;

  @media screen and (max-width: 1440px) {
    font-size: 34px;
  }

  @media screen and (max-width: 768px) {
    font-size: 26px;
    text-align: center;
    margin-bottom: 15px;
  }
`;

const Highlight = styled.span`
  background-color: #303030;
  color: #fff;
  text-transform: capitalize;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #505050;
  max-width: 500px;
  margin-bottom: 32px;
  width: fit-content;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

const Resume = styled.a`
  display: inline-block;
  padding: 8px;
  border: 2px solid #000;
  border-radius: 10px;
  width: 180px;
  text-align: center;
  transition-duration: 167ms;

  :hover,
  :active {
    color: #9747ff;
  }
`;

export default About;
