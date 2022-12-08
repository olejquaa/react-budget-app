import { useCurrencyContext, useExpensesContext } from "../../context";
import { StyledSpentBadge, Title } from "./styles";


const SpentBadge = () => {
  const { currentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const spentSoFar = expenses.reduce((total, expense) => (total += expense.cost), 0);

  return (
    <StyledSpentBadge>
      <Title>
        Spent so far: {currentCurrency.value}
        {spentSoFar}
      </Title>
    </StyledSpentBadge>
  );
};

export { SpentBadge };
