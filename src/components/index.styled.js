import styled from "styled-components";

export const Loader = styled.div`
  margin: auto;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid #bcccdc;
  border-top: 3px solid #334e68;
  animation: loader 1s ease-in-out infinite;

  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LandingImage = styled.img`
    margin: 0 auto;
`;
