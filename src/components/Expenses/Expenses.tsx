import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { ExpensesForm } from "../ExpensesForm/ExpensesForm";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { ExpensesSearch } from "../ExpensesSearch/ExpensesSearch";
import { ExpensesContainer, Title } from "./styles";

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const [expensesStore, updateExpensesStore] = useState(expenses);

  const search = useInput();
  const debouncedSearchValue = useDebounce(search.value);

  useEffect(() => {
    updateExpensesStore(
      expenses.filter((expense) =>
        expense.name.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
      ),
    );
  }, [debouncedSearchValue, expenses]);

  return (
    <ExpensesContainer>
      <Title>
       Expenses
      </Title>
      <ExpensesSearch type="text" {...search} />
      <ExpensesList expenses={expensesStore} />
      <ExpensesForm/>
    </ExpensesContainer>
  );
};
