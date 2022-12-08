import { useCurrencyContext, useBudgetContext } from "../../context";
import { StyledBalance } from "./styles";

export const Balance = () => {
  const { currentCurrency } = useCurrencyContext();
  const { balance } = useBudgetContext();

  return <StyledBalance>{`Budget:  ${currentCurrency.value}${balance.value}`}</StyledBalance>;
};
