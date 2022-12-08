import styled from "styled-components";

export const Search = styled.input`
  width: 90%;
  height: 20px;
  font-family: "Montserrat";
  font-size: 14px;
  box-shadow: 20px;
  align-self: center;
  ::shadow{
    color: green;
    margin: 10px;
  }
  ::placeholder {
    padding-left: 4px;
    color: gray;
  }
`;
