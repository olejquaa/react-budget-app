import { Budget, Expenses } from "./components";
import { GlobalStyle } from "./globalStyles";
import { Container, Iphone } from "./styles";

export const App = () => {
  return (
    <Iphone>
      <GlobalStyle />
      <Container>
        <Budget />
        <Expenses />
      </Container>
    </Iphone>
  );
};
