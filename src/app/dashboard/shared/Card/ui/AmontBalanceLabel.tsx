import React from 'react'
import styles from "./AmountBalanceLabel.module.css"
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '@/lib/utils';

// CSS-in-typescript schema
export const AmountBalanceLabelVariants = cva(
  "text-center font-bold",
  {
    variants: {
      cardType: {
        'balance': 'text-teal-200',
        'expenses': 'text-red-200',
        'savings': 'text-orange-200',
        'earnings': "text-yellow-200"
      },
    },
    defaultVariants: {
      cardType: 'balance'
    },
  }
)


export interface AmountBalanceLabelProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof AmountBalanceLabelVariants> {
  label?: string;
  className: string;
}


export const AmountBalanceLabel = ({ label, className, cardType }: AmountBalanceLabelProps) => {
  return (
    label &&
    (<p className={cn(AmountBalanceLabelVariants({ cardType }), className)}>
      {label}
    </p>)
  )
}
