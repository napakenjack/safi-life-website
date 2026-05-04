import { user } from '../../data/dashboardMock';
import { Badge, ProgressBar } from '../../components/dashboard/ui';
import { Star, ArrowUpRight, Trophy, CheckCircle2, Lock } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function PackageStatus() {
  const packages = [
    { name: "BUSINESS", price: "60 000 ₸", ref: "10%", bin: "7%", current: user.package === "BUSINESS" },
    { name: "VIP", price: "180 000 ₸", ref: "10%", bin: "8%", current: user.package === "VIP" },
    { name: "ELITE", price: "300 000 ₸", ref: "10%", bin: "10%", current: user.package === "ELITE" }
  ];

  const statuses = [
    { name: "Менеджер", pv: 1000, volume: "500 000 ₸", reward: "-", achieved: true },
    { name: "Лидер", pv: 2500, volume: "1 250 000 ₸", reward: "250 000 ₸", achieved: true },
    { name: "Директор", pv: 5000, volume: "2 500 000 ₸", reward: "250 000 ₸", achieved: false },
    { name: "Бронзовый директор", pv: 10000, volume: "5 000 000 ₸", reward: "Автобонус (1 уровень)", achieved: false },
    { name: "Серебряный директор", pv: 25000, volume: "12 500 000 ₸", reward: "Автобонус (2 уровень)", achieved: false },
    { name: "Золотой директор", pv: 50000, volume: "25 000 000 ₸", reward: "Квартира (1 уровень)", achieved: false },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Packages Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-3xl font-serif font-bold text-safi-green mb-2">Развитие бизнеса</h2>
          <p className="text-sm text-safi-text/70">Управление пакетами и повышение статуса</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={cn(
                "relative rounded-[32px] p-6 border transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-2",
                pkg.current 
                  ? "bg-safi-green border-safi-gold shadow-xl text-white" 
                  : "bg-white border-safi-green/10 hover:border-safi-green/30 hover:shadow-lg"
              )}
            >
              {pkg.current && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>
              )}
              
              <div className="mb-6 relative z-10 flex justify-between items-start">
                 <div>
                   <h3 className={cn("text-xl font-bold uppercase tracking-wider mb-1", pkg.current ? "text-safi-gold" : "text-safi-green")}>{pkg.name}</h3>
                   <div className={cn("text-sm opacity-70", pkg.current && "text-white/70")}>{pkg.price}</div>
                 </div>
                 {pkg.current && <Trophy className="w-6 h-6 text-safi-gold" />}
              </div>

              <div className="space-y-4 flex-1 relative z-10">
                <div className="flex justify-between items-center text-sm border-b border-current pb-2 border-opacity-10">
                  <span className={cn("opacity-70", pkg.current && "text-white/70")}>Реферальный</span>
                  <span className="font-bold">{pkg.ref}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-current pb-2 border-opacity-10">
                  <span className={cn("opacity-70", pkg.current && "text-white/70")}>Бинарный</span>
                  <span className="font-bold">{pkg.bin}</span>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                {pkg.current ? (
                  <div className="w-full text-center py-3 bg-white/10 rounded-xl text-[10px] uppercase font-bold tracking-widest text-white border border-white/20">
                    Текущий пакет
                  </div>
                ) : (
                  <button className="w-full text-center py-3 bg-[#F5F5F0] hover:bg-safi-green hover:text-white rounded-xl text-[10px] uppercase font-bold tracking-widest text-safi-green transition-colors flex items-center justify-center gap-2 group-hover:bg-safi-green group-hover:text-white">
                    <ArrowUpRight className="w-4 h-4" /> Сделать апгрейд
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Status Section */}
      <section>
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-safi-green/10 pb-4">
          <h2 className="text-2xl font-serif font-bold text-safi-green">Лестница статусов</h2>
          <div className="mt-2 md:mt-0 text-[10px] uppercase font-bold text-safi-text/50 tracking-widest bg-[#F5F5F0] px-3 py-1 rounded-full">
            Ваш PV: <span className="text-safi-gold">2 500 PV</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statuses.map((status, i) => (
            <div 
              key={i}
              className={cn(
                "p-6 rounded-[24px] border relative overflow-hidden transition-all",
                status.achieved 
                  ? "bg-white border-safi-gold/30 shadow-sm"
                  : "bg-[#F5F5F0]/50 border-safi-green/5 opacity-80"
              )}
            >
              {status.name === user.status && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-safi-gold text-white text-[8px] uppercase tracking-widest font-bold rounded-bl-xl z-20">
                  Текущий
                </div>
              )}
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm bg-white border border-safi-green/10">
                  {status.achieved ? <CheckCircle2 className="w-5 h-5 text-safi-gold" /> : <Lock className="w-4 h-4 text-safi-text/30" />}
                </div>
                <div className="text-right">
                  <div className={cn("text-lg font-serif font-bold leading-tight", status.achieved ? "text-safi-green" : "text-safi-text/50")}>{status.name}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-safi-gold mt-1">{status.pv.toLocaleString('ru-RU')} PV</div>
                </div>
              </div>

              <div className="space-y-3 mt-auto relative z-10 text-sm">
                <div className="flex justify-between items-center border-b border-safi-green/5 pb-2">
                  <span className="text-safi-text/60">Оборот:</span>
                  <span className={cn("font-bold", status.achieved ? "text-safi-green" : "text-safi-text/50")}>{status.volume}</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-safi-text/60">Премия:</span>
                  <span className="font-bold text-safi-green text-right max-w-[120px] leading-tight">{status.reward}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
