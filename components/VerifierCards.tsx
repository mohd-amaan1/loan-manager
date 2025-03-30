'use client';

import { Users, UserCheck, DollarSign, CreditCard, Banknote, PiggyBank, Building, Wallet, UserMinus } from 'lucide-react';

export default function DashboardCards() {
  const cards = [
    { icon: <Users size={32} />, value: '50', label: 'LOANS' },
    { icon: <UserMinus size={32} />, value: '100', label: 'BORROWERS' },
    { icon: <DollarSign size={32} />, value: '550,000', label: 'CASH DISBURSED' },
    { icon: <PiggyBank size={32} />, value: '450,000', label: 'SAVINGS' },
    { icon: <UserCheck size={32} />, value: '30', label: 'REPAID LOANS' },
    { icon: <Building size={32} />, value: '1,000,000', label: 'CASH RECEIVED' },
  ];

  return (
    <div className="p-6 mt-5">
      <h5 className=" font-bold text-green-900 mb-6">Dashboard &gt; <span className='text-2xl'>Loans</span> </h5>
      <div className="grid grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="flex items-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="bg-green-800 text-white p-4 flex items-center justify-center">
              {card.icon}
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold">{card.value}</h2>
              <p className="text-gray-600">{card.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
