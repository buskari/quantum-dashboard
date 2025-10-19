import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { Mail, Lock } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card padding="lg">
          <h1 className="text-2xl font-bold text-center mb-2">Sign In</h1>
          <p className="text-sm text-gray-600 text-center mb-6">Welcome back! Please sign in to continue.</p>
          
          <div className="space-y-4">
            <Input 
              label="Email" 
              type="email" 
              placeholder="john@example.com"
              icon={<Mail size={18} />}
            />
            
            <Input 
              label="Password" 
              type="password" 
              placeholder="••••••••"
              icon={<Lock size={18} />}
              helperText="Must be at least 8 characters"
            />
            
            <div className="text-right">
              <a href="#" className="text-sm text-primary-500 hover:text-primary-600">
                Forgot password?
              </a>
            </div>
            
            <Button variant="primary" className="w-full">
              Sign In
            </Button>
            
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
            
            <p className="text-sm text-center text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-primary-500 hover:text-primary-600 font-medium">
                Sign up
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

