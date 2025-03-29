'use client';

import { Bell, CreditCard, Home, MessageCircle, User, Wallet } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-white to-gray-100 shadow-md">
      {/* Left - Logo */}
      <div className="text-green-800 font-bold text-lg">CREDIT APP</div>

      {/* Center - Navigation Links */}
      <div className="flex space-x-6 text-green-800">
        <Link href="/home" className="flex items-center space-x-2 hover:text-green-600">
          <Home size={20} /> <span>Home</span>
        </Link>
        <Link href="/payments" className="flex items-center space-x-2 hover:text-green-600">
          <Wallet size={20} /> <span>Payments</span>
        </Link>
        <Link href="/budget" className="flex items-center space-x-2 hover:text-green-600">
          <CreditCard size={20} /> <span>Budget</span>
        </Link>
        <Link href="/card" className="flex items-center space-x-2 hover:text-green-600">
          <CreditCard size={20} /> <span>Card</span>
        </Link>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center space-x-4 text-green-800">
        <div className="relative cursor-pointer">
          <Bell size={20} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">!</span>
        </div>
        <MessageCircle size={20} className="cursor-pointer" />
        <div className="flex items-center space-x-2 cursor-pointer">
          <User size={20} />
          <span>User</span>
          <span className="text-xs">▼</span>
        </div>
      </div>
    </nav>
  );
}
