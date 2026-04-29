"use client";


import { CountrySelect } from '../CountrySelect/CountrySelect'
import { useBalance } from '../../hooks/useBalance'
import { CurrencyImageLabel } from '../CurrencyImageLabel/CurrencyImageLabel';
import { AmountBalanceLabel } from '../AmountBalanceLabel/AmontBalanceLabel';
import { AmountBalance } from '../AmountBalance/AmountBalance';




export function Balance ({
                          currencyImagePath=null, 
                          title=null, 
                          accountBalance=null,
                          cardType="balance" 
                        }) {
    const {currencySymbol} = useBalance();
    
    

    return (
    
    (currencyImagePath || title || currencySymbol || accountBalance) && 
    (<section >

            {currencyImagePath && (
                <CurrencyImageLabel currencyImagePath={currencyImagePath}
                                    currencyImageAltText="label for Account balance"
                                    cardType={cardType}
                  />)}

        
            {title && (
            <AmountBalanceLabel label={title}
                                  cardType="savings" 
                                  cardType={cardType}
                                  />)}

            {accountBalance && currencySymbol && (     
            <AmountBalance currencySymbol={currencySymbol}
                            accountBalance={accountBalance}
                            cardType={cardType}
                            
            />)}
            
              
            <CountrySelect cardType={cardType}/>
        
    </section>
    )
    
  )
}
