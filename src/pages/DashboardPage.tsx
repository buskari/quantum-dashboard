import MetricCard from '../components/ui/MetricCard'
import LineChart from '../components/charts/LineChart'
import Table from '../components/ui/Table'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 },
  ];

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active', avatar: 'https://i.pravatar.cc/150?img=3' },
  ];

  const columns = [
    {
      key: 'avatar',
      label: 'Avatar',
      render: (value: string) => <Avatar src={value} size="sm" />
    },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'active' ? 'success' : 'default'}>
          {value.toUpperCase()}
        </Badge>
      )
    },
  ];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-4 gap-4">
        <MetricCard 
          title="Total Users" 
          value="2,543" 
          change={12.5} 
          trend="up"
          icon={<Users size={24} />}
        />
        
        <MetricCard 
          title="Revenue" 
          value="$45,231" 
          change={8.2} 
          trend="up"
          icon={<DollarSign size={24} />}
        />
        
        <MetricCard 
          title="Orders" 
          value="1,234" 
          change={-3.1} 
          trend="down"
          icon={<ShoppingCart size={24} />}
        />
        
        <MetricCard 
          title="Growth" 
          value="23.5%" 
          change={5.4} 
          trend="up"
          icon={<TrendingUp size={24} />}
        />
      </div>
      
      <div className="mt-6">
        <LineChart 
          data={chartData} 
          title="Monthly Revenue"
        />
      </div>
      
      <div className="mt-6">
        <Card>
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
          <Table 
            columns={columns} 
            data={users}
          />
        </Card>
      </div>
    </div>
  )
}

