import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <Heading>The requested URL was not found on this server.</Heading>
      <HomeLink href="/">Back to the home page</HomeLink>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 14px;
  background-color: #f6f6f6;
  color: #333;
`;

const Heading = styled.h1`
  font-size: 3.33vw;
  padding: 0 4vw;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 6vw;
  }
`;

const HomeLink = styled.a`
  font-size: 2vw;
  font-weight: 500;

  &:hover,
  &:active {
    color: #000;
  }

  @media screen and (max-width: 768px) {
    font-size: 4.5vw;
  }
`;

export default NotFound;
