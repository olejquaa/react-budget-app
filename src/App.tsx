import { Budget, Expenses } from "./components";
import { GlobalStyle } from "./globalStyles";
import { Container } from "./styles";

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Budget />
      <Expenses />
    </Container>
  );
};
