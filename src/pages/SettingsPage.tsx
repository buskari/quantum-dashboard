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
        
        <Card title="Notification Preferences" subtitle="Choose what notifications you want to receive">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="email-notifications"
                  className="mt-1 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  defaultChecked
                />
                <div>
                  <label htmlFor="email-notifications" className="text-sm font-medium text-gray-900 cursor-pointer">
                    Email notifications for new messages
                  </label>
                  <p className="text-xs text-gray-500">Receive email when you get a new message</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="push-notifications"
                  className="mt-1 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  defaultChecked
                />
                <div>
                  <label htmlFor="push-notifications" className="text-sm font-medium text-gray-900 cursor-pointer">
                    Push notifications for updates
                  </label>
                  <p className="text-xs text-gray-500">Get push notifications for important updates</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="weekly-summary"
                  className="mt-1 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
                <div>
                  <label htmlFor="weekly-summary" className="text-sm font-medium text-gray-900 cursor-pointer">
                    Weekly summary emails
                  </label>
                  <p className="text-xs text-gray-500">Receive a weekly summary of your activity</p>
                </div>
              </div>
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

