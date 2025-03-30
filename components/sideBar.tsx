'use client';

import { 
  Home, Users, CreditCard, RefreshCw, Settings, LogOut, DollarSign, FileText, Calendar, Briefcase, Clipboard, ShieldCheck, BarChart, Layers, UserCheck, X 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-40" 
          onClick={toggleSidebar}
        />
      )}

      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-green-900 text-white z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ zIndex: 60 }} // Sidebar above the overlay
      >
        <div className="flex justify-between items-center p-4 bg-green-800">
          <div className="flex items-center">
            <Image src="/profile.jpg" alt="Admin" width={40} height={40} className="rounded-full mr-2" />
            <h2 className="text-lg font-bold">John Doe</h2>
          </div>
          <X size={24} className="cursor-pointer hover:text-red-400" onClick={toggleSidebar} />
        </div>

        <div className="overflow-y-auto h-[calc(100vh-64px)] p-4">
          <ul className="space-y-4">
            <SidebarItem href="/admin/dashboard" icon={Home} label="Dashboard" />
            <SidebarItem href="/admin/borrowers" icon={Users} label="Borrowers" />
            <SidebarItem href="/admin/loans" icon={CreditCard} label="Loans" />
            <SidebarItem href="/admin/repayments" icon={RefreshCw} label="Repayments" />
            <SidebarItem href="/admin/savings" icon={DollarSign} label="Savings" />
            <SidebarItem href="/admin/reports" icon={FileText} label="Reports" />
            <SidebarItem href="/admin/loan-parameters" icon={Layers} label="Loan Parameters" />
            <SidebarItem href="/admin/access-config" icon={ShieldCheck} label="Access Configuration" />
            <SidebarItem href="/admin/expenses" icon={BarChart} label="Expenses" />
            <SidebarItem href="/admin/payroll" icon={Briefcase} label="Payroll" />
            <SidebarItem href="/admin/income" icon={Clipboard} label="Other Incomes" />
            <SidebarItem href="/admin/calendar" icon={Calendar} label="Calendar" />
            <SidebarItem href="/admin/investor-accounts" icon={UserCheck} label="Investor Accounts" />
            
            <li className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded-md mt-8 cursor-pointer">
              <LogOut size={20} />
              <Link href="/logout">Signout</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

const SidebarItem = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <li className="flex items-center space-x-2 hover:bg-green-700 p-2 rounded-md">
    <Icon size={20} />
    <Link href={href}>{label}</Link>
  </li>
);
