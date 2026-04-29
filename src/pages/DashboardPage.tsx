import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, LogOut, Copy, User, CreditCard, Network, FileText, Settings, Users, ArrowRightLeft, Target } from 'lucide-react';
import { dashboardMock } from '../data/dashboardMock';

export default function DashboardPage() {
  const { user, transactions, team } = dashboardMock;

  return (
    <div className="min-h-screen bg-safi-bg flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-safi-green/5 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-safi-green/5">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-safi-green rounded-lg flex items-center justify-center text-safi-gold font-bold text-lg">S</div>
            <span className="text-xl font-serif font-bold text-safi-green">Safi Life</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto w-full">
          {[
            { icon: <Target className="h-5 w-5" />, label: 'Обзор', active: true },
            { icon: <Network className="h-5 w-5" />, label: 'Моя структура' },
            { icon: <ArrowRightLeft className="h-5 w-5" />, label: 'Транзакции' },
            { icon: <CreditCard className="h-5 w-5" />, label: 'Бонусы и Вывод' },
            { icon: <Users className="h-5 w-5" />, label: 'Пакет и Статус' },
            { icon: <User className="h-5 w-5" />, label: 'Профиль' },
          ].map((item, i) => (
            <button key={i} className={`flex w-full items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${item.active ? 'bg-safi-green/5 text-safi-green font-bold' : 'text-safi-text opacity-70 hover:bg-safi-bg hover:opacity-100 hover:text-safi-green'}`}>
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-safi-green/5">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-safi-text opacity-70 hover:bg-safi-bg hover:opacity-100 transition-colors">
            <LogOut className="h-5 w-5" />
            Выйти на главную
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white/80 backdrop-blur-md border-b border-safi-green/5 p-4 md:p-6 flex justify-between items-center sticky top-0 z-10">
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold text-safi-green">Личный кабинет (Мокап)</h1>
            <p className="text-sm text-safi-text opacity-60">Добро пожаловать, {user.name}</p>
          </div>
          <div className="md:hidden">
            <Link to="/" className="text-safi-gold hover:underline text-sm font-bold uppercase tracking-wider">Главная</Link>
          </div>
        </header>

        <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-[24px] shadow-sm border border-safi-green/5">
              <div className="text-xs uppercase tracking-widest text-safi-gold font-bold mb-1">Баланс</div>
              <div className="text-3xl font-serif font-bold text-safi-green">{user.balance.toLocaleString('ru-RU')} ₸</div>
              <div className="text-xs text-safi-text opacity-60 mt-2 font-medium">Доступно: {user.availableForWithdrawal.toLocaleString('ru-RU')} ₸</div>

            </div>
            <div className="bg-white p-5 rounded-[24px] shadow-sm border border-safi-green/5">
              <div className="text-xs uppercase tracking-widest text-safi-gold font-bold mb-1">Пакет / Статус</div>
              <div className="text-xl font-serif text-safi-green font-bold">{user.currentPackage}</div>
              <div className="text-[10px] font-bold tracking-widest text-safi-green mt-2 bg-safi-green/10 inline-block px-2 py-1 rounded-sm uppercase">{user.currentStatus}</div>
            </div>
            <div className="bg-white p-5 rounded-[24px] shadow-sm border border-safi-green/5">
              <div className="text-xs uppercase tracking-widest text-safi-gold font-bold mb-1">Накоплено PV</div>
              <div className="text-3xl font-serif font-bold text-safi-green">{user.pvPoints.toLocaleString()} <span className="text-sm font-sans font-normal text-safi-text opacity-60">PV</span></div>
              <div className="w-full bg-safi-bg rounded-full h-1 mt-4">
                <div className="bg-safi-gold h-1 rounded-full" style={{ width: `${user.nextStatusProgress}%` }}></div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-[24px] shadow-sm border border-safi-green/5">
              <div className="text-xs uppercase tracking-widest text-safi-gold font-bold mb-1">Депозит (10%)</div>
              <div className="text-2xl font-serif font-bold text-safi-green">{user.depositAmount.toLocaleString('ru-RU')} ₸</div>
              <button className="text-[10px] uppercase tracking-widest text-safi-gold mt-2 font-bold hover:underline text-left transition-colors">Перейти в магазин →</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Binary structure preview */}
            <div className="lg:col-span-2 bg-white rounded-[32px] shadow-sm border border-safi-green/5 p-8">
              <h3 className="text-xl font-serif font-bold text-safi-green mb-6">Бинарная структура</h3>
              <div className="flex gap-4 mb-8">
                <div className="flex-1 bg-safi-bg p-5 rounded-[20px] border border-safi-green/5">
                  <div className="text-[10px] text-safi-green font-bold uppercase tracking-widest mb-1">Левая ветка</div>
                  <div className="text-2xl font-serif font-bold text-safi-green">{user.leftBranchVolume.toLocaleString()} <span className="text-sm font-sans font-normal opacity-60">PV</span></div>
                  <div className="text-[10px] text-safi-text opacity-60 mt-1 uppercase tracking-wider">{team.leftActive} активных партнёров</div>
                </div>
                <div className="flex-1 bg-safi-gold/5 p-5 rounded-[20px] border border-safi-gold/10">
                  <div className="text-[10px] text-safi-gold font-bold uppercase tracking-widest mb-1">Правая ветка</div>
                  <div className="text-2xl font-serif font-bold text-safi-green">{user.rightBranchVolume.toLocaleString()} <span className="text-sm font-sans font-normal opacity-60">PV</span></div>
                  <div className="text-[10px] text-safi-text opacity-60 mt-1 uppercase tracking-wider">{team.rightActive} активных партнёров</div>
                </div>
              </div>

              {/* Simple tree visualizer mockup */}
              <div className="flex justify-center py-8 bg-[#F5F5F0] rounded-[24px] border border-safi-green/5">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-safi-green text-safi-gold rounded-full flex items-center justify-center font-bold shadow-lg shadow-safi-green/20 z-10 text-sm tracking-wider">ВЫ</div>
                  <div className="h-8 w-px bg-safi-green/20"></div>
                  <div className="w-56 border-t border-safi-green/20 h-px"></div>
                  <div className="flex justify-between w-56">
                    <div className="h-8 w-px bg-safi-green/20"></div>
                    <div className="h-8 w-px bg-safi-green/20"></div>
                  </div>
                  <div className="flex justify-between w-64 -mt-1">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white text-safi-green border border-safi-green/10 rounded-full flex items-center justify-center text-xs font-bold shadow-sm">Л</div>
                      <div className="text-[10px] text-safi-text opacity-60 mt-2 tracking-widest uppercase">12K PV</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-safi-gold/10 text-safi-gold border border-safi-gold/20 rounded-full flex items-center justify-center text-xs font-bold shadow-sm">П</div>
                      <div className="text-[10px] text-safi-text opacity-60 mt-2 tracking-widest uppercase">8.5K PV</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                 <button className="text-[10px] uppercase tracking-widest text-safi-green font-bold hover:text-safi-gold transition-colors">Открыть полную структуру</button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Referral Link */}
              <div className="bg-white rounded-[24px] shadow-sm border border-safi-green/5 p-6">
                 <h3 className="text-xs uppercase tracking-widest font-bold text-safi-green mb-4">Ваша ссылка</h3>
                 <div className="flex">
                   <input type="text" readOnly value={user.referralLink} className="flex-1 bg-[#F5F5F0] border-y border-l border-safi-green/5 rounded-l-xl px-4 py-3 text-xs text-safi-text opacity-70 outline-none" />
                   <button className="bg-safi-green hover:bg-safi-green-hover text-white px-4 py-3 rounded-r-xl transition-colors shrink-0" title="Копировать">
                     <Copy className="h-4 w-4" />
                   </button>
                 </div>
              </div>

              {/* Earnings breakdown */}
              <div className="bg-white rounded-[24px] shadow-sm border border-safi-green/5 p-6">
                <h3 className="text-xs uppercase tracking-widest font-bold text-safi-green mb-6">Доходы</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-safi-green/5 pb-3">
                    <span className="text-safi-text opacity-70 text-xs">Реферальный</span>
                    <span className="font-bold text-safi-green">{user.referralBonusEarned.toLocaleString('ru-RU')} ₸</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-safi-green/5 pb-3">
                    <span className="text-safi-text opacity-70 text-xs">Бинарный</span>
                    <span className="font-bold text-safi-green">{user.binaryBonusEarned.toLocaleString('ru-RU')} ₸</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-safi-green/5 pb-3">
                    <span className="text-safi-text opacity-70 text-xs">Кэшбэк (20%)</span>
                    <span className="font-bold text-safi-green">{user.cashbackAmount.toLocaleString('ru-RU')} ₸</span>
                  </div>
                  <div className="pt-2 flex justify-between items-center font-bold">
                    <span className="text-xs uppercase tracking-widest text-safi-gold">Итог</span>
                    <span className="text-xl font-serif text-safi-green">{(user.referralBonusEarned + user.binaryBonusEarned + user.cashbackAmount).toLocaleString('ru-RU')} ₸</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-white rounded-[32px] shadow-sm border border-safi-green/5 overflow-hidden">
            <div className="p-8 border-b border-safi-green/5 flex justify-between items-center">
              <h3 className="text-xl font-serif font-bold text-safi-green">Последние транзакции</h3>
              <button className="text-[10px] uppercase tracking-widest text-safi-gold font-bold hover:underline transition-all">Все транзакции</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#F5F5F0] text-[10px] text-safi-green uppercase tracking-widest">
                  <tr>
                    <th className="px-8 py-4 font-bold border-b border-safi-green/5">Дата</th>
                    <th className="px-8 py-4 font-bold border-b border-safi-green/5">Тип</th>
                    <th className="px-8 py-4 font-bold border-b border-safi-green/5">Сумма</th>
                    <th className="px-8 py-4 font-bold border-b border-safi-green/5">Статус</th>
                    <th className="px-8 py-4 font-bold border-b border-safi-green/5">Комментарий</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-safi-green/5 text-sm">
                  {transactions.map((t) => (
                    <tr key={t.id} className="hover:bg-safi-green/5 transition-colors">
                      <td className="px-8 py-5 whitespace-nowrap text-safi-text opacity-70">{t.date}</td>
                      <td className="px-8 py-5 font-bold text-safi-green">{t.type}</td>
                      <td className={`px-8 py-5 font-bold whitespace-nowrap ${t.amount > 0 ? 'text-safi-green' : 'text-safi-text opacity-80'}`}>
                        {t.amount > 0 ? '+' : ''}{t.amount.toLocaleString('ru-RU')} ₸
                      </td>
                      <td className="px-8 py-5 whitespace-nowrap">
                        <span className="px-3 py-1.5 bg-safi-green/10 text-safi-green rounded-md text-[10px] uppercase tracking-widest font-bold">{t.status}</span>
                      </td>
                      <td className="px-8 py-5 text-safi-text opacity-70">{t.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
