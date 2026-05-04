import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

export function LanguageSwitcher({ className, dark = false }: { className?: string, dark?: boolean }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  const bgClass = dark ? "bg-white/10 border-white/10" : "bg-[#F5F5F0] border-safi-green/5";
  const activeClass = "text-safi-gold";
  const inactiveClass = dark ? "text-white opacity-50 hover:opacity-100" : "text-safi-green opacity-40 hover:opacity-100";
  const separatorClass = dark ? "bg-white/20" : "bg-safi-green/20";

  return (
    <div className={cn("flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border", bgClass, className)}>
      <button 
        onClick={() => changeLanguage('ru')}
        className={cn("text-[10px] sm:text-xs font-bold leading-none transition-opacity", currentLang === 'ru' ? activeClass : inactiveClass)}
      >
        RU
      </button>
      <div className={cn("w-px h-3 mx-0.5", separatorClass)}></div>
      <button 
        onClick={() => changeLanguage('kg')}
        className={cn("text-[10px] sm:text-xs font-bold leading-none transition-opacity", currentLang === 'kg' ? activeClass : inactiveClass)}
      >
        KG
      </button>
      <div className={cn("w-px h-3 mx-0.5", separatorClass)}></div>
      <button 
        onClick={() => changeLanguage('mn')}
        className={cn("text-[10px] sm:text-xs font-bold leading-none transition-opacity", currentLang === 'mn' ? activeClass : inactiveClass)}
      >
        MN
      </button>
    </div>
  );
}
