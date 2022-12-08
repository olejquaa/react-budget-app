import { Budget } from "./components/Budget/Budget";
import { GlobalStyle } from "./globalStyles";
import { Container } from "./styles";
import { Expenses } from "./components/Expenses/Expenses";

export const App = () => {

  return (
    <Container>
      <GlobalStyle />
      <Budget />
      <Expenses />
      {/* <ExpensesForm/> */}
    </Container> 
  );
};