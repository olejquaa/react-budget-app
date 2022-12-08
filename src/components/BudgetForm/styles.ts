import styled from "styled-components";

const Badge = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-width: 300px;
`;

const StyledInput = styled.input`
  display: inline-block;

  padding: 1px 2px;
  min-width: 200px;
  box-sizing: border-box;

  border: none;
  background: none;
  outline: none;
  border-width: 0px;

  font-family: "Montserrat";
  font-size: inherit;
  text-align: center;
  writing-mode: horizontal-tb !important;
  color: gray;
  opacity: 90%;

  appearance: auto;
  -webkit-rtl-ordering: logical;
`;

const Button = styled.button`
  box-sizing: border-box;
  padding: 10px 20px;
  min-width: 80px;

  border: none;
  border-radius: 10px;
  background: white;
  outline: none;
  border-width: 0px;

  font-family: "Montserrat";
`;

const Form = styled.form``;

export { Badge, StyledInput, Button, Form };
