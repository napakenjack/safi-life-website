import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Leaf, Instagram, MessageCircle, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-safi-green text-safi-bg py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-safi-gold font-bold text-xl backdrop-blur-sm border border-white/10">S</div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">Safi Life</span>
            </Link>
            <p className="text-sm text-safi-bg/70 mb-6 max-w-xs leading-relaxed">
              Натуральная продукция из Казахстана для здоровья и красоты. Ваш надежный партнер в развитии бизнеса.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-safi-bg/70 hover:text-safi-gold hover:bg-white/10 transition-all border border-white/5"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-safi-bg/70 hover:text-safi-gold hover:bg-white/10 transition-all border border-white/5"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-safi-bg/70 hover:text-safi-gold hover:bg-white/10 transition-all border border-white/5"><Send className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-safi-gold font-bold uppercase tracking-widest text-xs mb-6">Компания</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-safi-bg/70 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/products" className="text-safi-bg/70 hover:text-white transition-colors">Продукты</Link></li>
              <li><Link to="/contacts" className="text-safi-bg/70 hover:text-white transition-colors">Контакты</Link></li>
              <li><Link to="/legal" className="text-safi-bg/70 hover:text-white transition-colors">Правовая информация</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-safi-gold font-bold uppercase tracking-widest text-xs mb-6">Партнёрам</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/business" className="text-safi-bg/70 hover:text-white transition-colors">Бизнес-возможность</Link></li>
              <li><Link to="/marketing" className="text-safi-bg/70 hover:text-white transition-colors">Маркетинг-план</Link></li>
              <li><Link to="/how-to-start" className="text-safi-bg/70 hover:text-white transition-colors">Как начать</Link></li>
              <li><Link to="/login" className="text-safi-bg/70 hover:text-white transition-colors">Вход в кабинет</Link></li>
              <li><Link to="/dashboard" className="text-safi-gold hover:text-white transition-colors font-bold uppercase text-[10px] tracking-wider relative group">
                <span className="bg-white/10 px-2 py-1 rounded inline-block">Демо кабинета</span>
              </Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-safi-gold font-bold uppercase tracking-widest text-xs mb-6">Контакты</h3>
            <ul className="space-y-3 text-sm text-safi-bg/70">
              <li className="flex flex-col">
                <span className="text-[10px] text-safi-gold uppercase tracking-wider mb-1">Офис</span>
                <span>Республика Казахстан, г. Алматы</span>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-[10px] text-safi-gold uppercase tracking-wider mb-1">Связь</span>
                <a href="mailto:info@safilife.kz" className="hover:text-white transition-colors">info@safilife.kz</a>
                <a href="tel:+77000000000" className="hover:text-white transition-colors">+7 (700) 000-00-00</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-safi-bg/50">
          <p>© {new Date().getFullYear()} Safi Life. Все права защищены.</p>
          <div className="mt-4 md:mt-0 max-w-xl text-center md:text-right">
            <p>Информация на сайте носит ознакомительный характер. Потенциальный доход не гарантируется.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
