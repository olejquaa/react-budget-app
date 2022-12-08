import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`;

export const Title = styled.h2``;

export const Input = styled.input`
  width: 90%;
  height: 20px;

  align-self: center;
  margin-top: 10px;

  font-family: "Montserrat";
  font-size: 14px;
  box-shadow: 20px;
  align-self: center;

  ::placeholder {
    padding-left: 4px;
    color: gray;
  }
`;

export const Errors = styled.span`
  align-self: center;
  font-size: 8px;
  color: red;
`;

export const FormButton = styled.button`
  box-sizing: border-box;
  margin-top: 10px;
  padding: 10px;

  border: none;
  border-radius: 10px;
  background: #23c9ff;
  outline: none;
  border-width: 0px;

  font-family: "Montserrat";
`;
