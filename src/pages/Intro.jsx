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
      <Spinner size="xl" thickness="3px" speed="0.8s" />
      <Heading>
        {isLoading ? "Loading resources..." : "Welcome to cleversamer.com"}
      </Heading>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  height: 90vh;
`;

const Heading = styled.h2`
  color: #303030;
`;

export default Intro;
