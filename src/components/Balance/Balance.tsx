import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledBalance } from "./styles";

export const Balance = () => {
  const { currentCurrency } = useCurrencyContext();
  const { balance } = useBudgetContext();

  return (
    <StyledBalance>
      {`Budget:  ${currentCurrency.value}${balance.value}`}
    </StyledBalance>
  );
};
