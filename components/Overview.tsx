'use client';

import { useState } from 'react';
import { Search, DollarSign, X } from 'lucide-react';
import dynamic from 'next/dynamic';

// Lazy-load the chart to prevent client-side rendering issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function LoanOverview() {
  const [activeTab, setActiveTab] = useState('Borrow Cash');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const chartOptions = {
    chart: {
      id: 'loan-chart',
      toolbar: { show: false }
    },
    xaxis: {
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    colors: ['#22c55e', '#facc15'],
  };

  const chartSeries = [
    {
      name: 'Series 1',
      data: [500, 700, 600, 800, 900, 400, 500, 300, 200, 700],
    },
    {
      name: 'Series 2',
      data: [600, 400, 700, 300, 500, 800, 600, 900, 300, 400],
    },
  ];

  return (
    <div className="bg-gray-100 p-8 max-w-4xl mx-auto">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-green-500 p-4 rounded-lg">
            <DollarSign size={36} color="white" />
          </div>
          <div>
            <p className="text-green-600 font-bold">DEFICIT</p>
            <p className="text-xl font-semibold text-gray-700">₦ 0.0</p>
          </div>
        </div>

        <button
          onClick={togglePopup}
          className="bg-gray-400 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-500 transition"
        >
          Get A Loan
        </button>
      </div>

      {/* Tabs */}
      <div className="flex mt-6 border-b">
        {['Borrow Cash', 'Transact', 'Deposit Cash'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-center py-3 text-lg font-bold ${
              activeTab === tab
                ? 'bg-green-100 border-b-4 border-green-500'
                : 'bg-white hover:bg-gray-50'
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative mt-6 bg-white shadow-md rounded-lg overflow-hidden">
        <Search size={20} className="absolute left-4 top-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search for loans"
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg overflow-y-auto max-h-[90vh] p-8 relative">
            
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-6">Apply for a Loan</h2>

            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Full name as it appears on bank account" 
                className="p-3 border rounded-lg w-full"
              />
              <input 
                type="number" 
                placeholder="How much do you need?" 
                className="p-3 border rounded-lg w-full"
              />
              <input 
                type="text" 
                placeholder="Loan tenure (in months)" 
                className="p-3 border rounded-lg w-full"
              />
              <input 
                type="text" 
                placeholder="Employment status" 
                className="p-3 border rounded-lg w-full"
              />
              <textarea 
                placeholder="Reason for loan" 
                className="p-3 border rounded-lg w-full col-span-2"
              />
              <input 
                type="text" 
                placeholder="Employment address" 
                className="p-3 border rounded-lg w-full"
              />
              <input 
                type="text" 
                placeholder="Employment address" 
                className="p-3 border rounded-lg w-full"
              />
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Chart</h3>
              <Chart options={chartOptions} series={chartSeries} type="line" height={300} />
            </div>

            <div className="flex items-center mt-4 space-x-2">
              <input type="checkbox" />
              <p className="text-gray-600 text-sm">
                I have read the important information and accept that by completing the application, I will be bound by the terms.
              </p>
            </div>

            <div className="flex items-center mt-4 space-x-2">
              <input type="checkbox" />
              <p className="text-gray-600 text-sm">
                Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus, or other credit reporting agencies.
              </p>
            </div>

            <div className="flex justify-end mt-6">
              <button
                className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                onClick={togglePopup}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}    
    </div>
  );
}
