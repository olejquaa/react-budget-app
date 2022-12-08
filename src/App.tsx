import { Budget, Expenses } from "./components";
import { GlobalStyle } from "./globalStyles";
import { Container, Iphone } from "./styles";

export const App = () => {
  return (
    <Iphone>
      <Container>
        <GlobalStyle />
        <Budget />
        <Expenses />
      </Container>
    </Iphone>
  );
};
