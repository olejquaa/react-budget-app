
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledSpentBadge, Title } from "./styles";

export const SpentBadge = () => {
  

  const { currentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const spentSoFar = expenses.reduce((total, expense) => (total += expense.cost), 0);


  return (
    <StyledSpentBadge >
      <Title>
       Spent so far: {currentCurrency.value}
        {spentSoFar}
      </Title>
    </StyledSpentBadge>
  );
};
