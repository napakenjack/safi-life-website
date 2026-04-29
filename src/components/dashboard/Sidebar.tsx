import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { LayoutDashboard, Users, CreditCard, Gift, Star, UserCircle, HelpCircle, LogOut } from 'lucide-react';

const menuItems = [
  { path: '/dashboard', name: 'Обзор', icon: LayoutDashboard },
  { path: '/dashboard/structure', name: 'Моя структура', icon: Users },
  { path: '/dashboard/transactions', name: 'Транзакции', icon: CreditCard },
  { path: '/dashboard/bonuses', name: 'Бонусы и Вывод', icon: Gift },
  { path: '/dashboard/package-status', name: 'Пакет и Статус', icon: Star },
  { path: '/dashboard/profile', name: 'Профиль', icon: UserCircle },
  { path: '/dashboard/support', name: 'Поддержка', icon: HelpCircle },
];

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-safi-green/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-[280px] bg-white border-r border-safi-green/10 z-50 transition-transform duration-300 flex flex-col hide-scrollbar overflow-y-auto",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 h-20 flex items-center border-b border-safi-green/5 shrink-0">
          <Link to="/" className="flex items-center" onClick={onClose}>
            <div className="w-10 h-10 bg-safi-green rounded-xl flex items-center justify-center text-safi-gold font-bold text-xl shrink-0 mr-3">S</div>
            <span className="text-xl font-serif font-bold tracking-tight text-safi-green">Safi Life</span>
          </Link>
        </div>

        <div className="px-4 py-6 flex-1 flex flex-col gap-2">
          <div className="text-[10px] uppercase font-bold text-safi-text/50 tracking-widest pl-4 mb-2">Навигация</div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-bold uppercase tracking-wider",
                  isActive 
                    ? "bg-safi-green text-safi-gold shadow-md" 
                    : "text-safi-green/70 hover:bg-[#F5F5F0] hover:text-safi-green"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive ? "text-safi-gold" : "opacity-60 group-hover:opacity-100")} />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="p-4 border-t border-safi-green/5 shrink-0">
          <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-bold uppercase tracking-wider text-red-500/70 hover:bg-red-50 hover:text-red-600">
            <LogOut className="w-5 h-5 opacity-60" />
            Выйти
          </button>
        </div>
      </aside>
    </>
  );
}
