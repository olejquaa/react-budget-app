import { title } from "process";
import { createContext, useContext, useState } from "react";
import { IExpense, IExpensesContext, IExpensesContextProviderProps } from "./types";

export const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

export const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [
      {
        id: "1",
        name: "Beer",
        cost: 4,
      },
      {
        id: "2",
        name: "Pizza",
        cost: 15,
      },
    ],

    addNewExpense: (expense: IExpense) => {
      setExpensesContext((ctx) => ({ ...ctx, expenses: [...ctx.expenses, expense] }));
    },

    deleteExpense: (id) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));
  return expensesContext;
};

export const useExpensesContext = () => useContext(ExpensesContext);

export const ExpensesContextProvider = ({ children }: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
