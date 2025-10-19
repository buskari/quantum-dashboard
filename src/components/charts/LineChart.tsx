import React from 'react'
import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

interface LineChartProps {
  data: Array<{ name: string; value: number }>;
  title?: string;
  color?: string;
  height?: number;
}

function LineChart({ data, title, color = '#6366f1', height = 300 }: LineChartProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {title && <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChart

