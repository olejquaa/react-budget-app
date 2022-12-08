import styled from "styled-components";

const Title = styled.h2``;

const BudgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 15px;
  border-radius: 30px;
  overflow: scroll;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export { Title, BudgetContainer, Header };
