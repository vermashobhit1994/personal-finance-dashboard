"use client";

import { useCurrencySymbol } from "../context/CurrencySymbolContext";
import { useBalance } from "./useBalance";
import { getAllInfoByISO, getAllISOCodes, getISOByParam, getParamByISO } from 'iso-country-currency';
import getSymbolFromCurrency from 'currency-symbol-map'

export const useCountrySelect = () => {
  
  const { setCurrencySymbol } = useBalance();

  

  
  const getCountriesNameList = () => {
    return getAllISOCodes().map((country) => {
      return {
        "id": country.iso,
        "name": country.countryName
      }
    })
  }

 
  function changeCurrencySymbol(event) {
    const selectedCountryName = event.currentTarget.value;
    const iso2 = getISOByParam('countryName', selectedCountryName);
    const currencySymbol = getSymbolFromCurrency(getAllInfoByISO(iso2).currency)
    

    setCurrencySymbol(currencySymbol)

  }


  return (
    {
      'countryNameList': getCountriesNameList(),
      'changeCurrencySymbol': changeCurrencySymbol,
    }
  )
}
