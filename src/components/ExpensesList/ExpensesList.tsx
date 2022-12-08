import { IExpense } from "../../context/ExpensesContext/types";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";


interface IProps {
  expenses: IExpense[];
}

export const ExpensesList = ({ expenses }: IProps) => {
  return (
    <div>
      {expenses.length > 0 && <ExpensesItem expenses={expenses} />}
      {expenses.length==0 && "Ooops 🙈" }
    </div>
  );
};