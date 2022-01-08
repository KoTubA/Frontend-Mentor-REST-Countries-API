import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
      box-sizing: border-box;
  }
  body {
      font-family: 'Nunito Sans', sans-serif;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      font-size: 14px;
  }
  a, button, input {
      font-family: 'Nunito Sans', sans-serif;
  }
`;
