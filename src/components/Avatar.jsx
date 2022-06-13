import styled from "styled-components";

const Avatar = () => {
  return (
    <Container>
      <Rectangle />
      <AvatarImg src="/assets/avatar.jpg" alt="Samer" />
    </Container>
  );
};

const Container = styled.section``;

const Rectangle = styled.div`
  width: 150px;
  height: 70px;
  background-color: rgba(245, 245, 245, 0.6);
  border-radius: 5px;
  transform: skewX(-20deg);
  position: relative;
  top: 35px;
  left: -30px;
  z-index: 100;
`;

const AvatarImg = styled.img`
  width: 300px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;

export default Avatar;