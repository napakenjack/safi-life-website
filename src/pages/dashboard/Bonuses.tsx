import { useState } from 'react';
import { bonuses, balance, withdrawals, user } from '../../data/dashboardMock';
import { Badge, ProgressBar } from '../../components/dashboard/ui';
import { Wallet, ArrowUpCircle, Info, CheckCircle2, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Bonuses() {
  const [activeTab, setActiveTab] = useState<'bonuses' | 'withdrawal'>('bonuses');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Page Header & Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-safi-green/10 pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-safi-green mb-2">Финансы</h1>
          <p className="text-sm text-safi-text/70 text-left">Управление вашими доходами и выплатами.</p>
        </div>
        
        <div className="flex bg-[#F5F5F0] p-1 rounded-xl w-full md:w-auto overflow-x-auto hide-scrollbar">
          <button 
            onClick={() => setActiveTab('bonuses')}
            className={cn(
              "px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all flex-1 md:flex-none",
              activeTab === 'bonuses' ? "bg-white text-safi-green shadow-sm" : "text-safi-text/50 hover:text-safi-green"
            )}
          >
            Бонусы
          </button>
          <button 
            onClick={() => setActiveTab('withdrawal')}
            className={cn(
              "px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all flex-1 md:flex-none",
              activeTab === 'withdrawal' ? "bg-white text-safi-green shadow-sm" : "text-safi-text/50 hover:text-safi-green"
            )}
          >
            Вывод средств
          </button>
        </div>
      </div>

      {/* --- BONUSES TAB --- */}
      {activeTab === 'bonuses' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <BonusMiniCard title="Реферальные" amount={bonuses.referral} />
            <BonusMiniCard title="Бинарные" amount={bonuses.binary} />
            <BonusMiniCard title="Статусные" amount={bonuses.status} />
            <BonusMiniCard title="Кэшбэк" amount={bonuses.cashback} />
            <BonusMiniCard title="Депозит 10%" amount={bonuses.deposit} />
            <BonusMiniCard title="Bonus X2" amount={bonuses.bonusX2} />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
             {/* Ref Bonus Details */}
             <div className="bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5">
                <h3 className="text-xl font-serif font-bold text-safi-green border-b border-safi-green/10 pb-4 mb-6">Реферальный бонус</h3>
                <div className="space-y-4">
                  <DetailRow label="Ваш текущий процент" value="10%" highlight />
                  <DetailRow label="Пакет" value="VIP" badge />
                  <DetailRow label="Приглашено лично" value="14 партнёров" />
                  <DetailRow label="Активных партнёров" value="11" />
                  <div className="pt-4 border-t border-safi-green/5 flex justify-between items-center mt-4">
                    <span className="text-sm font-bold text-safi-text/70">Заработано:</span>
                    <span className="text-2xl font-serif font-bold text-safi-gold">{bonuses.referral.toLocaleString('ru-RU')} ₸</span>
                  </div>
                </div>
             </div>

             {/* Binary Bonus Details */}
             <div className="bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5">
                <h3 className="text-xl font-serif font-bold text-safi-green border-b border-safi-green/10 pb-4 mb-6">Бинарный бонус</h3>
                <div className="space-y-4">
                  <DetailRow label="Ваш бинарный процент" value="8%" highlight />
                  <DetailRow label="Левая ветка" value="14 500 PV" />
                  <DetailRow label="Правая ветка" value="12 800 PV" />
                  <DetailRow label="Расчётная ветка" value="Правая" badge />
                  <div className="pt-4 border-t border-safi-green/5 flex justify-between items-center mt-4">
                    <span className="text-sm font-bold text-safi-text/70">Начислено:</span>
                    <span className="text-2xl font-serif font-bold text-safi-gold">{bonuses.binary.toLocaleString('ru-RU')} ₸</span>
                  </div>
                </div>
             </div>

             {/* Status Bonus Details */}
             <div className="bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5 lg:col-span-2">
                <h3 className="text-xl font-serif font-bold text-safi-green border-b border-safi-green/10 pb-4 mb-6">Статусный бонус</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <DetailRow label="Текущий статус" value="Лидер" badge />
                    <DetailRow label="Следующий статус" value="Директор" />
                    <DetailRow label="Необходимо PV" value="5 000 PV" />
                    <DetailRow label="Осталось PV" value="2 500 PV" highlight />
                  </div>
                  <div className="bg-[#F5F5F0] p-6 rounded-2xl border border-safi-green/5">
                    <ProgressBar label="Лидер → Директор" current={2500} total={5000} />
                  </div>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* --- WITHDRAWAL TAB --- */}
      {activeTab === 'withdrawal' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Withdrawal Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-safi-gold/5 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-serif font-bold text-safi-green mb-8 relative z-10 flex items-center gap-3">
                <Wallet className="w-6 h-6 text-safi-gold" />
                Оформить заявку на вывод
              </h3>
              
              <form className="space-y-6 relative z-10" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-safi-text/60 tracking-widest mb-2">Сумма вывода (₸)</label>
                  <input 
                    type="number" 
                    className="w-full px-5 py-4 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-safi-green/20 outline-none text-xl font-bold text-safi-green"
                    placeholder="Например: 50000"
                    defaultValue="50000"
                  />
                  <div className="mt-2 text-xs text-safi-text/50 flex justify-between">
                    <span>Минимум: 10 000 ₸</span>
                    <span className="text-safi-green font-bold cursor-pointer hover:underline">Вывести всё: {balance.available.toLocaleString('ru-RU')} ₸</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-safi-text/60 tracking-widest mb-2">Способ вывода</label>
                  <select className="w-full px-5 py-4 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-safi-green/20 outline-none text-sm font-bold text-safi-green">
                    <option>Карта партнёра (добавлена)</option>
                    <option>Счёт ИП</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-safi-green text-safi-gold hover:text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-colors shadow-lg">
                    <ArrowUpCircle className="w-5 h-5" />
                    Отправить заявку
                  </button>
                </div>
              </form>

              <div className="mt-8 p-4 bg-sky-50 rounded-xl border border-sky-100 flex gap-4 text-sky-800 text-sm">
                 <Info className="w-5 h-5 shrink-0 mt-0.5" />
                 <p className="opacity-90">Вывод средств осуществляется каждые 14 дней согласно правилам компании. Заявки проверяются администратором перед выплатой.</p>
              </div>
            </div>

            {/* Withdrawal Info */}
            <div className="space-y-4">
              <div className="bg-safi-green p-6 rounded-[24px] shadow-sm text-white">
                 <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest mb-2">Доступно к выводу</div>
                 <div className="text-3xl font-serif font-bold text-safi-gold mb-6">{balance.available.toLocaleString('ru-RU')} ₸</div>
                 <div className="h-px bg-white/10 mb-4"></div>
                 <div className="flex justify-between items-center text-sm">
                   <span className="opacity-70">След. дата выплаты:</span>
                   <span className="font-bold">10.05.2026</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Withdrawals History */}
          <div className="bg-white rounded-[32px] shadow-sm border border-safi-green/5 overflow-hidden mt-8">
            <div className="p-6 md:p-8 border-b border-safi-green/5 bg-[#F5F5F0]">
              <h3 className="text-xl font-serif font-bold text-safi-green text-left">История выводов</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white">
                  <tr>
                    <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Заявка / Дата</th>
                    <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Сумма</th>
                    <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Способ</th>
                    <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Статус</th>
                    <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Дата выплаты</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-safi-green/5 text-sm">
                  {withdrawals.map((w, i) => (
                    <tr key={i} className="hover:bg-safi-green/5 transition-colors">
                      <td className="px-8 py-5">
                        <div className="font-bold text-safi-green">#{w.id}</div>
                        <div className="text-[10px] text-safi-text/50 mt-1">{w.date}</div>
                      </td>
                      <td className="px-8 py-5 font-bold text-safi-text">{w.amount}</td>
                      <td className="px-8 py-5 text-safi-text/80">{w.method}</td>
                      <td className="px-8 py-5">
                        <Badge variant={w.status === 'Выплачено' ? 'success' : w.status === 'Отклонено' ? 'danger' : 'warning'}>
                          {w.status}
                        </Badge>
                      </td>
                      <td className="px-8 py-5 text-safi-text/60">{w.paymentDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* Disclaimer */}
      <div className="text-center pt-8 text-[10px] uppercase tracking-widest text-safi-text/40 font-bold max-w-3xl mx-auto leading-relaxed">
        Информация в личном кабинете является демонстрационной. Реальные начисления, выплаты и статусы рассчитываются согласно действующему маркетинг-плану компании.
      </div>
    </div>
  );
}

function BonusMiniCard({ title, amount }: { title: string, amount: number }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-safi-green/5 shadow-sm text-center flex flex-col justify-center gap-2">
      <div className="text-[10px] uppercase font-bold text-safi-text/50 tracking-widest leading-tight">{title}</div>
      <div className="text-sm font-bold text-safi-green">{amount > 0 ? `${amount.toLocaleString('ru-RU')} ₸` : '—'}</div>
    </div>
  );
}

function DetailRow({ label, value, highlight, badge }: { label: string, value: string, highlight?: boolean, badge?: boolean }) {
  return (
    <div className="flex justify-between items-center text-sm py-1">
      <span className="text-safi-text/70">{label}</span>
      {badge ? (
        <Badge variant={highlight ? "gold" : "default"} className="text-[10px] font-bold">{value}</Badge>
      ) : (
        <span className={cn("font-bold", highlight ? "text-safi-gold" : "text-safi-green")}>{value}</span>
      )}
    </div>
  );
}
