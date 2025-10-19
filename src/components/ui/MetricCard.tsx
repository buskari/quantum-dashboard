import React from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down';
}

function MetricCard({ title, value, change, icon, trend }: MetricCardProps) {
  const changeColor = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'
  const ChangeIcon = trend === 'up' ? ArrowUp : trend === 'down' ? ArrowDown : null
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 relative">
      {icon && (
        <div className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400">
          {icon}
        </div>
      )}
      <p className="text-xs md:text-sm font-medium text-gray-600">{title}</p>
      <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{value}</p>
      {change !== undefined && (
        <div className={`flex items-center gap-1 mt-2 ${changeColor}`}>
          {ChangeIcon && <ChangeIcon size={16} />}
          <span className="text-sm font-medium">{change > 0 ? '+' : ''}{change}%</span>
        </div>
      )}
    </div>
  )
}

export default MetricCard

