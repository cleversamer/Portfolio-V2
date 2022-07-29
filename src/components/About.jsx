import styled from "styled-components";
import { actionsRef } from "../firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";
import getVisitorData from "../services/getVisitorData";

const About = () => {
  const handleResumeClick = () => {
    getVisitorData((res) => {
      const currentDate = new Date();

      addDoc(actionsRef, {
        author: res.data,
        actionDate: currentDate.toDateString(),
        actionTime: currentDate.toTimeString(),
        description: `Viewed your resume.`,
        timestamp: serverTimestamp(),
      });
    });
  };

  return (
    <Container>
      <Heading>
        Hi, I’m Samer A.
        <br />
        I’m a <Highlight>Software engineer</Highlight>
      </Heading>

      <Paragraph>
        I’m a software engineer with 3+ years of experience in programming, and
        I have a solid understanding of JavaScript and many of its frameworks. I
        also have excellent experience building and developing scalable,
        maintainable, high-performance applications, as shown on the portfolio
        page.
      </Paragraph>

      <Resume
        download
        href="https://github.com/cleversamerr/cleversamerr/raw/main/Resume.pdf"
        className="click-animation-2"
        onClick={handleResumeClick}
      >
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
  font-size: 15px;
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
    border-color: #9747ff;
  }
`;

export default About;
