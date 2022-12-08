import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContextValue } from "../../context/ExpensesContext/ExpensesContext";
import { IExpense } from "../../context/ExpensesContext/types";

interface IProps {
  expenses: IExpense[];
}

export const ExpensesItem = ({ expenses }: IProps) => {
  const { currentCurrency } = useCurrencyContext();

  const getExpenseItem = expenses.map((expense) => (
    <li key={expense.id}>
      {expense.name} 
      <div>{currentCurrency.value}{expense.cost}</div>
    </li>
  ));
  return <ul>{getExpenseItem}</ul>;
};
