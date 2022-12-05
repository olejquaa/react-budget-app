import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { ExpensesForm } from "./components/ExpensesForm/ExpensesForm";
import { GlobalStyle } from "./globalStyles";
import { Container } from "./styles";

export const App = () => {

  return (
    <Container>
      <GlobalStyle />
      <p>Hello</p>
      <Budget />
      <Expenses />
      <ExpensesForm/>
    </Container> 
  );
};