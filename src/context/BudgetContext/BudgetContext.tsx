import { createContext, useContext, useState } from "react";

import { IBudgetContext, IBudgetContextProviderProps } from "./types";

export const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

export const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    balance: {
      value: "0",
    },

    setNewBalanceValue: (balance) => {
      setBudgetContext((ctx) => ({ ...ctx, balance} ));
    }
  }));

  return budgetContext;
};

export const useBudgetContext = () => useContext(BudgetContext);

export const BudgetContextProvider = ({ children }: IBudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
