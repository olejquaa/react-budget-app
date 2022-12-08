import ReactDOM from "react-dom/client";
import { App } from "./App";
import {
  AppContext,
  CurrencyContextProvider,
  BudgetContextProvider,
  ExpensesContextProvider,
} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContext
    components={[CurrencyContextProvider, BudgetContextProvider, ExpensesContextProvider]}
  >
    <App />
  </AppContext>,
);
