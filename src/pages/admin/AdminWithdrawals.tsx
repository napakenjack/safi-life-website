import { withdrawals } from '../../data/adminMock';
import { AdminTable, AdminBadge } from '../../components/admin/ui';
import { Search, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

export default function AdminWithdrawals() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-safi-green mb-1">Заявки на вывод</h1>
          <p className="text-sm text-safi-text/70">Обработка выплат партнёрам</p>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <strong className="block mb-1">Внимание администраторам!</strong>
            Перед подтверждением выплаты необходимо проверить корректность реквизитов партнёра, сверить доступный баланс и убедиться в отсутствии мошеннических действий. Выплата через систему производится вручную.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <StatBox title="Новые" value="24" color="text-blue-500" />
         <StatBox title="В обработке" value="12" color="text-amber-500" />
         <StatBox title="Одобрено за сегодня" value="45" color="text-emerald-500" />
         <StatBox title="Отклонено" value="3" color="text-red-500" />
      </div>

      <div className="bg-white p-4 rounded-[24px] border border-safi-green/5 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-safi-text/40 absolute left-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Поиск по ID заявки или ФИО партнёра..." 
            className="w-full pl-12 pr-4 py-3 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-safi-green/20 outline-none text-sm font-medium text-safi-green"
          />
        </div>
      </div>

      <AdminTable headers={['Заявка / Дата', 'Партнёр', 'Сумма / Способ', 'Реквизиты', 'Статус', 'Действия']}>
        {withdrawals.map((w, i) => (
          <tr key={i} className="hover:bg-safi-green/5 transition-colors group">
            <td className="px-6 py-5">
              <div className="font-bold text-safi-text">{w.id}</div>
              <div className="text-xs text-safi-text/50 mt-1">{w.date}</div>
            </td>
            <td className="px-6 py-5">
              <div className="font-bold text-safi-green">{w.partnerName}</div>
              <div className="text-[10px] font-mono text-safi-text/50 mt-1">{w.partnerId}</div>
            </td>
            <td className="px-6 py-5">
              <div className="text-lg font-bold text-safi-green mb-1">{w.amount}</div>
              <div className="text-xs text-safi-text/60">{w.method}</div>
            </td>
            <td className="px-6 py-5">
              <div className="text-sm font-mono max-w-[200px] truncate">{w.reqs}</div>
              <div className="text-xs text-safi-text/50 mt-1">{w.bank} • ИИН: {w.iin}</div>
            </td>
            <td className="px-6 py-5">
              <AdminBadge variant={w.status === 'Отклонено' ? 'danger' : w.status === 'В обработке' ? 'warning' : w.status === 'Новая заявка' ? 'default' : 'success'}>
                {w.status}
              </AdminBadge>
              {w.comment && <div className="text-[10px] text-red-500 mt-2">{w.comment}</div>}
            </td>
            <td className="px-6 py-5 border-l border-safi-green/5 bg-white group-hover:bg-[#F5F5F0]/50 transition-colors">
              <div className="flex items-center gap-2 w-full justify-center">
                 {w.status === 'Выплачено' || w.status === 'Отклонено' ? (
                   <span className="text-xs text-safi-text/40 font-bold uppercase tracking-widest">{w.processedDate}</span>
                 ) : (
                   <>
                    <button className="p-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-lg transition-colors flex flex-col items-center justify-center gap-1 w-16" title="Одобрить">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-[8px] uppercase tracking-widest font-bold">Одобр.</span>
                    </button>
                    <button className="p-2 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white rounded-lg transition-colors flex flex-col items-center justify-center gap-1 w-16" title="Отклонить">
                      <XCircle className="w-5 h-5" />
                      <span className="text-[8px] uppercase tracking-widest font-bold">Откл.</span>
                    </button>
                   </>
                 )}
              </div>
            </td>
          </tr>
        ))}
      </AdminTable>
      
    </div>
  );
}

function StatBox({title, value, color}: {title: string, value: string, color: string}) {
  return (
    <div className="bg-white p-4 rounded-xl border border-safi-green/5 shadow-sm">
      <div className="text-[10px] uppercase font-bold tracking-widest text-safi-text/50 mb-1">{title}</div>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
    </div>
  )
}
