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
            <div className="w-10 h-10 bg-safi-green rounded-xl flex items-center justify-center text-safi-gold font-bold text-xl">S</div>
            <span className="text-2xl font-serif font-bold tracking-tight text-safi-green">Safi Life</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium uppercase tracking-widest transition-colors hover:text-safi-gold',
                  location.pathname === link.path ? 'text-safi-gold border-b border-safi-gold' : 'text-safi-green opacity-80'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 mr-4 bg-[#F5F5F0] px-3 py-1.5 rounded-full border border-safi-green/5">
              <span className="text-[10px] font-bold text-safi-gold">RU</span>
              <div className="w-px h-3 bg-safi-green/20"></div>
              <span className="text-[10px] font-bold opacity-40 text-safi-green">KZ</span>
              <span className="text-[10px] font-bold opacity-40 text-safi-green">EN</span>
            </div>
            <Button variant="outline" size="sm" to="/login">Вход</Button>
            <Button size="sm" to="/register">Регистрация</Button>
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
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg pb-6">
          <nav className="flex flex-col px-4 pt-4 pb-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={cn(
                  'text-lg font-medium p-2 rounded-md',
                  location.pathname === link.path ? 'bg-green-50 text-green-700' : 'text-gray-800'
                )}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-gray-100" />
            <Button variant="outline" to="/products" onClick={closeMenu} className="w-full justify-center">Оформить заказ</Button>
            <Button to="/register" onClick={closeMenu} className="w-full justify-center">Стать партнёром</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
