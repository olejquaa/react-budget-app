import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
}
ol, ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
`;