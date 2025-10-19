import Card from '../components/ui/Card'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

export default function UserProfilePage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-6">
        <Card title="Profile Information">
          <div className="flex flex-col items-center text-center">
            <Avatar 
              src="https://i.pravatar.cc/150?img=1" 
              alt="John Doe" 
              size="xl" 
            />
            <h2 className="text-xl font-semibold text-gray-900 mt-4">John Doe</h2>
            <p className="text-sm text-gray-500 mt-1">john@example.com</p>
            <div className="mt-2">
              <Badge variant="info">Admin</Badge>
            </div>
          </div>
        </Card>
        
        <Card title="Edit Profile">
          <div className="space-y-4">
            <Input 
              label="Full Name" 
              type="text" 
              defaultValue="John Doe"
            />
            
            <Input 
              label="Email" 
              type="email" 
              defaultValue="john@example.com"
            />
            
            <Input 
              label="Phone" 
              type="tel" 
              defaultValue="+1 (555) 123-4567"
            />
            
            <Input 
              label="Bio" 
              type="text" 
              placeholder="Tell us about yourself"
            />
            
            <Button variant="primary" className="w-full">
              Save Changes
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

