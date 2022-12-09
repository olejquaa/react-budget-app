import styled from "styled-components";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  top: 0;

  -webkit-justify-content: flex-start;

  min-height: 170px;
  max-height: 220px;
  padding: 10px;

  overflow: scroll;
`;

export { StyledList };
