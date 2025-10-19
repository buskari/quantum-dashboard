import React from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

function Button({ 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  icon,
  iconPosition = 'left',
  children,
  className,
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-medium transition-all duration-200'
  
  const variantStyles = {
    primary: 'bg-primary-500 hover:bg-primary-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    outline: 'border-2 border-primary-500 hover:bg-primary-50',
    ghost: 'hover:bg-gray-100'
  }
  
  const textColorStyles = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-primary-500',
    ghost: 'text-gray-600'
  }
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const disabledStyles = (disabled || loading) ? 'opacity-50 cursor-not-allowed' : ''
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${textColorStyles[variant]} ${disabledStyles} ${className || ''}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="inline-block mr-2 animate-spin" size={16} />}
      {!loading && icon && iconPosition === 'left' && <span className="inline-block mr-2">{icon}</span>}
      {children}
      {!loading && icon && iconPosition === 'right' && <span className="inline-block ml-2">{icon}</span>}
    </button>
  )
}

export default Button

