import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const Rating = ({ project, onRate }) => {
  const renderAverage = () => {
    if (!project.rating) {
      return 0;
    }

    return (project.rating?.value / project.rating?.count).toFixed(1);
  };

  const renderCount = () => {
    const count = project.rating?.count;
    const word = count === 1 ? "rating" : "ratings";
    return `${count} ${word}`;
  };

  return (
    <Container>
      <StarsContainer>
        <StrongText>Rating:</StrongText>

        <ReactStars
          activeColor="#ffd700"
          count={5}
          onChange={onRate}
          size={24}
          value={project.ratingInfo.value}
        />
      </StarsContainer>

      <RatingInfo>
        <Average>{renderAverage()}</Average>
        <Count>({renderCount()})</Count>
      </RatingInfo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  flex: 1;
  padding-right: 10px;
`;

const Average = styled.h5`
  color: #303030;
  font-size: 20px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Count = styled.span`
  font-size: 14px;
  color: #626262;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

const StrongText = styled.span`
  /* text-decoration: underline; */
  /* font-style: italic; */
  font-weight: 700;
  margin-right: 5px;
  font-size: 14px;
  margin-top: 3px;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export default Rating;
