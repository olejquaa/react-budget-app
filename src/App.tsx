import { Balance } from "./components/Balance/Balance";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { GlobalStyle } from "./globalStyles";
import { Container } from "./styles";

function App() {

  return (
    <Container>
      <GlobalStyle />
      <CustomSelect />
      <Balance />
      <p>Hello</p>
    </Container>
  
  );
} 

export default App;