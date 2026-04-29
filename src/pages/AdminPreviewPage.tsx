import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col p-8">
      <div className="max-w-6xl mx-auto w-full">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">Safi Life <span className="text-green-400 font-normal opacity-80 text-xl ml-2">Admin Panel Preview</span></h1>
            <p className="text-gray-400 mt-2">Mockup for the future backend UI</p>
          </div>
          <Link to="/" className="text-gray-400 hover:text-white underline">Назад на сайт</Link>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Partners', value: '1,248' },
            { label: 'New Registrations (30d)', value: '+156' },
            { label: 'Total PV Volume', value: '8.4M PV' },
            { label: 'Pending Withdrawals', value: '12' },
          ].map((stat, i) => (
             <div key={i} className="bg-gray-800 border border-gray-700 p-5 rounded-xl">
               <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
               <div className="text-2xl font-bold">{stat.value}</div>
             </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
               <div className="p-4 border-b border-gray-700 font-semibold">Recent Registrations</div>
               <div className="p-4 text-sm text-gray-400">
                 Table showing User ID, Name, Package (START/VIP etc), Referrer, Registration Date.
               </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
               <div className="p-4 border-b border-gray-700 font-semibold">Withdrawal Requests</div>
               <div className="p-4 text-sm text-gray-400">
                 Table to process payouts: User, Amount, Status (Pending/Approved), Action buttons.
               </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
               <div className="font-semibold mb-4">Management Modules</div>
               <div className="space-y-2">
                 <button className="w-full text-left bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm transition">Users & Tree View</button>
                 <button className="w-full text-left bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm transition">Products Catalog</button>
                 <button className="w-full text-left bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm transition">Marketing Plan Config</button>
                 <button className="w-full text-left bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm transition">Financial Reports</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
