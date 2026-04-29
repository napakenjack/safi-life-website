import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'О компании', path: '/about' },
    { name: 'Продукты', path: '/products' },
    { name: 'Возможность', path: '/business' },
    { name: 'Маркетинг-план', path: '/marketing' },
    { name: 'Как начать', path: '/how-to-start' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Контакты', path: '/contacts' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-safi-green/10 bg-white/50 backdrop-blur-md shrink-0">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            {/* Вставьте ваш <img> логотип сюда. Пример: <img src="/logo.png" alt="Safi Life" className="h-10 w-auto object-contain" /> */}
            <div className="w-10 h-10 bg-safi-green rounded-xl flex items-center justify-center text-safi-gold font-bold text-xl shrink-0">S</div>
            <span className="text-2xl font-serif font-bold tracking-tight text-safi-green shrink-0">Safi Life</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 overflow-visible">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-colors hover:text-safi-gold whitespace-nowrap',
                  location.pathname === link.path ? 'text-safi-gold border-b border-safi-gold' : 'text-safi-green opacity-80'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" to="/login" className="px-4">Вход</Button>
            <Button size="sm" to="/register" className="px-4 whitespace-nowrap">Регистрация</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-safi-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-safi-green/5 shadow-xl pb-6 rounded-b-[32px]">
          <nav className="flex flex-col px-6 pt-6 pb-6 gap-2">
            <div className="flex items-center gap-2 mb-4 bg-[#F5F5F0] w-fit px-4 py-2 rounded-full border border-safi-green/5">
              <button className="text-xs font-bold text-safi-gold leading-none">RU</button>
              <div className="w-px h-3 bg-safi-green/20 mx-1"></div>
              <button className="text-xs font-bold opacity-40 text-safi-green leading-none hover:opacity-100 transition-opacity">KZ</button>
              <div className="w-px h-3 bg-safi-green/20 mx-1"></div>
              <button className="text-xs font-bold opacity-40 text-safi-green leading-none hover:opacity-100 transition-opacity">EN</button>
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={cn(
                  'text-sm uppercase tracking-widest font-bold p-3 rounded-xl transition-colors',
                  location.pathname === link.path ? 'bg-safi-green/5 text-safi-gold' : 'text-safi-green hover:bg-[#F5F5F0]'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px w-full bg-safi-green/5 my-4"></div>
            <Button variant="outline" to="/login" onClick={closeMenu} className="w-full justify-center">Вход</Button>
            <Button to="/register" onClick={closeMenu} className="w-full justify-center">Регистрация</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
