import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Menu, Bell, Search } from 'lucide-react';
import { user } from '../../data/dashboardMock';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-safi-bg flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 lg:ml-[280px] flex flex-col min-h-screen max-w-full relative overflow-hidden">
        {/* Top bar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-safi-green/5 sticky top-0 z-30 px-4 md:px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 -ml-2 text-safi-green hover:bg-[#F5F5F0] rounded-xl transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <LanguageSwitcher />
            </div>
            <button className="hidden sm:flex w-10 h-10 rounded-full bg-[#F5F5F0] items-center justify-center text-safi-green hover:bg-safi-green hover:text-safi-gold transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-safi-green/10">
              <div className="text-right">
                <div className="text-sm font-bold text-safi-green">{user.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-safi-gold font-bold">{user.status}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-safi-green/10 flex items-center justify-center text-safi-green font-serif font-bold text-lg">
                {user.name.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto overflow-x-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safi-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"></div>
          <div className="relative z-10 max-w-6xl mx-auto w-full pb-20">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
