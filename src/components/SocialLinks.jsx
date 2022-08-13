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
        href="https://linkedin.com/in/cleversamerr"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/linkedin.svg" alt="LinkedIn logo" />
      </a>

      {/* <a
        href="https://www.upwork.com/freelancers/~015fe962fca7326506"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/assets/upwork.svg"
          alt="Upwork logo"
          className="medium-image"
        />
      </a> */}

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
  margin-right: 40px;
  margin-top: 70px;

  .big-image {
    width: 42px;
    height: 42px;
    object-fit: contain;
    /* filter: grayscale(); */
  }

  .medium-image {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    margin: 0;
    margin-top: 30px;
  }
`;

export default SocialLinks;
