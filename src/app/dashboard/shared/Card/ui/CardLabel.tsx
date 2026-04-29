import React from 'react'

import { CardType } from '../types/CardType'

type CardLabel = CardType['label']

export const CardLabel = ({label}: CardLabel) => {
  return (
    label &&
        (<p >
          {label}
        </p>)
  )
}
