import { ReactNode } from "react";
import { Currency } from "../../types/types";

export interface ICurrencyContextProviderProps {
  children: ReactNode;
}

export interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}

export interface ICurrencyContext {
  currencies: ICurrency[];
  currentCurrency: ICurrency;
  setNewCurrency: (option: ICurrency) => void;
}
