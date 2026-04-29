import { user, balance, structure, transactions } from '../../data/dashboardMock';
import { StatCard, ProgressBar, Badge } from '../../components/dashboard/ui';
import { Copy, Plus, ArrowUpRight, ArrowUpCircle, HelpCircle, Users, Activity, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Overview() {
  const nextStatusPV = 5000;
  const currentPV = 2500;
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-safi-gold/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-safi-green">Добро пожаловать, <span className="italic text-safi-gold">{user.name.split(' ')[0]}!</span></h1>
          <p className="text-sm text-safi-text/70">Мониторинг вашего бизнеса и структуры.</p>
        </div>
        
        <div className="relative z-10 flex flex-wrap gap-2">
          <Badge variant="gold">Пакет: {user.package}</Badge>
          <Badge variant="default">Статус: {user.status}</Badge>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Доступно к выводу" 
          value={`${balance.available.toLocaleString('ru-RU')} ₸`} 
          icon={<ArrowUpRight className="w-5 h-5" />}
          className="bg-safi-green text-white border-none shadow-lg"
        />
        <StatCard 
          title="Общий заработок" 
          value={`${balance.totalEarned.toLocaleString('ru-RU')} ₸`} 
        />
        <StatCard 
          title="Личная команда" 
          value={structure.totalPartners} 
          icon={<Users className="w-5 h-5" />}
        />
        <StatCard 
          title="Слабая ветка PV" 
          value={`${structure.weakLeg === 'Левая' ? structure.leftPV : structure.rightPV} PV`} 
          icon={<Activity className="w-5 h-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Progress & Actions */}
        <div className="lg:col-span-2 space-y-8">
           {/* Next Status Progress */}
           <div className="bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-serif font-bold text-safi-green text-left">Прогресс статуса</h3>
                <Link to="/dashboard/package-status" className="text-[10px] uppercase font-bold text-safi-gold tracking-widest hover:underline flex items-center gap-1">
                  Подробнее <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              
              <div className="flex gap-4 items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-safi-gold/10 flex items-center justify-center text-safi-gold">
                   <StarIcon />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-safi-text/50 tracking-widest mb-1">Следующий статус</div>
                  <div className="text-xl font-serif font-bold text-safi-green">Директор</div>
                </div>
              </div>

              <ProgressBar 
                label={`${user.status} → Директор`} 
                current={currentPV} 
                total={nextStatusPV} 
              />
              <p className="text-xs text-safi-text/60 mt-4 text-center">
                Осталось <strong className="text-safi-green">{nextStatusPV - currentPV} PV</strong> до достижения нового статуса и получения премии!
              </p>
           </div>

           {/* Quick Actions */}
           <div className="bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5">
              <h3 className="text-xl font-serif font-bold text-safi-green mb-6 text-left">Быстрые действия</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ActionBtn icon={<Copy />} label="Копировать ссылку" />
                <ActionBtn icon={<Plus />} label="Пригласить партнёра" />
                <ActionBtn icon={<ArrowUpCircle />} label="Оформить вывод" />
                <ActionBtn icon={<HelpCircle />} label="Поддержка" />
              </div>
              
              {/* Ref Link */}
              <div className="mt-8 p-4 bg-[#F5F5F0] rounded-2xl border border-safi-green/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                 <div>
                   <div className="text-[10px] uppercase font-bold text-safi-text/50 tracking-widest mb-1">Ваша реферальная ссылка</div>
                   <div className="font-mono text-sm text-safi-green">https://safilife.kz/register?ref={user.referralCode}</div>
                 </div>
                 <div className="flex gap-2">
                   <button className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-safi-green border border-safi-green/10 hover:bg-safi-green hover:text-white transition-colors">Копировать</button>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Transactions */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-safi-green/5 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif font-bold text-safi-green text-left">Последние транзакции</h3>
              <Link to="/dashboard/transactions" className="text-[10px] uppercase font-bold text-safi-gold tracking-widest hover:underline">
                Все
              </Link>
            </div>
            
            <div className="space-y-4 flex-1 flex flex-col">
              {transactions.slice(0, 5).map((trx, i) => (
                <div key={i} className="flex justify-between items-center p-3 hover:bg-[#F5F5F0] rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                      trx.amount.startsWith('+') ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                    )}>
                      {trx.amount.startsWith('+') ? <ArrowUpRight className="w-5 h-5" /> : <ArrowUpCircle className="w-5 h-5 rotate-180" />}
                    </div>
                    <div>
                       <div className="text-sm font-bold text-safi-green">{trx.type}</div>
                       <div className="text-[10px] text-safi-text/50">{trx.date}</div>
                    </div>
                  </div>
                  <div className={cn("text-sm font-bold", trx.amount.startsWith('+') ? "text-green-600" : "text-safi-text")}>
                    {trx.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function StarIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}

function ActionBtn({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex flex-col items-center justify-center p-4 bg-[#F5F5F0] rounded-2xl hover:bg-safi-green hover:text-white text-safi-green transition-all duration-300 group border border-transparent hover:border-safi-green">
       <div className="mb-3 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">{icon}</div>
       <span className="text-[10px] uppercase tracking-widest font-bold text-center leading-tight mx-auto max-w-[100px]">{label}</span>
    </button>
  );
}
