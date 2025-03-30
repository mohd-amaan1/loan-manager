'use client';

import { MoreVertical, Filter, ArrowLeft, ArrowRight, ChevronUp } from 'lucide-react';

const loans = [
  {
    officer: 'John Okoh',
    image: '/avatars/user-avatar.jpg', // Replace with real image path
    amount: '50,000.00',
    date: 'June 09, 2021',
    time: '6:30 PM',
    status: 'PENDING',
    statusColor: 'bg-yellow-400',
  },
  {
    officer: 'John Okoh',
    image: '/avatars/user-avatar.jpg',
    amount: '100,000.00',
    date: 'June 07, 2021',
    time: '6:30 PM',
    status: 'VERIFIED',
    statusColor: 'bg-green-400',
  },
  {
    officer: 'John Okoh',
    image: '/avatars/user-avatar.jpg',
    amount: '100,000.00',
    date: 'June 07, 2021',
    time: '6:30 PM',
    status: 'REJECTED',
    statusColor: 'bg-red-400',
  },
  {
    officer: 'John Okoh',
    image: '/avatars/user-avatar.jpg',
    amount: '100,000.00',
    date: 'May 27, 2021',
    time: '6:30 PM',
    status: 'APPROVED',
    statusColor: 'bg-blue-400',
  },
];

export default function AppliedLoans() {
  return (
    <div className="bg-white min-h-screen p-8 rounded-lg shadow-md max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Applied Loans</h2>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <ChevronUp size={18} />
            <span>Sort</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <Filter size={18} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg overflow-hidden">
        <table className="w-full text-left bg-white">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-4">Loan Officer</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Date Applied</th>
              <th className="p-4">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4 flex items-center space-x-4">
                  <img
                    src={loan.image}
                    alt={loan.officer}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">{loan.officer}</p>
                    <p className="text-gray-500 text-sm">Updated 1 day ago</p>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-gray-800 font-semibold">₦ {loan.amount}</p>
                  <p className="text-gray-500 text-sm">Not Debt Yet</p>
                </td>
                <td className="p-4">
                  <p className="text-gray-800">{loan.date}</p>
                  <p className="text-gray-500 text-sm">{loan.time}</p>
                </td>
                <td className="p-4">
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-white text-sm font-bold ${loan.statusColor}`}
                  >
                    {loan.status}
                  </span>
                </td>
                <td className="p-4">
                  <MoreVertical className="text-gray-500 hover:text-gray-800 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-gray-600">
        <div className="text-sm">Rows per page: <span className="font-semibold">7</span></div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">1-4 of 4</span>
          <ArrowLeft size={18} className="cursor-pointer hover:text-gray-800" />
          <ArrowRight size={18} className="cursor-pointer hover:text-gray-800" />
        </div>
      </div>
    </div>
  );
}
