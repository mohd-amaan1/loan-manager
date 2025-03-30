'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1', value: 400 },
  { name: '2', value: 300 },
  { name: '3', value: 500 },
  { name: '4', value: 700 },
  { name: '5', value: 200 },
  { name: '6', value: 900 },
  { name: '7', value: 600 },
  { name: '8', value: 300 },
  { name: '9', value: 700 },
];

export default function LoanFormPopup() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-8">
      {/* Trigger Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Get a Loan
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl w-full relative">
            
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            {/* Form Header */}
            <h2 className="text-2xl font-bold mb-6 text-gray-800">APPLY FOR A LOAN</h2>

            {/* Form */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-gray-600">Full name as it appears on bank account</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="text-gray-600">How much do you need?</label>
                <input
                  type="number"
                  placeholder="Loan amount"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="text-gray-600">Loan tenure (in months)</label>
                <input
                  type="number"
                  placeholder="Loan tenure"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="text-gray-600">Employment status</label>
                <input
                  type="text"
                  placeholder="Employment status"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div className="col-span-2">
                <label className="text-gray-600">Reason for loan</label>
                <textarea
                  placeholder="Reason for loan"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="text-gray-600">Employment address</label>
                <input
                  type="text"
                  placeholder="Employment address"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="text-gray-600">Employment address</label>
                <input
                  type="text"
                  placeholder="Employment address"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            {/* Chart */}
            <div className="mt-8">
              <h3 className="text-gray-800 font-semibold mb-4">Chart</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Checkboxes */}
            <div className="mt-6 flex space-x-4">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                I have read the important information and accept that by completing the application, I will be bound by the terms.
              </label>
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus, or other credit reporting agencies.
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
