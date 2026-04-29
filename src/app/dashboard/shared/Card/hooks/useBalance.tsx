"use client";

import { useCurrencySymbol } from '../context/CurrencySymbolContext';


export function useBalance() {
    const {currencySymbol, setCurrencySymbol} = useCurrencySymbol();
    
    
    return (
        {
            'currencySymbol': currencySymbol, 
            "setCurrencySymbol": setCurrencySymbol 
        }
    )
}
