import { useState } from 'react';
import { structure, partners, user } from '../../data/dashboardMock';
import { StatCard, Badge } from '../../components/dashboard/ui';
import { Users, Filter, Search, ChevronDown, Copy } from 'lucide-react';

export default function Structure() {
  const [filter, setFilter] = useState('Все партнёры');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Info */}
      <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-safi-green/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-safi-green mb-2">Моя структура</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-safi-text/70">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-safi-gold">Спонсор:</span>
              <span className="font-bold text-safi-green">{user.sponsor}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-safi-gold">Мой ID:</span>
              <span className="font-mono text-safi-green font-bold">{user.partnerId}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="gold">Пакет: {user.package}</Badge>
          <Badge variant="default">Статус: {user.status}</Badge>
        </div>
      </div>

      {/* Structure Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Всего партнёров" 
          value={structure.totalPartners} 
          icon={<Users className="w-5 h-5" />}
        />
        
        {/* Left Branch Card */}
        <div className="bg-white p-6 rounded-[24px] shadow-sm border border-safi-green/5 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-safi-gold/5 rounded-bl-full -z-0"></div>
           <div className="text-[10px] uppercase font-bold tracking-widest text-safi-text/50 mb-4 relative z-10">Левая ветка</div>
           <div className="grid grid-cols-2 gap-4 relative z-10">
             <div>
               <div className="text-safi-green font-serif text-2xl font-bold">{structure.leftPartners}</div>
               <div className="text-[10px] uppercase text-safi-text/50 font-bold mt-1">Партнёров</div>
             </div>
             <div>
               <div className="text-safi-gold font-serif text-2xl font-bold">{structure.leftPV.toLocaleString('ru-RU')}</div>
               <div className="text-[10px] uppercase text-safi-text/50 font-bold mt-1">Общий PV</div>
             </div>
           </div>
           <div className="mt-4 pt-4 border-t border-safi-green/5 text-xs text-safi-text/60 relative z-10">
             Новых за 14 дней: <strong className="text-safi-green">8</strong>
           </div>
        </div>

        {/* Right Branch Card */}
        <div className="bg-white p-6 rounded-[24px] shadow-sm border border-safi-green/5 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-safi-green/5 rounded-bl-full -z-0"></div>
           <div className="text-[10px] uppercase font-bold tracking-widest text-safi-text/50 mb-4 relative z-10 flex justify-between">
             Правая ветка
             {structure.weakLeg === 'Правая' && <Badge variant="warning" className="text-[8px]">Слабая ветка</Badge>}
           </div>
           <div className="grid grid-cols-2 gap-4 relative z-10">
             <div>
               <div className="text-safi-green font-serif text-2xl font-bold">{structure.rightPartners}</div>
               <div className="text-[10px] uppercase text-safi-text/50 font-bold mt-1">Партнёров</div>
             </div>
             <div>
               <div className="text-safi-gold font-serif text-2xl font-bold">{structure.rightPV.toLocaleString('ru-RU')}</div>
               <div className="text-[10px] uppercase text-safi-text/50 font-bold mt-1">Общий PV</div>
             </div>
           </div>
           <div className="mt-4 pt-4 border-t border-safi-green/5 text-xs text-safi-text/60 relative z-10">
             Новых за 14 дней: <strong className="text-safi-green">6</strong>
           </div>
        </div>
      </div>

      {/* Visual Tree Placeholder */}
      <div className="bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5">
        <h3 className="text-xl font-serif font-bold text-safi-green mb-6 text-left">Бинарное дерево</h3>
        <div className="flex items-center justify-center py-12 bg-[#F5F5F0] rounded-2xl border border-dashed border-safi-green/20">
           <div className="text-center opacity-50">
             <Users className="w-10 h-10 mx-auto mb-2 text-safi-green" />
             <p className="text-sm font-bold uppercase tracking-widest text-safi-green">Визуализация структуры</p>
             <p className="text-xs mt-2">Будет доступна после интеграции с backend-системой</p>
           </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[32px] shadow-sm border border-safi-green/5 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-safi-green/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white">
          <h3 className="text-xl font-serif font-bold text-safi-green text-left">Список партнёров</h3>
          
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-safi-text/40" />
              <input type="text" placeholder="Поиск по ID или имени" className="w-full pl-9 pr-4 py-2 bg-[#F5F5F0] rounded-xl text-sm border-none focus:ring-2 focus:ring-safi-green/20 outline-none" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F0] rounded-xl text-sm font-bold text-safi-green hover:bg-safi-green/10 transition-colors">
              <Filter className="w-4 h-4" /> Фильтры
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#F5F5F0]">
              <tr>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Партнёр</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Ветка / Линия</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Пакет / Статус</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50 text-right">PV</th>
                <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50 text-center">Активность</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-safi-green/5 text-sm">
              {partners.map((p, i) => (
                <tr key={i} className="hover:bg-safi-green/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-safi-green">{p.name}</div>
                    <div className="text-[10px] font-mono text-safi-text/50 mt-1">{p.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold">{p.branch}</div>
                    <div className="text-xs opacity-70 mt-1">{p.line} линия</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold">{p.package}</div>
                    <div className="text-xs opacity-70 mt-1">{p.status !== '-' ? p.status : 'Участник'}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="font-bold text-safi-gold">{p.personalPV} л.PV</div>
                    <div className="text-xs opacity-70 mt-1">{p.teamPV} к.PV</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant={p.activity === 'Активен' ? 'success' : 'default'} className="text-[8px]">
                      {p.activity}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
