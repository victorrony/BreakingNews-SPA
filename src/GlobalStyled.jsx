import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    font-family: "Barlow Condensed", Arial;
  }

  html {
    width: auto;
  }

  body {
    max-width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
  }
`;

export default GlobalStyled;
