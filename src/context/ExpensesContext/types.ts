import { ReactNode } from "react";

interface IExpensesContextProviderProps {
  children: ReactNode;
}

interface IExpense {
  id: string;
  name: string;
  cost: number;
}

interface IExpensesContext {
  expenses: IExpense[];
  addNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
}

export type { IExpensesContextProviderProps, IExpense, IExpensesContext };
