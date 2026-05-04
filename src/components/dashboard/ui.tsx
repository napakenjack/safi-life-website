import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

export function StatCard({ 
  title, 
  value, 
  icon, 
  trend,
  className 
}: { 
  title: string; 
  value: ReactNode; 
  icon?: ReactNode; 
  trend?: { value: string, isPositive: boolean };
  className?: string;
}) {
  return (
    <div className={cn("bg-white p-6 rounded-3xl shadow-sm border border-safi-green/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300", className)}>
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="text-[10px] uppercase font-bold text-safi-text/60 tracking-widest">{title}</div>
        {icon && <div className="text-safi-white/100 group-hover:text-safi-white/100 transition-colors">{icon}</div>}
      </div>
      <div className="text-2xl md:text-3xl font-serif font-bold text-safi-green relative z-10">{value}</div>
      {trend && (
        <div className={cn("text-xs font-bold mt-2 relative z-10", trend.isPositive ? "text-green-500" : "text-red-500")}>
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
