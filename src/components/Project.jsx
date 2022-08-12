import styled from "styled-components";
import firestore from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setProjectRatingInfo } from "../store/projects";
import Badge from "./Badge";
import { AiOutlineEye, AiFillGithub } from "react-icons/ai";
import Rating from "./Rating";

const Project = ({ project }) => {
  const dispatch = useDispatch();

  const mapTechStackToView = () => {
    let skills = [...project.techStack];
    if (skills.length > 4) {
      skills = [...skills.slice(0, 3), { title: `+${skills.length - 3}` }];
    }

    return skills;
  };

  const handleRate = (newRating) => {
    const docRef = doc(firestore, "projects", project.id);
    getDoc(docRef)
      .then((res) => {
        const doc = res._document.data.value.mapValue.fields;
        const ratingCount = parseInt(
          doc.rating.mapValue.fields.count.integerValue
        );
        const ratingValue = parseInt(
          doc.rating.mapValue.fields.value.integerValue
        );
        const rating = {
          count:
            project?.ratingInfo.count === 1 ? ratingCount : ratingCount + 1,
          value: ratingValue + (newRating - project?.ratingInfo.value),
        };

        updateDoc(docRef, { rating })
          .then(() => {
            dispatch(
              setProjectRatingInfo(
                project.id,
                { count: 1, value: newRating },
                rating
              )
            );
          })
          .catch(() => {});
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <Image src={project?.imageURL} alt={project?.title} />

      <Title>{project?.title}</Title>

      <Description>
        <StrongText>Category:</StrongText>{" "}
        {project.category || "Web application"}
      </Description>

      <Rating project={project} onRate={handleRate} />

      <TechStack>
        {mapTechStackToView().map((tech) => (
          <Badge key={tech.title} badge={tech} />
        ))}
      </TechStack>

      <Description>{project.description}</Description>

      <Resources>
        <ButtonFilled href={project.appURL} target="_blank" rel="noreferrer">
          <span>Preview</span>
          <AiOutlineEye />
        </ButtonFilled>

        <ButtonOutlined
          href={project.sourceURL}
          target="_blank"
          rel="noreferrer"
        >
          <span>Source code</span>
          <AiFillGithub />
        </ButtonOutlined>
      </Resources>
    </Container>
  );
};

const Container = styled.article`
  max-width: 400px;
`;

const Image = styled.img`
  width: 100%;
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 0;
  background-color: #e4e9ee;
  border-radius: 16px;
`;

const Title = styled.h4`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 22px;
`;

const TechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color: #505050;

  :last-of-type {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

const StrongText = styled.span`
  text-decoration: underline;
  font-style: italic;
  font-weight: 700;
  color: #303030;
  margin-right: 3px;
`;

const Resources = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
`;

const Button = styled.a`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  transition-duration: 167ms;

  img,
  svg {
    background: transparent;
    font-size: 24px;
  }

  span {
    font-size: 15px;
    font-weight: 500;

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }

    @media screen and (max-width: 380px) {
      font-size: 13px;
    }
  }
`;

const ButtonFilled = styled(Button)`
  background-color: #303030;
  color: #fff;

  :hover {
    background-color: #7b61ff;
  }
`;

const ButtonOutlined = styled(Button)`
  border: 2px solid #000;
  transition-duration: 167ms;

  :hover,
  :active {
    color: #9747ff;
    border-color: #9747ff;
  }
`;

export default Project;
