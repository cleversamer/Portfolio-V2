import styled from "styled-components";
import Navbar from "../components/Navbar";

const Activity = () => {
  return (
    <Container>
      <Navbar page="activity" />
      <Content>
        <Section>
          <Heading>GitHub Stats 🔥</Heading>

          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=cleversamerr&theme=algolia"
            alt="cleversamerr"
          />

          <Image
            alt="cleversamerr's Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=cleversamerr&show_icons=true&count_private=false"
            height="192px"
          />

          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs?username=cleversamerr&langs_count=10&show_icons=true&locale=en&layout=compact"
            alt="cleversamerr"
            height="192px"
          />
        </Section>

        <Section>
          <Heading>Recent Activity 📉</Heading>
          <Image
            alt="cleversamerr"
            src="https://activity-graph.herokuapp.com/graph?username=cleversamerr&custom_title=Samer%27s%20Contribution%20Graph&theme=react-dark"
          />
        </Section>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 40px;
`;

const Content = styled.main`
  height: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Section = styled.section`
  width: 90vw;
  max-width: 90vw;
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 15px;
  font-size: 28px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 700px;
`;

export default Activity;
