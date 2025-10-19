import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

interface LineChartProps {
  data: Array<{ name: string; value: number }>;
  title?: string;
  color?: string;
  height?: number;
}

function LineChart({ data, title, color = '#6366f1', height = 250 }: LineChartProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
      {title && <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" style={{ fontSize: '12px' }} />
          <YAxis style={{ fontSize: '12px' }} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChart

