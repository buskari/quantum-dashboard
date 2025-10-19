import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import { Plus, Mail, Lock } from 'lucide-react';

export default function TestPage() {
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
    </div>
  );
}

