import { createGlobalStyle } from "styled-components";

// Cria um componente GlobalStyle usando a função createGlobalStyle.
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

// Exporta o componente GlobalStyle para uso em outros arquivos.

export default GlobalStyle;
