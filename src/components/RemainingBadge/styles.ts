import styled from "styled-components";

const StyledRemaining = styled.div<{ $isOverspending: boolean }>`
  display: flex;
  justify-content: space-between;
  min-height: 100px;

  box-sizing: border-box;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  border-radius: 10px;
  box-shadow: 1px;

  background: ${({ $isOverspending }) => ($isOverspending ? "#FF0000" : "#ccd5ff")};

  color: ${({ $isOverspending }) => ($isOverspending ? "white" : "black")};

  font-weight: ${({ $isOverspending }) => ($isOverspending ? "800" : "400")};
`;

const Title = styled.p`
  align-self: center;
`;

export { StyledRemaining, Title };
