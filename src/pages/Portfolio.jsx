import styled from "styled-components";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

const Portfolio = () => {
  return (
    <Container>
      <Navbar page="portfolio" />

      <Content>
        <Heading
          title="Portfolio projects"
          description="My professional experience includes designing and crafting code for various web functions and then testing the resulting code to meet client needs. I also have experience working in a collaborative environment and presenting status updates to project stakeholders."
        />
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.main`
  padding: 30px;
`;

export default Portfolio;
