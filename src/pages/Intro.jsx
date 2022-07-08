import styled from "styled-components";
import { Spinner } from "@chakra-ui/react";

const Intro = ({ onContinue, error, spinner }) => {
  return (
    <Container>
      <div />

      <Loading>
        {spinner && <Spinner size="xl" thickness="3px" speed="0.8s" />}
        <Heading warning={!!error}>{error || "Loading resources..."}</Heading>
      </Loading>

      {error ? (
        <ButtonContinue onClick={onContinue}>Continue anyway</ButtonContinue>
      ) : (
        <Designer>
          Designed By{" "}
          <a
            href="https://twitter.com/_royalty_js"
            target="_blank"
            rel="noreferrer"
          >
            Genie
          </a>{" "}
          ❤️
        </Designer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 22px;
  color: ${({ warning }) => (warning ? "#fe0000" : "#303030")};

  @media screen and (max-width: 480px) {
    font-size: 18px;
    margin: 0 2vw;
  }
`;

const Designer = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10vh;

  a {
    font-weight: 600;
    color: rgb(29, 155, 240);
    text-decoration: underline;
  }
`;

const ButtonContinue = styled.button`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 14vh;
  padding: 15px 20px;
  border: none;
  transition-duration: 176ms;
  cursor: pointer;

  :active {
    transform: scale(0.98);
  }
`;

export default Intro;
