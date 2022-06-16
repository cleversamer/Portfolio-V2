import styled from "styled-components";
import Navbar from "../components/Navbar";

const Events = () => {
  return (
    <Container>
      <Navbar page="events" />
      <Content>
        <Heading>No events added yet.</Heading>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 64px);
`;

const Content = styled.main`
  height: 100%;
  display: grid;
  place-items: center;
`;

const Heading = styled.h2`
  margin-bottom: 10vh;
  color: #303030;
`;

export default Events;
