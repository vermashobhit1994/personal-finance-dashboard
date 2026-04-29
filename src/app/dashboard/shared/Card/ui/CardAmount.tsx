import React from 'react'

import { CardType } from "../types/CardType";


type CardAmount = CardType['amount']


export const CardAmount = ({currencySymbol, accountBalance}:CardAmount) => {
  return (
   <dl>
      <dt >{currencySymbol}</dt>
      <dd>{accountBalance}</dd>
    </dl>
  )
}
