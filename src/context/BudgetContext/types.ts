import { ReactNode } from "react";

interface IBudgetContextProviderProps {
  children: ReactNode;
}

interface IBudgetContext {
  balance: IBudget;
  setNewBalanceValue: (balance:IBudget) => void;
}

interface IBudget {
  value: number;
}

export type {IBudgetContextProviderProps, IBudgetContext, IBudget}