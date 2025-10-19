import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Avatar from '../components/ui/Avatar';
import MetricCard from '../components/ui/MetricCard';
import Table from '../components/ui/Table';
import LineChart from '../components/charts/LineChart';
import { Plus, Mail, Lock, Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

export default function TestPage() {
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
          {value}
        </Badge>
      )
    },
  ];

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 },
  ];

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Button Test</h1>
      
      <div className="space-x-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      
      <div className="space-x-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      
      <div className="space-x-2">
        <Button icon={<Plus />} iconPosition="left">With Icon</Button>
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
      </div>
      
      <div className="space-x-2">
        <Badge variant="success">Active</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge>Default</Badge>
      </div>
      
      <div className="space-y-4">
        <Card title="Simple Card">
          This is a simple card with just a title.
        </Card>
        
        <Card title="Card with Subtitle" subtitle="This is a subtitle">
          Content goes here.
        </Card>
        
        <Card padding="sm">
          Small padding card
        </Card>
        
        <Card padding="lg">
          Large padding card
        </Card>
      </div>
      
      <div className="space-y-4 max-w-md">
        <Input label="Email" type="email" placeholder="john@example.com" />
        
        <Input 
          label="Password" 
          type="password" 
          placeholder="••••••••" 
          helperText="Must be at least 8 characters"
        />
        
        <Input 
          label="Email with Icon" 
          type="email" 
          icon={<Mail size={18} />}
          placeholder="john@example.com"
        />
        
        <Input 
          label="Error Example" 
          type="text" 
          error="This field is required"
          placeholder="Enter something"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" size="sm" />
        <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" size="md" />
        <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" size="lg" />
        <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" size="xl" />
        <Avatar fallback="JD" size="lg" />
      </div>
      
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
      
      <Table 
        columns={columns} 
        data={users} 
        onRowClick={(row) => console.log('Clicked:', row)}
      />
      
      <LineChart 
        data={chartData} 
        title="Monthly Revenue" 
        color="#6366f1"
      />
    </div>
  );
}

