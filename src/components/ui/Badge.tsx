import React from 'react'

interface BadgeProps {
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default';
  children: React.ReactNode;
}

function Badge({ variant = 'default', children }: BadgeProps) {
  const baseStyles = 'px-2 py-1 rounded-full text-xs font-semibold uppercase inline-block'
  
  const variantStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-amber-500 text-white',
    info: 'bg-blue-500 text-white',
    default: 'bg-gray-500 text-white'
  }
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </span>
  )
}

export default Badge

