import styled from "styled-components";

const List = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.ol`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(3, 1fr);
  width: fit-content;
  margin: 0 auto;
  grid-row-gap: 2.5vw;
  grid-column-gap: 5vw;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: auto;
    grid-row-gap: 40px;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default List;
