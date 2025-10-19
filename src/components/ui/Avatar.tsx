import React, { useState } from 'react'

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
}

function Avatar({ src, alt = 'Avatar', size = 'md', fallback }: AvatarProps) {
  const [imageError, setImageError] = useState(false)
  
  const baseStyles = 'rounded-full object-cover bg-gray-200 flex items-center justify-center'
  
  const sizeStyles = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg'
  }
  
  const showFallback = !src || imageError
  
  if (showFallback) {
    return (
      <div className={`${baseStyles} ${sizeStyles[size]} font-semibold text-gray-600`}>
        {fallback || alt.charAt(0).toUpperCase()}
      </div>
    )
  }
  
  return (
    <img
      src={src}
      alt={alt}
      className={`${baseStyles} ${sizeStyles[size]}`}
      onError={() => setImageError(true)}
    />
  )
}

export default Avatar

