import styled from "styled-components";
import SocialLinks from "../components/SocialLinks";
import Avatar from "../components/Avatar";

const Home = () => {
  return (
    <Container>
      <SocialLinks />
      <Avatar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default Home;
