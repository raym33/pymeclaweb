import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated' | 'ghost'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const Card = ({ variant = 'default', padding = 'md', className, children, ...props }: CardProps) => {
  const variants = {
    default: 'bg-white border border-gray-200',
    bordered: 'bg-white border-2 border-gray-300',
    elevated: 'bg-white shadow-lg border border-gray-100',
    ghost: 'bg-transparent',
  }
  const paddings = { none: '', sm: 'p-3', md: 'p-6', lg: 'p-8' }

  return (
    <div className={cn('rounded-lg', variants[variant], paddings[padding], className)} {...props}>
      {children}
    </div>
  )
}

export const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mb-4', className)} {...props}>{children}</div>
)

export const CardBody = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(className)} {...props}>{children}</div>
)

export const CardFooter = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-4 pt-4 border-t border-gray-200', className)} {...props}>{children}</div>
)

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card
