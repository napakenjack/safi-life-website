import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { Menu, Bell, Search, User } from 'lucide-react';

export function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex font-sans">
      <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 xl:ml-[280px] flex flex-col min-h-screen max-w-full relative overflow-hidden">
        {/* Top bar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-safi-green/5 sticky top-0 z-30 px-4 md:px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button 
              className="xl:hidden p-2 -ml-2 text-safi-green hover:bg-[#F5F5F0] rounded-xl transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center relative">
               <Search className="w-4 h-4 text-safi-text/40 absolute left-3" />
               <input 
                 type="text" 
                 placeholder="Глобальный поиск..." 
                 className="pl-10 pr-4 py-2 bg-[#F5F5F0] border border-safi-green/5 rounded-xl text-sm w-80 focus:ring-2 focus:ring-safi-green/20 outline-none text-safi-green font-medium placeholder:text-safi-text/40"
               />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-[#F5F5F0] flex items-center justify-center text-safi-green hover:bg-safi-green hover:text-[#D4AF37] transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-safi-green/10">
              <div className="text-right">
                <div className="text-sm font-bold text-safi-green">Super Admin</div>
                <div className="text-[10px] uppercase tracking-widest text-safi-green/50 font-bold">Администратор</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-safi-green flex items-center justify-center text-[#D4AF37] font-bold">
                <User className="w-5 h-5" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto overflow-x-hidden relative bg-[#FDFBF7]">
          <div className="relative z-10 mx-auto w-full max-w-[1600px] pb-20">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
