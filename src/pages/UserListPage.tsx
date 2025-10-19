import Card from '../components/ui/Card'
import Table from '../components/ui/Table'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'

export default function UserListPage() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager', status: 'active', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'active', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'active', avatar: 'https://i.pravatar.cc/150?img=6' },
    { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'User', status: 'inactive', avatar: 'https://i.pravatar.cc/150?img=7' },
    { id: 8, name: 'Fiona Green', email: 'fiona@example.com', role: 'Manager', status: 'active', avatar: 'https://i.pravatar.cc/150?img=8' },
    { id: 9, name: 'George Wilson', email: 'george@example.com', role: 'User', status: 'active', avatar: 'https://i.pravatar.cc/150?img=9' },
    { id: 10, name: 'Hannah Lee', email: 'hannah@example.com', role: 'User', status: 'inactive', avatar: 'https://i.pravatar.cc/150?img=10' },
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
      key: 'role',
      label: 'Role',
      render: (value: string) => {
        const variant = value === 'Admin' ? 'info' : value === 'Manager' ? 'warning' : 'default';
        return <Badge variant={variant}>{value}</Badge>;
      }
    },
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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">User Management</h1>
      <p className="text-gray-600 mb-6">Manage and view all users</p>
      
      <Card>
        <Table 
          columns={columns} 
          data={users}
        />
      </Card>
    </div>
  )
}

