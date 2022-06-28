import styled from "styled-components";
import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

const Intro = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <Container>
      <div />

      <Loading>
        <Spinner size="xl" thickness="3px" speed="0.8s" />
        <Heading>
          {isLoading ? "Loading resources..." : "Welcome to cleversamer.com"}
        </Heading>
      </Loading>

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
  color: #303030;
  font-size: 22px;
`;

const Designer = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10vh;

  a {
    font-weight: 600;
    color: rgb(29, 155, 240);
    text-decoration: underline;
  }
`;

export default Intro;
