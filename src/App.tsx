import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { GlobalStyle } from "./globalStyles";
import { Container } from "./styles";

function App() {

  return (
    <Container>
      <GlobalStyle />
      <p>Hello</p>
    </Container>
  
  );
}

export default App;