import { FooterContainer, FooterLogos } from "./index.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <nav>
        <p>Pokemon site</p>
        <p>Digimon site</p>
        <p>Other sites</p>
      </nav>
      <FooterLogos>
        <img alt="pokemon logo"/>
        <img alt="digimon logo"/>
      </FooterLogos>
    </FooterContainer>
  );
};

export default Footer;
