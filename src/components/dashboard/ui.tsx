import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

export function StatCard({ 
  title, 
  value, 
  icon, 
  trend,
  className,
  variant = 'default'
}: { 
  title: string; 
  value: ReactNode; 
  icon?: ReactNode; 
  trend?: { value: string, isPositive: boolean };
  className?: string;
  variant?: 'default' | 'primary' | 'dark' | 'gold';
}) {
  const bgColors = {
    default: 'bg-white border-safi-green/5',
    primary: 'bg-safi-green text-white border-none',
    dark: 'bg-[#1A1A1A] text-white border-none',
    gold: 'bg-safi-gold text-white border-none'
  };

  const titleColors = {
    default: 'text-safi-text/60',
    primary: 'text-white/70',
    dark: 'text-white/70',
    gold: 'text-white/80'
  };

  const valueColors = {
    default: 'text-safi-green',
    primary: 'text-white',
    dark: 'text-white',
    gold: 'text-white'
  };

  return (
    <div className={cn("p-6 rounded-3xl shadow-sm border relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300", bgColors[variant], className)}>
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={cn("text-[10px] uppercase font-bold tracking-widest", titleColors[variant])}>{title}</div>
        {icon && <div className={variant === 'default' ? "text-safi-green/40 group-hover:text-safi-gold transition-colors" : "text-white/40"}>{icon}</div>}
      </div>
      <div className={cn("text-2xl md:text-3xl font-serif font-bold relative z-10", valueColors[variant])}>{value}</div>
      {trend && (
        <div className={cn("text-xs font-bold mt-2 relative z-10", trend.isPositive ? (variant === 'default' ? "text-green-500" : "text-green-300") : (variant === 'default' ? "text-red-500" : "text-red-300"))}>
          {trend.isPositive ? '+' : ''}{trend.value}
        </div>
      )}
    </div>
  );
}

export function ProgressBar({ label, current, total, percentageOverride }: { label: string; current: number; total: number; percentageOverride?: number }) {
  const percentage = percentageOverride !== undefined ? percentageOverride : Math.min(100, Math.max(0, (current / total) * 100));
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-2 text-sm font-bold">
        <span className="text-safi-green">{label}</span>
        <span className="text-safi-gold text-xs">{percentage.toFixed(0)}%</span>
      </div>
      <div className="h-2 w-full bg-[#F5F5F0] rounded-full overflow-hidden">
        <div 
          className="h-full bg-safi-gold transition-all duration-1000 ease-out rounded-full relative"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent to-white/20"></div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 text-[10px] uppercase font-bold text-safi-text/40 tracking-widest">
        <span>{current.toLocaleString('ru-RU')}</span>
        <span>{total.toLocaleString('ru-RU')}</span>
      </div>
    </div>
  );
}

export function Badge({ children, variant = 'default', className }: { children: ReactNode; variant?: 'default' | 'success' | 'warning' | 'danger' | 'gold', className?: string }) {
  const variants = {
    default: "bg-[#F5F5F0] text-safi-green/70",
    success: "bg-green-100 text-green-700",
    warning: "bg-orange-100 text-orange-700",
    danger: "bg-red-100 text-red-700",
    gold: "bg-safi-gold/10 text-safi-gold"
  };

  return (
    <span className={cn("px-2.5 py-1 rounded-md text-[9px] uppercase tracking-widest font-bold inline-flex items-center justify-center", variants[variant], className)}>
      {children}
    </span>
  );
}
