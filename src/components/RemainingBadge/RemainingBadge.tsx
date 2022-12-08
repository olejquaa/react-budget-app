import { useState, useEffect } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledRemaining, Title } from "./styles";

export const RemainingBadge = () => {
  const [overspending, setOverspending] = useState(false);

  const { currentCurrency } = useCurrencyContext();
  const { balance } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const remaining = balance.value - expenses.reduce((total, { cost }) => (total += cost), 0);

  useEffect(() => {
    remaining < 0 ? setOverspending(true) : setOverspending(false);
  }, [remaining]);

  return (
    <StyledRemaining $isOverspending={overspending}>
      <Title>
        {overspending ? "Overspending by: " : "Remaining: "}
        {currentCurrency.value}
        {Math.abs(remaining)}
      </Title>
    </StyledRemaining>
  );
};
