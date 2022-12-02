import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const Balance = () => {
  const { currentCurrency } = useCurrencyContext();

  return <div>{currentCurrency.value}3000</div>;
};
