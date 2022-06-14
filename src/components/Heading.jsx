import styled from "styled-components";

const Heading = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8vw;

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 48px;
  width: 100%;
  min-width: fit-content;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 36px;
  }

  @media screen and (max-width: 360px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  padding-top: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }

  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;

export default Heading;
