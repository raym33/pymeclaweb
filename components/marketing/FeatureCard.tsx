import React from 'react'
import { cn } from '@/lib/utils'

export interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  variant?: 'default' | 'bordered' | 'elevated'
  iconColor?: string
  className?: string
}

const FeatureCard = ({ icon, title, description, variant = 'default', iconColor = 'text-blue-600', className }: FeatureCardProps) => {
  const variants = {
    default: 'bg-white',
    bordered: 'bg-white border-2 border-gray-200',
    elevated: 'bg-white shadow-lg',
  }

  return (
    <div className={cn('p-6 rounded-lg transition-all duration-200 hover:shadow-md', variants[variant], className)}>
      <div className={cn('w-12 h-12 mb-4', iconColor)}>{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default FeatureCard
