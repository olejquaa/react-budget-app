import { createContext, useContext, useState } from "react";
import { IExpense, IExpensesContext, IExpensesContextProviderProps } from "./types";
import { v4 } from "uuid";

export const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

export const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [
      {
        id: v4(),
        name: "Beer",
        cost: 4,
      },
      {
        id: v4(),
        name: "Pizza",
        cost: 15,
      },
    ],

    addNewExpense: (newExpense: IExpense) => {
      setExpensesContext((ctx) => ({ ...ctx, expenses: [...ctx.expenses, newExpense] }));
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
