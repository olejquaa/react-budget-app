import { IExpense } from "../../context/ExpensesContext/types";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { EmptyListMessage, StyledList } from "./styles";


interface IProps {
  expenses: IExpense[];
}

const ExpensesList = ({ expenses }: IProps) => {
  return (
    <StyledList>
      {expenses.length > 0 &&
        expenses.map((expenses) => {
          return <ExpensesItem expense={expenses} key={expenses.id} />;
        })}
      {expenses.length === 0 && <EmptyListMessage>Ooops 🙈</EmptyListMessage>}
    </StyledList>
  );
};

export { ExpensesList };
