import { ReactNode } from "react";

export interface IBudgetContextProviderProps {
  children: ReactNode;
}

export interface IBudgetContext {
  balance: IBudget;
  setNewBalanceValue: (balance:IBudget) => void;
}

export interface IBudget {
  value: string;
}
