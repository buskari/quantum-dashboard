import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Checkbox from '../components/ui/Checkbox'

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
        
        <Card title="Notification Preferences" subtitle="Choose what notifications you want to receive">
          <div className="space-y-4">
            <div className="space-y-3">
              <Checkbox 
                id="email-notifications"
                label="Email notifications for new messages"
                description="Receive email when you get a new message"
                defaultChecked
              />
              
              <Checkbox 
                id="push-notifications"
                label="Push notifications for updates"
                description="Get push notifications for important updates"
                defaultChecked
              />
              
              <Checkbox 
                id="weekly-summary"
                label="Weekly summary emails"
                description="Receive a weekly summary of your activity"
              />
            </div>
            
            <Button variant="primary">
              Save Preferences
            </Button>
          </div>
        </Card>
        
        <Card title="Security" subtitle="Manage your password and security settings">
          <div className="space-y-4">
            <Input 
              label="Current Password" 
              type="password" 
              placeholder="••••••••"
            />
            
            <Input 
              label="New Password" 
              type="password" 
              placeholder="••••••••"
            />
            
            <Input 
              label="Confirm Password" 
              type="password" 
              placeholder="••••••••"
            />
            
            <Button variant="primary">
              Update Password
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

