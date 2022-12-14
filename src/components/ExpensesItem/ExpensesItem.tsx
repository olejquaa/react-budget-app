
import { useCurrencyContext, useExpensesContext } from "../../context";
import { IExpense } from "../../context/ExpensesContext/types";
import {
  BadgeContainer,
  CostBadge,
  DeleteButton,
  ExpensesItemContainer,
  StyledExpensesItem,
} from "./styles";

interface IProps {
  expense: IExpense;
}

const ExpensesItem = ({ expense }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const handleDeleteExpense = () => {
    deleteExpense(expense.id);
  };

  return (
    <ExpensesItemContainer>
      <StyledExpensesItem key={expense.id}>
        {expense.name}
        <BadgeContainer>
          <CostBadge>
            {currentCurrency.value}
            {expense.cost}
          </CostBadge>
          <DeleteButton onClick={handleDeleteExpense}></DeleteButton>
        </BadgeContainer>
      </StyledExpensesItem>
    </ExpensesItemContainer>
  );
};

export { ExpensesItem };