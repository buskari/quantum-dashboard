import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

export default function SettingsPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Settings</h1>
      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">Manage your account settings and preferences</p>
      
      <div className="space-y-6">
        <Card title="Account Settings" subtitle="Update your account information">
          <div className="space-y-4">
            <Input 
              label="Username" 
              type="text" 
              defaultValue="johndoe"
            />
            
            <Input 
              label="Email" 
              type="email" 
              defaultValue="john@example.com"
              disabled
              helperText="Email cannot be changed"
            />
            
            <Input 
              label="Language" 
              type="text" 
              defaultValue="English"
            />
            
            <Button variant="primary">
              Save Changes
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

