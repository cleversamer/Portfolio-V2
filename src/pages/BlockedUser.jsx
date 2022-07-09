import styled from "styled-components";

const BlockedUser = () => {
  return (
    <Container>
      <Heading>Hey, you!!</Heading>
      <Message>
        You are not allowed to visit my website for security reasons. <br />{" "}
        Don't try again!
      </Message>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  background-color: #303030;
  color: #f5f5f5;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 72px;
  margin-bottom: 10vh;
`;

const Message = styled.p`
  font-size: 36px;
`;

export default BlockedUser;
