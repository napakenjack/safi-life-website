import { useState } from 'react';
import { balance, transactions } from '../../data/dashboardMock';
import { StatCard, Badge } from '../../components/dashboard/ui';
import { CreditCard, Filter, ArrowDownToLine, ArrowUpFromLine, Calendar, Search, RefreshCcw } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Transactions() {
  const [filter, setFilter] = useState('Все');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Общий заработок" 
          value={`${balance.totalEarned.toLocaleString('ru-RU')} ₸`} 
          className="bg-safi-gold text-white"
        />
        <StatCard 
          title="Доступно к выводу" 
          value={`${balance.available.toLocaleString('ru-RU')} ₸`} 
        />
        <StatCard 
          title="Ожидает начисления" 
          value={`${balance.pending.toLocaleString('ru-RU')} ₸`} 
          icon={<RefreshCcw className="w-5 h-5 opacity-40" />}
        />
        <StatCard 
          title="Выведено всего" 
          value={`${balance.withdrawn.toLocaleString('ru-RU')} ₸`} 
          icon={<ArrowUpFromLine className="w-5 h-5 opacity-40" />}
        />
      </div>

      {/* Transactions List */}
      <div className="bg-white rounded-[32px] shadow-sm border border-safi-green/5 overflow-hidden">
        
        {/* Header & Filters */}
        <div className="p-6 md:p-8 border-b border-safi-green/5 flex flex-col items-start gap-6 bg-white">
          <div className="flex justify-between w-full items-center">
             <h3 className="text-xl font-serif font-bold text-safi-green text-left">История транзакций</h3>
             <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#F5F5F0] rounded-xl text-sm font-bold text-safi-green hover:bg-safi-green hover:text-white transition-colors">
               <ArrowDownToLine className="w-4 h-4" /> Экспорт
             </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
            <div className="flex overflow-x-auto hide-scrollbar gap-2 w-full md:w-auto">
              {['Все', 'Начисления', 'Выводы', 'Кэшбэк'].map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors",
                    filter === f ? "bg-safi-green text-safi-gold" : "bg-[#F5F5F0] text-safi-green/60 hover:text-safi-green"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
               <div className="relative flex-1 md:w-48">
                 <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-safi-text/40" />
                 <input type="text" placeholder="Апрель 2026" className="w-full pl-9 pr-4 py-2 bg-[#F5F5F0] rounded-xl text-sm border-none focus:ring-2 focus:ring-safi-green/20 outline-none text-safi-green font-bold" disabled />
               </div>
               <button className="px-4 py-2 bg-[#F5F5F0] rounded-xl text-safi-green hover:bg-safi-green/10 transition-colors">
                 <Filter className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#F5F5F0]">
              <tr>
                <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Дата / ID</th>
                <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Операция</th>
                <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Детали</th>
                <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Статус</th>
                <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50 text-right">Сумма</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-safi-green/5 text-sm">
              {transactions.map((trx, i) => (
                <tr key={i} className="hover:bg-safi-green/5 transition-colors cursor-pointer group">
                  <td className="px-8 py-5">
                    <div className="font-bold text-safi-green">{trx.date.split(' ')[0]}</div>
                    <div className="text-[10px] text-safi-text/50 mt-1">{trx.date.split(' ')[1]} • {trx.id}</div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="font-bold text-safi-text">{trx.type}</div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="text-safi-green font-medium">{trx.source}</div>
                    <div className="text-xs text-safi-text/50 mt-1">{trx.comment}</div>
                  </td>
                  <td className="px-8 py-5">
                    <Badge variant={trx.status === 'Начислено' || trx.status === 'Выплачено' ? 'success' : 'warning'}>
                      {trx.status}
                    </Badge>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className={cn(
                      "font-bold text-base",
                      trx.amount.startsWith('+') ? "text-green-600" : "text-safi-text"
                    )}>
                      {trx.amount}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile List View */}
        <div className="md:hidden divide-y divide-safi-green/5">
          {transactions.map((trx, i) => (
            <div key={i} className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-safi-green">{trx.type}</div>
                  <div className="text-[10px] text-safi-text/50 mt-1">{trx.date} • {trx.id}</div>
                </div>
                <div className={cn(
                  "font-bold",
                  trx.amount.startsWith('+') ? "text-green-600" : "text-safi-text"
                )}>
                  {trx.amount}
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-xs text-safi-text/70">{trx.source}</div>
                <Badge variant={trx.status === 'Начислено' || trx.status === 'Выплачено' ? 'success' : 'warning'}>
                  {trx.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
