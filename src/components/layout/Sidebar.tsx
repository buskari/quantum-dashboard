import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, User, Settings } from 'lucide-react'

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  items: SidebarItem[];
  currentPath: string;
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

const defaultItems: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <LayoutDashboard size={20} />,
    path: '/'
  },
  {
    id: 'users',
    label: 'Users',
    icon: <Users size={20} />,
    path: '/users'
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <User size={20} />,
    path: '/profile'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings size={20} />,
    path: '/settings'
  }
]

function Sidebar({ items = defaultItems, currentPath, isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const location = useLocation()
  const activePath = currentPath || location.pathname
  
  return (
    <>
      {/* Overlay para mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen?.(false)}
        />
      )}
      
      {/* Sidebar Desktop */}
      <aside className="hidden md:block fixed left-0 top-0 h-screen w-60 bg-gray-800 text-white z-30">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold">SaaS Dashboard</h1>
      </div>
      <nav>
        {items.map((item) => {
          const isActive = activePath === item.path
          const itemClasses = isActive 
            ? 'flex items-center gap-3 px-6 py-3 bg-primary-500 hover:bg-primary-600 transition-colors'
            : 'flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-700 transition-colors'
          
          return (
            <Link key={item.id} to={item.path} className={itemClasses}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
    
    {/* Sidebar Mobile */}
    <aside className={`md:hidden fixed left-0 top-0 h-screen w-60 bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-6 border-b border-gray-700 flex items-center justify-between">
        <h1 className="text-xl font-bold">SaaS Dashboard</h1>
        <button 
          onClick={() => setIsMobileMenuOpen?.(false)}
          className="text-gray-300 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav>
        {items.map((item) => {
          const isActive = activePath === item.path
          const itemClasses = isActive 
            ? 'flex items-center gap-3 px-6 py-3 bg-primary-500 hover:bg-primary-600 transition-colors'
            : 'flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-gray-700 transition-colors'
          
          return (
            <Link 
              key={item.id} 
              to={item.path} 
              className={itemClasses}
              onClick={() => setIsMobileMenuOpen?.(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
    </>
  )
}

export default Sidebar
