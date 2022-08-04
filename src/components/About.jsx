/* eslint-disable jsx-a11y/alt-text */
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
        <span>
          Hi, I’m Samer{" "}
          <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" />
        </span>

        <span>
          I’m a <Highlight>Web &amp; Mobile Developer</Highlight>
        </span>
      </Heading>

      <Paragraph>
        I’m a software engineer with 3+ years of experience in building and
        developing Web &amp; Mobile Apps with a primary focus on scalability
        &amp; performance. And unlike less-knowledged or weak developers, with
        my professional expertise, I can build you a high-performance Web or
        Mobile App that fits your business requirements exactly.
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

const Highlight = styled.span`
  background-color: #303030;
  color: #fff;
  text-transform: capitalize;
`;

const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: 58px;
  margin-bottom: 10px;
  width: 100%;
  min-width: max-content;

  ${Highlight} {
    margin-left: 5px;
  }

  span {
    display: flex;
    align-items: center;
    margin-bottom: 4px;

    img {
      width: 40px;
      margin-left: 5px;

      @media screen and (max-width: 768px) {
        width: 30px;
      }
    }

    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }

  @media screen and (max-width: 1440px) {
    font-size: 34px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    margin-bottom: 15px;
  }
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
