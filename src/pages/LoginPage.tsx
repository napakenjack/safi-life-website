import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const { t } = useTranslation();
  return (
    <div className="py-20 bg-safi-bg min-h-[calc(100vh-80px)] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safi-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-safi-gold/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <Container className="relative z-10 w-full">
        <div className="max-w-md mx-auto bg-white rounded-[40px] shadow-xl border border-safi-green/5 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-safi-gold/10 rounded-bl-full -z-10"></div>
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif text-safi-green mb-2">{t('auth.loginTitle', 'Вход в')} кабинет</h1>
            <p className="text-sm text-safi-text opacity-70">С возвращением в Safi Life</p>
          </div>
          
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-safi-green mb-2 opacity-80">Email или Телефон</label>
              <input type="text" className="w-full px-5 py-4 rounded-xl border border-safi-green/20 bg-[#F5F5F0] focus:ring-2 focus:ring-safi-green focus:border-safi-green focus:bg-white outline-none transition-all placeholder:text-safi-text/40" placeholder="mail@example.com" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[10px] font-bold tracking-widest uppercase text-safi-green opacity-80">Пароль</label>
                <a href="#" className="text-[10px] uppercase tracking-widest text-safi-gold font-bold hover:underline">Забыли пароль?</a>
              </div>
              <input type="password" className="w-full px-5 py-4 rounded-xl border border-safi-green/20 bg-[#F5F5F0] focus:ring-2 focus:ring-safi-green focus:border-safi-green focus:bg-white outline-none transition-all placeholder:text-safi-text/40" placeholder="••••••••" />
            </div>
            
            <div className="pt-2">
              <Button type="button" to="/dashboard" className="w-full">{t('auth.loginAction', 'Войти')} (Демо)</Button>
            </div>
            
            <div className="text-center text-[10px] uppercase tracking-widest text-safi-text opacity-70 pt-4">
              Нет аккаунта? <Link to="/register" className="text-safi-green font-bold hover:underline">Стать партнёром</Link>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
