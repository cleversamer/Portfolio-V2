import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Heading>
        Hi, I'm Samer A.
        <br />
        I’m a <Highlight>Software engineer</Highlight>
      </Heading>

      <Paragraph>
        I'm a passionate computer science student with strong knowledge and
        experience in web development, and with almost 3-years of experience, I
        can help you to make your own web application in a professional way, and
        you can trust me in your business.
      </Paragraph>

      <Resume href="/assets/resume.pdf" className="click-animation-2">
        View my resume
      </Resume>
    </Container>
  );
};

const Container = styled.section`
  font-family: "Inter", sans-serif;
  margin: auto 0;

  @media screen and (max-width: 1440px) {
    /*  */
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`;

const Heading = styled.h2`
  font-size: 58px;
  margin-bottom: 10px;
  width: fit-content;

  @media screen and (max-width: 1440px) {
    font-size: 34px;
  }

  @media screen and (max-width: 767px) {
    font-size: 26px;
    text-align: center;
    margin-bottom: 15px;
  }
`;

const Highlight = styled.span`
  background-color: #303030;
  color: #fff;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #505050;
  max-width: 500px;
  margin-bottom: 32px;
  width: fit-content;

  @media screen and (max-width: 767px) {
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

  :hover,
  :active {
    background-color: #000;
    color: #fff;
  }
`;

export default About;
