import React from 'react'

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

function Card({ title, subtitle, children, className = '', padding = 'md' }: CardProps) {
  const baseStyles = 'bg-white rounded-lg border border-gray-200 shadow-sm'
  
  const paddingStyles = {
    sm: 'p-3 md:p-4',
    md: 'p-4 md:p-6',
    lg: 'p-6 md:p-8'
  }
  
  return (
    <div className={`${baseStyles} ${paddingStyles[padding]} ${className}`}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-base md:text-lg font-semibold text-gray-900">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  )
}

export default Card

