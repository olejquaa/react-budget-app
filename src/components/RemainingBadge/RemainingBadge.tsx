import { useState, useEffect } from "react";
import { useCurrencyContext, useBudgetContext, useExpensesContext } from "../../context";
import { StyledRemaining, Title } from "./styles";

const RemainingBadge = () => {
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

export { RemainingBadge };
