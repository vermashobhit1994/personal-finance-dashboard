"use client";

import { createContext,useContext,useState} from "react"
import { CurrencyHookType } from "../types/CurrencyHookType";
import { ReactNode } from "react";

const CurrencySymbolContext = createContext<CurrencyHookType | undefined>(undefined);

export default function CurrencySymbolProvider({children}:{children: ReactNode}){
const [currencySymbol, setCurrencySymbol] = useState("");

    return(
        <CurrencySymbolContext.Provider value={
            {
                currencySymbol: currencySymbol,
                setCurrencySymbol: setCurrencySymbol
            }}>
            {children}
        </CurrencySymbolContext.Provider>
    )
}

export function useCurrencySymbol(){
    return useContext(CurrencySymbolContext)
}
