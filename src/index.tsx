import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BudgetContextProvider>
    <CurrencyContextProvider>
      <App />
    </CurrencyContextProvider>
  </BudgetContextProvider>,
);
