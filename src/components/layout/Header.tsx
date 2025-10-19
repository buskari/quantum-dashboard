import React from 'react'
import { Bell } from 'lucide-react'

interface HeaderProps {
  title?: string;
  userName?: string;
  userAvatar?: string;
}

function Header({ title, userName, userAvatar }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div>
        {title && <h1 className="text-xl font-semibold text-gray-900">{title}</h1>}
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-900">
          <Bell size={20} />
        </button>
        {userAvatar && (
          <img src={userAvatar} alt={userName || 'User'} className="w-8 h-8 rounded-full" />
        )}
        {userName && (
          <span className="text-sm font-medium text-gray-700">{userName}</span>
        )}
      </div>
    </header>
  )
}

export default Header
