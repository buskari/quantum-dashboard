import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Home from './pages/Home'
import TestPage from './pages/TestPage'
import { LayoutDashboard, Users, User, Settings } from 'lucide-react'

function AppContent() {
  const location = useLocation()
  
  const navItems = [
    { id: 'home', label: 'Home', icon: <LayoutDashboard />, path: '/' },
    { id: 'users', label: 'Users', icon: <Users />, path: '/users' },
    { id: 'profile', label: 'Profile', icon: <User />, path: '/profile' },
    { id: 'settings', label: 'Settings', icon: <Settings />, path: '/settings' },
  ]
  
  return (
    <div className="flex">
      <Sidebar items={navItems} currentPath={location.pathname} />
      <main className="ml-60 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

