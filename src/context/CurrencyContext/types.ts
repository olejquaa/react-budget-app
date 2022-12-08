import { ReactNode } from "react";
import { Currency } from "../../config";

interface ICurrencyContextProviderProps {
  children: ReactNode;
}

interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}

interface ICurrencyContext {
  currencies: ICurrency[];
  currentCurrency: ICurrency;
  setNewCurrency: (option: ICurrency) => void;
}

export type { ICurrencyContextProviderProps, ICurrency, ICurrencyContext };
