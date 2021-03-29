import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #334e68;
  height: 50px;
  padding: 0 100px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
`;

export const HeaderTitle = styled.h1`
  a {
    color: #b6e0fe;
    text-decoration: none;
  }
`;

export const NavigationParagraph = styled.p`
  margin: 0 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  a {
    text-decoration: none;
    color: #dceefb;
  }

  a:hover {
    color: #b6e0fe;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 50px;
  padding: 50px 200px;
  min-height: calc(100vh - 200px - 100px);
  background-color: #bcccdc;
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  height: 150px;
  background-color: #334e68;
`;

export const FooterLogos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MonstersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  height: fit-content;
  border: 1px solid
    ${(params) => (params.resource === "pokemon" ? "#627D98" : "#D9E2EC")};
  border-radius: 5px;
  background-color: #f0f4f8;

  a {
    text-decoration: none;
  }
`;

export const MonsterAddButton = styled.button`
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f7c948;
  color: #8d2b0b;
  border: 0px;
  height: 40px;
  width: 80px;
  cursor: pointer;
`;

export const MonsterSubmitButton = styled.button`
  margin: 10px 0;
  border-radius: 5px;
  background-color: #b6e0fe;
  color: #044e54;
  border: 0px;
  height: 20px;
  width: 80px;
  cursor: pointer;
`;

export const MonsterFormLabel = styled.label`
  color: #243b53;
  font-size: 15px;
`;

export const MonsterFormInput = styled.input`
  border: 0px;
  background-color: #9fb3c8;
  color: #243b53;
  border-radius: 5px;
  height: 20px;
  width: 200px;
`;

export const MonsterFormTextarea = styled.textarea`
  border: 0px;
  background-color: #9fb3c8;
  color: #243b53;
  border-radius: 5px;
  height: 100px;
  width: 1000px;
`;

export const MonsterLink = styled.p`
  color: #829ab1;
  text-decoration: none;
`;

export const MonsterButtonContainer = styled.div`
  display: flex;
`;

export const MonsterTitle = styled.h2`
  color: #003e6b;
  margin: 10px 0;
`;

export const MonsterDescription = styled.p`
  color: #102a43;
`;

export const Button = styled.button`
  margin: 20px 10px 5px;
  border: 0px;
  border-radius: 5px;
  height: 20px;
  width: 80px;
  cursor: pointer;
  background-color: ${(params) =>
    params.type === "delete" ? "#911111" : "#B6E0FE"};
  color: ${(params) => (params.type === "delete" ? "#F29B9B" : "#0A558C")};
`;
