import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderNavigation,
  HeaderTitle,
  NavigationParagraph,
} from "./index.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle><a href="/">Monster dexes</a></HeaderTitle>
      <HeaderNavigation>
        <NavigationParagraph>
          <a href="/pokemons">Pokedex</a>
        </NavigationParagraph>
        <NavigationParagraph>
          <a href="/digimons">Digidex</a>
        </NavigationParagraph>
      </HeaderNavigation>
    </HeaderContainer>
  );
};

export default Header;
