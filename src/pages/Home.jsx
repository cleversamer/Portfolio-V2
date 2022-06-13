import styled from "styled-components";
import SocialLinks from "../components/SocialLinks";
import Avatar from "../components/Avatar";
import About from "../components/About";

const Home = () => {
  return (
    <Container>
      <SocialLinks />
      <Avatar />
      <About />
    </Container>
  );
};

const Container = styled.div`
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
