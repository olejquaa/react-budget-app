import { useEffect, useState } from "react";
import { useExpensesContextValue } from "../../context/ExpensesContext/ExpensesContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { ExpensesSearch } from "../ExpensesSearch/ExpensesSearch";
import { Title } from "./styles";

export const Expenses = () => {
  const { expenses } = useExpensesContextValue();
  const [expensesStore, updateExpensesStore] = useState(expenses);

  const search = useInput();
   useDebounce(search.value);

  useEffect(() => {
    updateExpensesStore(
      expenses.filter((expense) => expense.name.toLowerCase().includes(search.value.toLowerCase())),
    );
  }, [search.value, expenses]);


 
  
  return (
    <div>
      <Title>
        <h2>Expenses</h2>
      </Title>
      <ExpensesSearch type="text" {...search} />
      <ExpensesList expenses={expensesStore} />
    </div>
  );
};
