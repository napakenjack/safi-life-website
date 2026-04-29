import { partners } from '../../data/adminMock';
import { AdminTable, AdminBadge } from '../../components/admin/ui';
import { Search, Filter, MoreVertical, Eye, Lock, Unlock, MessageSquare, CreditCard, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminPartners() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-safi-green mb-1">Партнёры</h1>
          <p className="text-sm text-safi-text/70">Управление структурой и пользователями</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-[24px] border border-safi-green/5 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-safi-text/40 absolute left-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Поиск по ID, ФИО, телефону или Email..." 
            className="w-full pl-12 pr-4 py-3 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-safi-green/20 outline-none text-sm font-medium text-safi-green"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F5F5F0] hover:bg-safi-green/10 text-safi-green rounded-xl font-bold uppercase tracking-widest text-[10px] transition-colors md:w-auto w-full shrink-0">
          <Filter className="w-4 h-4" /> Фильтры
        </button>
      </div>

      <AdminTable headers={['Партнёр', 'Контакты', 'Спонсор', 'Пакет / Статус', 'PV', 'Финансы', 'Статус', 'Действия']}>
        {partners.map((p, i) => (
          <tr key={i} className="hover:bg-safi-green/5 transition-colors group">
            <td className="px-6 py-4">
              <Link to={`/admin/partners/${p.id}`} className="block hover:opacity-80">
                <div className="font-bold text-safi-green">{p.fullName}</div>
                <div className="text-[10px] text-safi-text/50 font-mono mt-1">{p.id}</div>
                <div className="text-[10px] text-safi-text/40 mt-1">Рег: {p.registrationDate}</div>
              </Link>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm text-safi-text">{p.phone}</div>
              <div className="text-xs text-safi-text/60 mt-1">{p.email}</div>
              <div className="text-[10px] text-safi-text/40 mt-1">{p.city}</div>
            </td>
            <td className="px-6 py-4">
              <div className="text-xs font-mono font-bold text-safi-green/70 bg-[#F5F5F0] px-2 py-1 rounded inline-block">{p.sponsor}</div>
              <div className="text-[10px] text-safi-text/50 mt-1">Пригласил: {p.invitedCount}</div>
            </td>
            <td className="px-6 py-4">
              <div className="mb-2"><AdminBadge variant="gold">{p.package}</AdminBadge></div>
              <div><AdminBadge variant="default">{p.status}</AdminBadge></div>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm">Л: <span className="font-bold text-safi-green">{p.personalPV}</span></div>
              <div className="text-xs text-safi-text/60 mt-1">К: {p.teamPV}</div>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm font-bold text-safi-green">В: {p.availableBalance.toLocaleString('ru-RU')}</div>
              <div className="text-[10px] text-safi-text/50 mt-1">Всего: {p.totalIncome.toLocaleString('ru-RU')}</div>
            </td>
            <td className="px-6 py-4">
              <div className="mb-2">
                 <AdminBadge variant={p.accountStatus === 'Активен' ? 'success' : 'danger'}>{p.accountStatus}</AdminBadge>
              </div>
              <div>
                 <AdminBadge variant={p.activity === 'Активен' ? 'success' : 'warning'}>{p.activity}</AdminBadge>
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <div className="flex items-center justify-end gap-2">
                <Link to={`/admin/partners/${p.id}`} className="p-2 text-safi-text/40 hover:text-safi-green hover:bg-[#F5F5F0] rounded-lg transition-colors" title="Открыть профиль">
                   <Eye className="w-4 h-4" />
                </Link>
                <button className="p-2 text-safi-text/40 hover:text-safi-green hover:bg-[#F5F5F0] rounded-lg transition-colors" title="Структура">
                   <Network className="w-4 h-4" />
                </button>
                <div className="relative group/menu cursor-pointer">
                  <div className="p-2 text-safi-text/40 hover:text-safi-green hover:bg-[#F5F5F0] rounded-lg transition-colors">
                     <MoreVertical className="w-4 h-4" />
                  </div>
                  {/* Dropdown would go here in full implementation */}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </AdminTable>
      
      <div className="flex justify-center mt-6">
         <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-safi-green/5 shadow-sm">
           <button className="px-3 py-1 text-sm text-safi-text/50 hover:text-safi-green transition-colors">Пред</button>
           <button className="w-8 h-8 rounded-lg bg-safi-green text-white text-sm font-bold flex items-center justify-center">1</button>
           <button className="w-8 h-8 rounded-lg text-safi-text hover:bg-[#F5F5F0] text-sm font-bold flex items-center justify-center transition-colors">2</button>
           <button className="w-8 h-8 rounded-lg text-safi-text hover:bg-[#F5F5F0] text-sm font-bold flex items-center justify-center transition-colors">3</button>
           <button className="px-3 py-1 text-sm text-safi-text/50 hover:text-safi-green transition-colors">След</button>
         </div>
      </div>
    </div>
  );
}
