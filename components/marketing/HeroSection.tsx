import React from 'react'
import { cn } from '@/lib/utils'
import Button from '../ui/Button'

export interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle?: string
  description: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  image?: string
  variant?: 'default' | 'centered' | 'split'
  background?: 'gradient' | 'solid' | 'image'
  className?: string
  children?: React.ReactNode
}

const HeroSection = ({ title, subtitle, description, primaryCTA, secondaryCTA, image, variant = 'default', background = 'gradient', className, children, ...rest }: HeroSectionProps) => {
  const backgrounds = {
    gradient: 'bg-gradient-to-br from-blue-600 to-purple-700',
    solid: 'bg-gray-900',
    image: 'bg-gray-900 bg-cover bg-center',
  }

  const isSplit = variant === 'split'
  const isCentered = variant === 'centered'

  return (
    <section
      {...rest}
      className={cn('relative overflow-hidden', backgrounds[background], className)}
      style={background === 'image' && image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {background === 'image' && <div className="absolute inset-0 bg-black/60" />}

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className={cn('grid gap-12', isSplit ? 'lg:grid-cols-2 items-center' : 'lg:grid-cols-1', isCentered && 'text-center')}>
          <div className={cn(isCentered && 'mx-auto max-w-3xl')}>
            {subtitle && <p className="text-blue-300 font-semibold mb-4 uppercase tracking-wide">{subtitle}</p>}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{title}</h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">{description}</p>

            {(primaryCTA || secondaryCTA) && (
              <div className={cn('flex flex-wrap gap-4', isCentered && 'justify-center')}>
                {primaryCTA && (
                  <Button as="a" href={primaryCTA.href} size="lg" variant="primary" className="bg-white text-blue-600 hover:bg-gray-100">
                    {primaryCTA.label}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button as="a" href={secondaryCTA.href} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    {secondaryCTA.label}
                  </Button>
                )}
              </div>
            )}

            {children}
          </div>

          {isSplit && image && background !== 'image' && (
            <div className="relative">
              <img src={image} alt={title} className="rounded-lg shadow-2xl" />
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  )
}

export default HeroSection
