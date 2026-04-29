import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { statuses } from '../data/statuses';
import { packages } from '../data/packages';

export default function MarketingPlanPage() {
  const [selectedPackage, setSelectedPackage] = useState(packages[1].id);
  const [personalSales, setPersonalSales] = useState(100000);
  const [leftVol, setLeftVol] = useState(500000);
  const [rightVol, setRightVol] = useState(400000);

  const activePackage = packages.find(p => p.id === selectedPackage) || packages[1];
  
  const estimatedReferral = (personalSales * activePackage.referralBonus) / 100;
  const lesserBranch = Math.min(leftVol, rightVol);
  const estimatedBinary = activePackage.binaryBonus ? (lesserBranch * activePackage.binaryBonus) / 100 : 0;
  const totalEstimated = estimatedReferral + estimatedBinary;

  return (
    <div className="py-20 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Маркетинг-план Safi Life" 
          subtitle="Бинар + Классика"
        />

        <div className="mb-20">
          <h3 className="text-4xl font-serif text-safi-green mb-8 text-center"><span className="italic text-safi-gold">Виды</span> бонусов</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Реферальный бонус (5-10%)', desc: 'Получайте бонус за личные рекомендации при покупке пакета новым партнёром.' },
              { title: 'Бинарный бонус (7-10%)', desc: 'Начисляется с меньшей ветки вашей структуры при образовании бинарной пары.' },
              { title: 'Статусный бонус', desc: 'Единоразовые премии и подарки за достижение определенных объемов PV.' },
              { title: 'Bonus X2', desc: 'Если партнеры первой линии достигают статусов, вы удваиваете свой успех.' },
              { title: 'Депозит 10%', desc: 'Часть бинарного бонуса сохраняется на балансе для будущих покупок.' },
              { title: 'Классика (Кэшбэк 20%)', desc: 'Возврат средств за личные покупки продуктов из каталога.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#F5F5F0] flex items-center justify-center text-safi-gold font-serif text-2xl font-bold mb-4">{i + 1}</div>
                <h4 className="text-xl font-serif font-bold text-safi-green mb-2">{item.title}</h4>
                <p className="text-safi-text text-sm opacity-70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 bg-white rounded-[40px] p-8 md:p-12 border border-safi-green/5 shadow-xl max-w-5xl mx-auto overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-safi-green/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 z-0 pointer-events-none"></div>
          
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-center text-safi-green relative z-10"><span className="italic text-safi-gold">Калькулятор дохода</span> (Пример)</h3>
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div>
                <label className="block text-[10px] tracking-widest font-bold text-safi-green uppercase opacity-80 mb-3">Ваш пакет</label>
                <div className="grid grid-cols-2 gap-3">
                  {packages.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPackage(p.id)}
                      className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${selectedPackage === p.id ? 'bg-safi-green text-white shadow-md' : 'bg-[#F5F5F0] text-safi-green hover:bg-safi-green/10 border border-safi-green/5'}`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-widest font-bold text-safi-green uppercase opacity-80 mb-3">Личные продажи (Рефералы), ₸</label>
                <input 
                  type="range" min="0" max="1000000" step="10000" 
                  value={personalSales} onChange={e => setPersonalSales(Number(e.target.value))}
                  className="w-full accent-safi-gold cursor-pointer"
                />
                <div className="text-right text-sm font-bold text-safi-green mt-2">{personalSales.toLocaleString('ru-RU')} ₸</div>
              </div>
              <div>
                <label className="block text-[10px] tracking-widest font-bold text-safi-green uppercase opacity-80 mb-3">Объем Левой ветки, ₸</label>
                <input 
                  type="range" min="0" max="5000000" step="50000" 
                  value={leftVol} onChange={e => setLeftVol(Number(e.target.value))}
                  className="w-full accent-safi-gold cursor-pointer"
                />
                <div className="text-right text-sm font-bold text-safi-green mt-2">{leftVol.toLocaleString('ru-RU')} ₸</div>
              </div>
              <div>
                <label className="block text-[10px] tracking-widest font-bold text-safi-green uppercase opacity-80 mb-3">Объем Правой ветки, ₸</label>
                <input 
                  type="range" min="0" max="5000000" step="50000" 
                  value={rightVol} onChange={e => setRightVol(Number(e.target.value))}
                  className="w-full accent-safi-gold cursor-pointer"
                />
                <div className="text-right text-sm font-bold text-safi-green mt-2">{rightVol.toLocaleString('ru-RU')} ₸</div>
              </div>
            </div>
            
            <div className="bg-safi-green rounded-[32px] p-8 flex flex-col justify-center border border-safi-green/10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl z-0"></div>
              <div className="space-y-6 mb-8 relative z-10">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/80 text-sm">Ориентировочный реферальный бонус</span>
                  <span className="font-bold text-safi-gold">{estimatedReferral.toLocaleString('ru-RU')} ₸</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/80 text-sm">Ориентировочный бинарный бонус</span>
                  <span className="font-bold text-safi-gold">{estimatedBinary.toLocaleString('ru-RU')} ₸</span>
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-[10px] text-safi-gold uppercase tracking-widest font-bold mb-2">Примерный общий доход</div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-white">{totalEstimated.toLocaleString('ru-RU')} ₸</div>
              </div>
              <p className="text-[10px] opacity-50 mt-8 text-center relative z-10">
                Расчёт является предварительным примером и не является гарантией начислений.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-4xl font-serif text-safi-green mb-8 text-center"><span className="italic text-safi-gold">Статусы</span> и вознаграждения</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left bg-white rounded-[32px] shadow-sm overflow-hidden border border-safi-green/5">
              <thead className="bg-[#F5F5F0] text-[10px] text-safi-green uppercase tracking-widest font-bold">
                <tr>
                  <th className="p-6 border-b border-safi-green/5">Статус</th>
                  <th className="p-6 border-b border-safi-green/5">Накоплено PV</th>
                  <th className="p-6 border-b border-safi-green/5">Потенциальный доход</th>
                  <th className="p-6 border-b border-safi-green/5">Вознаграждение</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-safi-green/5">
                {statuses.map((s) => (
                  <tr key={s.id} className="hover:bg-[#F5F5F0] transition-colors">
                    <td className="p-6 font-bold text-safi-green">{s.name}</td>
                    <td className="p-6 text-safi-text opacity-70 font-medium">{s.pv.toLocaleString()} PV</td>
                    <td className="p-6 text-safi-text opacity-70 font-medium">{s.incomePotential.toLocaleString('ru-RU')} ₸</td>
                    <td className="p-6 text-safi-gold font-bold">{s.reward}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto text-[10px] text-safi-text opacity-50 uppercase tracking-wider">
          Все бонусы начисляются согласно действующему маркетинг-плану компании. Доход не гарантирован и зависит от активности партнёра, продаж, структуры и выполнения условий.
        </div>
      </Container>
    </div>
  );
}
