import React from 'react'

export const CurrencyImageLabel = ({currencyImagePath, 
                                    currencyImageAltText, 
                                  className}) => {
  return (
    currencyImagePath && currencyImageAltText && (
        <Image className={className} src={currencyImagePath} alt={currencyImageAltText} />
    )
  )
}
