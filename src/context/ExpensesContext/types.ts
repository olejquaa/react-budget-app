import { ReactNode } from "react";

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

export interface IExpense {
  id: string;
  name: string;
  cost: number;
}

export interface IExpensesContext {
  expenses: IExpense[];
  addNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
}
