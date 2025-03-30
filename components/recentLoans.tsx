'use client';

import { useState } from 'react';
import { MoreVertical, ChevronLeft, ChevronRight, Filter, SortAsc } from 'lucide-react';
import Image from 'next/image';

interface Loan {
  id: number;
  avatar: string;
  title: string;
  updated: string;
  customer: string;
  customerDate: string;
  date: string;
  time: string;
  status: 'PENDING' | 'APPROVED';
}

const loans: Loan[] = [
  { id: 1, avatar: '/avatars/avatar1.jpg', title: 'Contact Email not Linked', updated: '1 day ago', customer: 'Tom Cruise', customerDate: '24.05.2019', date: 'June 09, 2021', time: '6:30 PM', status: 'PENDING' },
  { id: 2, avatar: '/avatars/avatar2.jpg', title: 'Adding Images to Featured Posts', updated: '1 day ago', customer: 'Matt Damon', customerDate: '24.05.2019', date: 'June 09, 2021', time: '8:00 AM', status: 'PENDING' },
  { id: 3, avatar: '/avatars/avatar3.jpg', title: 'When will I be charged this month?', updated: '1 day ago', customer: 'Robert Downey', customerDate: '24.05.2019', date: 'June 08, 2021', time: '7:30 PM', status: 'PENDING' },
  { id: 4, avatar: '/avatars/avatar4.jpg', title: 'Payment not going through', updated: '2 days ago', customer: 'Christian Bale', customerDate: '24.05.2019', date: 'June 08, 2021', time: '5:00 PM', status: 'PENDING' },
  { id: 5, avatar: '/avatars/avatar5.jpg', title: 'Unable to add replies', updated: '2 days ago', customer: 'Henry Cavil', customerDate: '24.05.2019', date: 'June 08, 2021', time: '4:00 PM', status: 'APPROVED' },
  { id: 6, avatar: '/avatars/avatar6.jpg', title: 'Downtime since last week', updated: '3 days ago', customer: 'Chris Evans', customerDate: '23.05.2019', date: 'June 08, 2021', time: '2:00 PM', status: 'APPROVED' },
  { id: 7, avatar: '/avatars/avatar7.jpg', title: 'Referral Bonus', updated: '4 days ago', customer: 'Sam Smith', customerDate: '22.05.2019', date: 'June 08, 2021', time: '11:30 AM', status: 'PENDING' },
];

export default function RecentLoans() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Recent Loans</h2>
        
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <SortAsc size={16} className="mr-1" />
            Sort
          </button>
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <Filter size={16} className="mr-1" />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2 px-4">User details</th>
              <th className="py-2 px-4">Customer name</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {loans.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((loan) => (
              <tr key={loan.id} className="border-b hover:bg-gray-50 transition">
                {/* User Details */}
                <td className="flex items-center py-4 px-4 space-x-4">
                  <Image src={loan.avatar} alt={loan.title} width={40} height={40} className="rounded-full" />
                  <div>
                    <p className="font-medium">{loan.title}</p>
                    <span className="text-sm text-gray-500">Updated {loan.updated}</span>
                  </div>
                </td>

                {/* Customer Name */}
                <td className="py-4 px-4">
                  <p className="font-medium">{loan.customer}</p>
                  <span className="text-sm text-gray-500">on {loan.customerDate}</span>
                </td>

                {/* Date */}
                <td className="py-4 px-4">
                  <p className="font-medium">{loan.date}</p>
                  <span className="text-sm text-gray-500">{loan.time}</span>
                </td>

                {/* Status Action */}
                <td className="py-4 px-4 flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${loan.status === 'APPROVED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {loan.status}
                  </span>
                  <MoreVertical size={20} className="text-gray-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">
          Rows per page: <strong>{rowsPerPage}</strong>
        </span>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={handlePrev} 
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-200'}`}
          >
            <ChevronLeft size={18} />
          </button>

          <span className="text-sm">
            {currentPage}-{Math.ceil(loans.length / rowsPerPage)} of {loans.length}
          </span>

          <button 
            onClick={handleNext} 
            disabled={currentPage * rowsPerPage >= loans.length}
            className={`p-2 rounded-full ${currentPage * rowsPerPage >= loans.length ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-200'}`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
