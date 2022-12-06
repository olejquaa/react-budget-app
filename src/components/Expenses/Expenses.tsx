import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";

export const Expenses = () => {
  const { balance } = useBudgetContext();
  return <div>Expenses </div>;
};
