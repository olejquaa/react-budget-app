import { createContext, useState} from "react";
import { Currency } from "../../types/types";
import { ICurrencyContext, ICurrencyContextProviderProps } from "./types";



export const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

const useCurrencyContextValue = () => { 
    const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
        currencies: [
        {
            label: "USD",
            value: Currency.USD
        }, 
        {
            label: "EUR",
            value: Currency.EUR,
        },
        {
            label: "GBR",
            value: Currency.GBR
        },
        ]
    }));

    return currencyContext;
}


export const CurrencyContextProvider = ({ children }: ICurrencyContextProviderProps) => { 
    return <CurrencyContext.Provider value={useCurrencyContextValue()}>
        {children}
    </CurrencyContext.Provider>;
} 
