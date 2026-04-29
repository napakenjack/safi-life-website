import React from 'react';
import { Container } from '../components/ui/Container';

export default function LegalPage() {
  return (
    <div className="py-20 bg-safi-bg min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safi-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-safi-green/5 text-safi-text">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-safi-green mb-10 text-center">Правовая <span className="italic text-safi-gold">информация</span></h1>
          
          <div className="prose prose-safi max-w-none prose-headings:font-serif prose-headings:text-safi-green prose-p:opacity-80 prose-li:opacity-80">
            <p className="text-lg leading-relaxed text-center mb-10">
              Настоящий документ является правовой информацией, касающейся использования сайта Safi Life, продуктов компании и участия в партнерской программе.
            </p>

            <h3 className="text-2xl font-serif font-bold text-safi-green mt-12 mb-6 border-b border-safi-green/10 pb-4">Отказ от ответственности по доходам</h3>
            <p>
              Любые заявления о доходах или заработках на данном сайте являются оценкой того, что вы могли бы заработать. Информация, представленная на сайте, носит исключительно ознакомительный характер. Мы не даем никаких гарантий относительно того, что вы достигнете заявленных уровней дохода. 
            </p>
            <p className="font-bold text-safi-green mt-6 mb-4">
              Результаты партнеров могут отличаться и зависят от:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 mt-4 mb-8">
              <li className="flex items-start gap-4 bg-[#F5F5F0] p-4 rounded-xl"><div className="w-2 h-2 mt-2 bg-safi-gold rounded-full shrink-0" />Личной активности и усердия</li>
              <li className="flex items-start gap-4 bg-[#F5F5F0] p-4 rounded-xl"><div className="w-2 h-2 mt-2 bg-safi-gold rounded-full shrink-0" />Объема продаж продукции</li>
              <li className="flex items-start gap-4 bg-[#F5F5F0] p-4 rounded-xl"><div className="w-2 h-2 mt-2 bg-safi-gold rounded-full shrink-0" />Структуры команды и её эффективности</li>
              <li className="flex items-start gap-4 bg-[#F5F5F0] p-4 rounded-xl"><div className="w-2 h-2 mt-2 bg-safi-gold rounded-full shrink-0" />Соблюдения условий маркетинг-плана компании</li>
              <li className="flex items-start gap-4 bg-[#F5F5F0] p-4 rounded-xl"><div className="w-2 h-2 mt-2 bg-safi-gold rounded-full shrink-0" />Общего состояния рынка</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-safi-green mt-12 mb-6 border-b border-safi-green/10 pb-4">О продуктах</h3>
            <p>
              Продукция категории "Здоровье" не является лекарственным средством. Перед применением рекомендуется проконсультироваться со специалистом. Информация о продуктах не предназначена для диагностики, лечения или предотвращения каких-либо заболеваний.
            </p>

            <h3 className="text-2xl font-serif font-bold text-safi-green mt-12 mb-6 border-b border-safi-green/10 pb-4">Пользовательское соглашение и политика конфиденциальности</h3>
            <p>
              Используя данный сайт и оставляя свои данные, вы соглашаетесь с условиями обработки персональных данных. Данный раздел находится в стадии наполнения и будет содержать полные юридические реквизиты компании.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
