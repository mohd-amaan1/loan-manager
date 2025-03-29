'use client';

import { Bell, MessageCircle, User, Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Sidebar from './sideBar';

export default function NavbarA() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      <nav className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-white to-gray-100 shadow-md fixed top-0 left-0 w-full z-50">
        {/* Left - Logo & Menu Icon */}
        <div className="flex items-center space-x-4">
          <div className="text-green-800 font-bold text-lg">CREDIT APP</div>
          <Menu
            size={24}
            className="text-green-800 cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4 text-green-800">
          <div className="relative cursor-pointer">
            <Bell size={20} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">!</span>
          </div>
          
          <MessageCircle size={20} className="cursor-pointer" />
          
          {/* Admin Dropdown */}
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <User size={20} />
              <span>Admin</span>
              <ChevronDown size={16} />
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login as User</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login as Verifier</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
