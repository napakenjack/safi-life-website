import { adminStats } from '../../data/adminMock';
import { AdminStatCard } from '../../components/admin/ui';
import { Users, TrendingUp, CreditCard, ArrowUpCircle, Package, Activity, FileText, Settings, Search } from 'lucide-react';

export default function AdminOverview() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-safi-green mb-1">Сводка</h1>
          <p className="text-sm text-safi-text/70">Общая статистика платформы Safi Life</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStatCard title="Всего партнёров" value={adminStats.totalPartners.toLocaleString('ru-RU')} icon={Users} trend={`+${adminStats.newPartners14Days} за 14 дней`} />
        <AdminStatCard title="Общий оборот" value={`${adminStats.totalRevenue.toLocaleString('ru-RU')} ₸`} icon={TrendingUp} />
        <AdminStatCard title="Выплачено бонусов" value={`${adminStats.totalBonusesPaid.toLocaleString('ru-RU')} ₸`} icon={CreditCard} />
        <AdminStatCard title="Ожидает вывода" value={`${adminStats.pendingWithdrawals.toLocaleString('ru-RU')} ₸`} icon={ArrowUpCircle} trend={`${adminStats.withdrawalRequests} заявок`} className="border-safi-gold/30 bg-safi-gold/5" />
        <AdminStatCard title="Активные партнёры" value={adminStats.activePartners.toLocaleString('ru-RU')} icon={Activity} />
        <AdminStatCard title="Неактивные партнёры" value={adminStats.inactivePartners.toLocaleString('ru-RU')} icon={Users} />
        <AdminStatCard title="Продано пакетов" value={adminStats.packagesSold.toLocaleString('ru-RU')} icon={Package} />
        <AdminStatCard title="Общий PV" value={`${adminStats.totalPV.toLocaleString('ru-RU')} PV`} icon={Activity} />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-[24px] border border-safi-green/5 shadow-sm h-80 flex flex-col justify-center items-center text-center">
             <div className="text-safi-text/40 mb-4">
               <TrendingUp className="w-12 h-12 mx-auto opacity-50" />
             </div>
             <div className="text-lg font-serif font-bold text-safi-green">График роста структуры</div>
             <div className="text-sm text-safi-text/50 max-w-sm mt-2">Здесь будет отображаться график роста количества партнеров и оборота по месяцам</div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-safi-green text-white p-8 rounded-[24px] shadow-sm">
            <h3 className="text-xl font-serif font-bold mb-6">Быстрые действия</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors group">
                <span className="text-sm font-bold opacity-90 group-hover:opacity-100 flex items-center gap-3"><Search className="w-4 h-4 text-safi-gold" /> Найти партнёра</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors group">
                <span className="text-sm font-bold opacity-90 group-hover:opacity-100 flex items-center gap-3"><ArrowUpCircle className="w-4 h-4 text-safi-gold" /> Заявки на вывод <span className="px-2 py-0.5 bg-safi-gold text-white text-[10px] rounded-full">{adminStats.withdrawalRequests}</span></span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors group">
                <span className="text-sm font-bold opacity-90 group-hover:opacity-100 flex items-center gap-3"><CreditCard className="w-4 h-4 text-safi-gold" /> Транзакции</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors group">
                <span className="text-sm font-bold opacity-90 group-hover:opacity-100 flex items-center gap-3"><FileText className="w-4 h-4 text-safi-gold" /> Отчёты</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors group">
                <span className="text-sm font-bold opacity-90 group-hover:opacity-100 flex items-center gap-3"><Settings className="w-4 h-4 text-safi-gold" /> Настройки системы</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
