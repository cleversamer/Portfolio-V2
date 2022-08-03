import styled from "styled-components";

const Badge = ({ badge, onClick }) => {
  const renderContent = () => {
    let content = badge.title;
    if (badge.count || badge.count === 0) {
      content = `${content} (${badge.count})`;
    }

    return content;
  };

  return (
    <Container onClick={onClick} selected={badge.selected}>
      <span>{renderContent()}</span>
    </Container>
  );
};

const Container = styled.li`
  font-weight: 500;
  min-width: 135px;
  text-align: center;
  border-radius: 40px;
  background-color: ${({ selected }) => (selected ? "#303030" : "#F5F6F7")};
  color: ${({ selected }) => (selected ? "#fff" : "#626262")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px 30px;

  /* @media screen and (max-width: 767px) {
    order: ${({ selected }) => selected && "-1"};
  } */

  span {
    display: block;
    width: 100%;
    min-width: max-content;
  }
`;

export default Badge;
