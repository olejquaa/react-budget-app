import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-family: "Montserrat";
  position: relative;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

background: beige;
}


::-webkit-scrollbar {
  width: 0;
}
`;

export { GlobalStyle };
