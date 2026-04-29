import React from 'react';
import { cn } from '../../lib/utils';
import { Badge as UserBadge } from '../dashboard/ui';

export function AdminStatCard({ title, value, icon: Icon, trend, className }: { title: string, value: string | number, icon: any, trend?: string, className?: string }) {
  return (
    <div className={cn("bg-white p-6 rounded-[24px] border border-safi-green/5 shadow-sm relative overflow-hidden group", className)}>
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-safi-green/5 rounded-full blur-2xl group-hover:bg-safi-green/10 transition-colors"></div>
      <div className="flex justify-between items-start relative z-10">
        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold text-safi-text/50 mb-2">{title}</h3>
          <div className="text-2xl font-serif font-bold text-safi-green leading-none">{value}</div>
          {trend && <div className="mt-2 text-[10px] font-bold text-green-500 uppercase tracking-widest">{trend}</div>}
        </div>
        <div className="w-12 h-12 rounded-2xl bg-[#F5F5F0] flex items-center justify-center text-safi-gold shrink-0">
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export function AdminTable({ headers, children }: { headers: string[], children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[24px] border border-safi-green/5 shadow-sm overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#F5F5F0]">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50 text-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-safi-green/5 text-sm">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminBadge({ children, variant = 'default', className }: { children: React.ReactNode, variant?: 'default' | 'success' | 'warning' | 'danger' | 'gold', className?: string }) {
  return <UserBadge variant={variant} className={className}>{children}</UserBadge>;
}
