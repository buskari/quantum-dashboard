import React from 'react'
import { Check } from 'lucide-react'

interface CheckboxProps {
  id?: string;
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

function Checkbox({ 
  id, 
  label, 
  description, 
  checked, 
  defaultChecked, 
  onChange, 
  disabled = false 
}: CheckboxProps) {
  const [isChecked, setIsChecked] = React.useState(defaultChecked || false)
  
  const handleChange = () => {
    if (disabled) return
    const newValue = !isChecked
    setIsChecked(newValue)
    onChange?.(newValue)
  }
  
  const isControlled = checked !== undefined
  const currentChecked = isControlled ? checked : isChecked
  
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        role="checkbox"
        aria-checked={currentChecked}
        onClick={handleChange}
        disabled={disabled}
        className={`
          mt-1 flex items-center justify-center w-5 h-5 rounded border-2 transition-all
          ${currentChecked 
            ? 'bg-primary-500 border-primary-500' 
            : 'bg-white border-gray-300 hover:border-primary-500'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        `}
      >
        {currentChecked && (
          <Check size={14} className="text-white" strokeWidth={3} />
        )}
      </button>
      
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <label 
              htmlFor={id}
              onClick={handleChange}
              className={`text-sm font-medium text-gray-900 block ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-xs text-gray-500 mt-0.5">{description}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Checkbox

