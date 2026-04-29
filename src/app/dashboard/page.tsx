

import React from 'react'
import {useBalance} from "./Balance/hooks/useBalance"
import { Balance } from './Balance/ui/Balance/Balance';
import { CountrySelect } from './Balance/ui/CountrySelect/CountrySelect';
import { Button } from "@/components/ui/button"
import { SpendingCategory } from '../spendingcategory/page';

import CurrencySymbolProvider from "../dashboard/shared/Card/"
export default function DashBoard (){
  
  
  
  return (
    <CurrencySymbolProvider>
        {/* <Balance 
                 accountBalance={"1000"}
                 title={"Total Account Balance"}
        />
        <CountrySelect /> */}
        <Button>Click me</Button>
        <SpendingCategory />
    </CurrencySymbolProvider>
  )
}
