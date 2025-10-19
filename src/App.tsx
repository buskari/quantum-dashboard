import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import TestPage from './pages/TestPage'
import DashboardPage from './pages/DashboardPage'
import UserListPage from './pages/UserListPage'
import UserProfilePage from './pages/UserProfilePage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import { LayoutDashboard, Users, User, Settings } from 'lucide-react'

function AppContent() {
  const location = useLocation()
  
  const navItems = [
    { id: 'home', label: 'Home', icon: <LayoutDashboard />, path: '/' },
    { id: 'users', label: 'Users', icon: <Users />, path: '/users' },
    { id: 'profile', label: 'Profile', icon: <User />, path: '/profile' },
    { id: 'settings', label: 'Settings', icon: <Settings />, path: '/settings' },
  ]
  
  const pageTitles: { [key: string]: string } = {
    '/': 'Home',
    '/test': 'Test Page',
    '/users': 'Users',
    '/profile': 'Profile',
    '/settings': 'Settings',
  }
  
  const pageTitle = pageTitles[location.pathname] || 'Dashboard'
  
  return (
    <div className="flex">
      <Sidebar items={navItems} currentPath={location.pathname} />
      <main className="md:ml-60 flex-1 w-full">
        <Header 
          title={pageTitle} 
          userName="John Doe" 
          userAvatar="https://i.pravatar.cc/150?img=1" 
        />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/users" element={<UserListPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<AppContent />} />
      </Routes>
    </Router>
  )
}

export default App

