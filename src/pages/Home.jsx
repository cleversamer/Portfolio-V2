import styled from "styled-components";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import Avatar from "../components/Avatar";
import About from "../components/About";

const Home = () => {
  return (
    <Container>
      <Navbar page="home" />

      <Content>
        <SocialLinks />
        <Avatar />
        <About />
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10vw;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding-bottom: 30px;
  }
`;

export default Home;
