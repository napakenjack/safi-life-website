import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { 
  BarChart, Users, Network, CreditCard, ArrowUpCircle, Gift, 
  Package, Trophy, ShoppingBag, MessageSquare, PieChart, Settings, LogOut, Newspaper 
} from 'lucide-react';

const menuItems = [
  { path: '/admin', name: 'Обзор', icon: BarChart },
  { path: '/admin/partners', name: 'Партнёры', icon: Users },
  { path: '/admin/structure', name: 'Структура', icon: Network },
  { path: '/admin/transactions', name: 'Транзакции', icon: CreditCard },
  { path: '/admin/withdrawals', name: 'Заявки на вывод', icon: ArrowUpCircle },
  { path: '/admin/bonuses', name: 'Бонусы', icon: Gift },
  { path: '/admin/packages', name: 'Пакеты', icon: Package },
  { path: '/admin/statuses', name: 'Статусы', icon: Trophy },
  { path: '/admin/products', name: 'Продукты', icon: ShoppingBag },
  { path: '/admin/news', name: 'Новости', icon: Newspaper },
  { path: '/admin/support', name: 'Поддержка', icon: MessageSquare },
  { path: '/admin/reports', name: 'Отчёты', icon: PieChart },
  { path: '/admin/settings', name: 'Настройки', icon: Settings },
];

export function AdminSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-safi-green/80 backdrop-blur-sm z-40 xl:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-[280px] bg-safi-green text-white z-50 transition-transform duration-300 flex flex-col hide-scrollbar overflow-y-auto",
        isOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
      )}>
        <div className="p-6 h-20 flex items-center border-b border-white/10 shrink-0">
          <Link to="/admin" className="flex items-center" onClick={onClose}>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-safi-green font-bold text-xl shrink-0 mr-3">S</div>
            <div>
              <span className="block text-xl font-serif font-bold tracking-tight text-white leading-tight">Safi Life</span>
              <span className="block text-[8px] uppercase tracking-widest text-[#D4AF37] font-bold">Admin Panel</span>
            </div>
          </Link>
        </div>

        <div className="px-4 py-6 flex-1 flex flex-col gap-1">
          <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest pl-4 mb-2">Управление</div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-xs font-bold uppercase tracking-wider",
                  isActive 
                    ? "bg-[#D4AF37] text-safi-green shadow-md" 
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive ? "text-safi-green" : "opacity-60 group-hover:opacity-100")} />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="p-4 border-t border-white/10 shrink-0">
          <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-xs font-bold uppercase tracking-wider text-red-400 hover:bg-red-500/10 hover:text-red-300">
            <LogOut className="w-5 h-5 opacity-60" />
            Выйти
          </button>
        </div>
      </aside>
    </>
  );
}
