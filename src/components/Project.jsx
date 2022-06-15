import styled from "styled-components";
import Badge from "./Badge";
import { AiOutlineEye, AiFillGithub } from "react-icons/ai";

const props = (props) => {
  const mapTechStackToView = () => {
    let skills = [...props.techStack];
    if (skills.length > 4) {
      skills = [...skills.slice(0, 3), { title: `+${skills.length - 3}` }];
    }

    return skills;
  };

  return (
    <Container>
      <Image src={props?.imageURL} alt={props?.title} />

      <Title>{props?.title}</Title>

      <TechStack>
        {mapTechStackToView().map((tech) => (
          <Badge key={tech.title} badge={tech} />
        ))}
      </TechStack>

      <Description>{props.description}</Description>

      <Resources>
        <Preview href={props.appURL} target="_blank" rel="noreferrer">
          <span>Preview</span>
          <AiOutlineEye />
        </Preview>

        <GitHub href={props.sourceURL} target="_blank" rel="noreferrer">
          <span>Source code</span>
          <AiFillGithub />
        </GitHub>
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
  margin-bottom: 12px;
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
  margin-bottom: 15px;
  color: #505050;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
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

    @media screen and (max-width: 380px) {
      font-size: 14px;
    }
  }
`;

const Preview = styled(Button)`
  background-color: #303030;
  color: #fff;

  :hover {
    background-color: #7b61ff;
  }
`;

const GitHub = styled(Button)`
  border: 2px solid #000;
`;

export default props;
