import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { packages } from '../data/packages';

export default function RegisterPage() {
  return (
    <div className="py-20 bg-safi-bg min-h-[calc(100vh-80px)] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safi-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-safi-gold/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <Container className="relative z-10 w-full lg:max-w-4xl">
        <div className="max-w-2xl mx-auto bg-white rounded-[40px] shadow-xl border border-safi-green/5 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-safi-gold/10 rounded-bl-full -z-10"></div>
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif text-safi-green mb-2">Регистрация</h1>
            <p className="text-sm text-safi-text opacity-70">Станьте партнером Safi Life</p>
          </div>
          
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-safi-green mb-2 opacity-80">Имя</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl border border-safi-green/20 bg-[#F5F5F0] focus:ring-2 focus:ring-safi-green focus:border-safi-green focus:bg-white outline-none transition-all placeholder:text-safi-text/40" placeholder="Иван" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-safi-green mb-2 opacity-80">Фамилия</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl border border-safi-green/20 bg-[#F5F5F0] focus:ring-2 focus:ring-safi-green focus:border-safi-green focus:bg-white outline-none transition-all placeholder:text-safi-text/40" placeholder="Иванов" />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-safi-green mb-2 opacity-80">Телефон</label>
                <input type="tel" className="w-full px-5 py-4 rounded-xl border border-safi-green/20 bg-[#F5F5F0] focus:ring-2 focus:ring-safi-green focus:border-safi-green focus:bg-white outline-none transition-all placeholder:text-safi-text/40" placeholder="+7 (___) ___-__-__" />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-safi-green mb-2 opacity-80">Email</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl border border-safi-green/20 bg-[#F5F5F0] focus:ring-2 focus:ring-safi-green focus:border-safi-green focus:bg-white outline-none transition-all placeholder:text-safi-text/40" placeholder="mail@example.com" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-safi-green mb-2 opacity-80">Пароль</label>
                <input type="password" className="w-full px-5 py-4 rounded-xl border border-safi-green/20 bg-[#F5F5F0] focus:ring-2 focus:ring-safi-green focus:border-safi-green focus:bg-white outline-none transition-all placeholder:text-safi-text/40" placeholder="••••••••" />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-safi-green mb-2 opacity-80">Код пригласителя (Реферал)</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl border border-safi-green/20 bg-[#F5F5F0] focus:ring-2 focus:ring-safi-green focus:border-safi-green focus:bg-white outline-none transition-all placeholder:text-safi-text/40" placeholder="Необязательно" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-safi-green mb-2 opacity-80">Стартовый пакет</label>
              <select className="w-full px-5 py-4 rounded-xl border border-safi-green/20 bg-[#F5F5F0] focus:ring-2 focus:ring-safi-green focus:border-safi-green focus:bg-white outline-none transition-all text-sm">
                <option value="">Выберите пакет</option>
                {packages.map(p => (
                  <option key={p.id} value={p.id}>{p.name} — {p.price.toLocaleString('ru-RU')} ₸</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-start gap-3 mt-4">
              <input type="checkbox" id="agree" className="mt-1 rounded text-safi-green focus:ring-safi-green w-4 h-4" />
              <label htmlFor="agree" className="text-xs text-safi-text opacity-70 cursor-pointer">
                Я согласен с <Link to="/legal" className="text-safi-green font-bold hover:underline">условиями и политикой конфиденциальности</Link>.
              </label>
            </div>
            
            <div className="pt-4">
              <Button type="button" to="/dashboard" className="w-full">Зарегистрироваться (Демо)</Button>
            </div>
            
            <p className="text-[10px] text-center text-safi-gold mt-2 uppercase tracking-widest font-bold">
              Примечание: Это демонстрационная версия.
            </p>
            
            <div className="text-center text-[10px] uppercase tracking-widest text-safi-text opacity-70 pt-4">
              Уже есть аккаунт? <Link to="/login" className="text-safi-green font-bold hover:underline">Войти</Link>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
