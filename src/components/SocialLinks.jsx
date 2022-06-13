import styled from "styled-components";

const SocialLinks = () => {
  return (
    <Container>
      <a
        href="https://github.com/cleversamerr"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/github.svg" alt="GitHub logo" />
      </a>

      <a href="https://wa.me/972597367603" target="_blank" rel="noreferrer">
        <img src="/assets/whatsapp.svg" alt="WhatsApp logo" />
      </a>

      <a
        href="https://twitter.com/cleversamerr"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/twitter.svg" alt="Twitter logo" />
      </a>

      <a
        href="https://instagram.com/cleversamerr"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/instagram.svg" alt="Instagram logo" />
      </a>

      <a
        href="https://linkedin.com/in/cleversamerr"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/linkedin.svg" alt="LinkedIn logo" />
      </a>

      <a href="mailto:thedev.samer@gmail.com" target="_blank" rel="noreferrer">
        <img src="/assets/gmail.png" alt="Gmail logo" className="big-image" />
      </a>
    </Container>
  );
};

const Container = styled.section`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .big-image {
    width: 36px;
    height: 36px;
    object-fit: contain;
  }
`;

export default SocialLinks;
