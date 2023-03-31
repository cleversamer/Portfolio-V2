/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Heading>
        <span>
          Hi, I'm Samer{" "}
          <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" />
        </span>

        <span>
          I'm a <Highlight>Backend Engineer</Highlight>
        </span>
      </Heading>

      <Paragraph>
        Talented Backend Engineer adept at contributing to a highly
        collaborative work environment, leading software teams, finding
        solutions, and determining customer satisfaction. I designed and
        developed web applications across multiple APIs, third-party
        integrations, and databases.
      </Paragraph>

      <Resume
        download
        href="https://github.com/cleversamerr/cleversamerr/raw/main/Resume.pdf"
        className="click-animation-2"
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
  padding: 0 4px;
  text-align: center;
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
  color: #505050;
  font-size: 14px;
  margin-bottom: 32px;
  max-width: 500px;
  text-overflow: clip;
  width: fit-content;
  word-wrap: break-word;

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
    transform: scale(0.99);
  }

  :active {
    transform: scale(0.98);
  }
`;

export default About;
