import styled from "styled-components";
import iphone from "./assets/image/iphone.png";

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;

  max-height: 770px;
  margin-top: 20px;

  position: relative;
  border-radius: 0px 0px 40px 40px;

  overflow: scroll;
`;

export const Iphone = styled.div`
  padding: 35px;
  background-image: url(${iphone});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: contain;
`;
