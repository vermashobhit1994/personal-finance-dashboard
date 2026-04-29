import React from 'react'


export const AmountBalance = ({ currencySymbol, accountBalance,
 }) => {
  
  return (
    <dl>
      <dt >{currencySymbol}</dt>
      <dd>{accountBalance}</dd>
    </dl>
  )
}
