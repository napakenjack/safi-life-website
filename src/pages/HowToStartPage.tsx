import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';

export default function HowToStartPage() {
  const steps = [
    { title: 'Оставьте заявку или зарегистрируйтесь', desc: 'Воспользуйтесь реферальной ссылкой или заполните форму.' },
    { title: 'Выберите стартовый пакет', desc: 'Определитесь между START, BUSINESS, VIP или ELITE.' },
    { title: 'Доступ к кабинету', desc: 'Получите доступ к панели управления и обучению.' },
    { title: 'Пройдите обучение', desc: 'Изучите продукты компании и материалы для партнёров.' },
    { title: 'Начните продажи и приглашения', desc: 'Зарабатывайте реферальные и классические бонусы.' },
    { title: 'Развивайте бинар', desc: 'Стройте левую и правую ветки для получения 7-10% с меньшей ветки.' },
    { title: 'Достигайте статусов', desc: 'Получайте премии и отслеживайте рост команды.' },
  ];

  return (
    <div className="py-20 bg-safi-bg min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safi-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-safi-green mb-4">С чего <span className="italic text-safi-gold">начать</span></h2>
          <p className="text-safi-text opacity-70 max-w-2xl mx-auto uppercase tracking-wider text-xs font-bold">7 простых шагов к созданию бизнеса вместе с Safi Life</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-safi-green/5 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#F5F5F0] text-safi-gold font-serif font-bold text-2xl rounded-[16px] flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div className="pt-2">
                <h4 className="text-xl font-serif font-bold text-safi-green mb-2">{step.title}</h4>
                <p className="text-safi-text opacity-70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" to="/register">Начать с Safi Life</Button>
        </div>
      </Container>
    </div>
  );
}
