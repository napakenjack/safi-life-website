import { supportTickets } from '../../data/dashboardMock';
import { Badge } from '../../components/dashboard/ui';
import { MessageSquare, Phone, Mail, FileUp, Filter } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Support() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-safi-green mb-2">Поддержка</h1>
        <p className="text-sm text-safi-text/70">Свяжитесь с нами, если у вас возникли вопросы.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Column (Contacts & FAQ placeholder) */}
        <div className="space-y-8">
           
           <div className="bg-safi-green text-white p-8 rounded-[32px] shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
             <h3 className="text-xl font-serif font-bold mb-6 relative z-10">Контакты менеджера</h3>
             
             <div className="space-y-6 relative z-10">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                   <Phone className="w-5 h-5 text-safi-gold" />
                 </div>
                 <div>
                   <div className="text-[10px] uppercase font-bold tracking-widest text-white/50">Телефон / WhatsApp</div>
                   <div className="font-bold">+7 (701) 000-00-00</div>
                 </div>
               </div>
               
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                   <MessageSquare className="w-5 h-5 text-safi-gold" />
                 </div>
                 <div>
                   <div className="text-[10px] uppercase font-bold tracking-widest text-white/50">Telegram</div>
                   <div className="font-bold">@safilife_support</div>
                 </div>
               </div>
               
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                   <Mail className="w-5 h-5 text-safi-gold" />
                 </div>
                 <div>
                   <div className="text-[10px] uppercase font-bold tracking-widest text-white/50">Email</div>
                   <div className="font-bold">support@safilife.kz</div>
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5">
             <h3 className="text-xl font-serif font-bold text-safi-green mb-6">Частые вопросы</h3>
             <div className="space-y-4">
               {['Как сделать апгрейд пакета?', 'Когда происходит начисление бонусов?', 'Могу ли я изменить спонсора?', 'Как оформить заявку на вывод?'].map((q, i) => (
                 <div key={i} className="p-3 bg-[#F5F5F0] rounded-xl hover:bg-safi-green hover:text-white transition-colors cursor-pointer text-sm font-bold text-safi-green group">
                   {q}
                 </div>
               ))}
             </div>
           </div>

        </div>

        {/* Right Column (Form & Ticket History) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Support Form */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5">
            <h3 className="text-xl font-serif font-bold text-safi-green mb-6">Написать обращение</h3>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-safi-text/60 tracking-widest mb-2">Тема</label>
                  <input type="text" placeholder="Кратко суть вопроса" className="w-full px-5 py-3.5 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-safi-green/20 outline-none text-sm font-bold text-safi-green" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-safi-text/60 tracking-widest mb-2">Категория</label>
                  <select className="w-full px-5 py-3.5 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-safi-green/20 outline-none text-sm font-bold text-safi-green">
                    <option>Вопрос по бонусам</option>
                    <option>Вопрос по выводу</option>
                    <option>Вопрос по структуре</option>
                    <option>Вопрос по пакету</option>
                    <option>Техническая проблема</option>
                    <option>Другое</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] uppercase font-bold text-safi-text/60 tracking-widest mb-2">Сообщение</label>
                <textarea rows={5} placeholder="Опишите вашу проблему подробно..." className="w-full px-5 py-4 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-safi-green/20 outline-none text-sm font-medium text-safi-green resize-none"></textarea>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-safi-green/5">
                <button type="button" className="flex items-center gap-2 px-4 py-3 bg-[#F5F5F0] rounded-xl text-[10px] uppercase tracking-widest font-bold text-safi-green hover:bg-safi-green/10 transition-colors w-full md:w-auto justify-center">
                  <FileUp className="w-4 h-4" /> Прикрепить файл
                </button>
                <button type="submit" className="w-full md:w-auto bg-safi-green text-safi-gold hover:text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-colors shadow-lg">
                  Отправить обращение
                </button>
              </div>
            </form>
          </div>

          {/* Ticket History */}
          <div className="bg-white rounded-[32px] shadow-sm border border-safi-green/5 overflow-hidden">
             <div className="p-6 md:p-8 border-b border-safi-green/5 flex justify-between items-center bg-[#F5F5F0]">
               <h3 className="text-xl font-serif font-bold text-safi-green">История обращений</h3>
               <button className="text-safi-green hover:bg-safi-green/10 p-2 rounded-lg transition-colors">
                 <Filter className="w-4 h-4" />
               </button>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white border-b border-safi-green/5">
                    <tr>
                      <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">ID / Дата</th>
                      <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Тема</th>
                      <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50">Статус</th>
                      <th className="px-8 py-4 text-[10px] uppercase font-bold tracking-widest text-safi-text/50 text-right">Ответ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-safi-green/5 text-sm">
                    {supportTickets.map((t, i) => (
                      <tr key={i} className="hover:bg-safi-green/5 transition-colors cursor-pointer group">
                        <td className="px-8 py-5">
                          <div className="font-bold text-safi-green">#{t.id}</div>
                          <div className="text-[10px] text-safi-text/50 mt-1">{t.date}</div>
                        </td>
                        <td className="px-8 py-5">
                          <div className="font-bold text-safi-text">{t.subject}</div>
                          <div className="text-xs text-safi-text/60 mt-1">{t.category}</div>
                        </td>
                        <td className="px-8 py-5">
                          <Badge variant={t.status === 'Закрыто' ? 'default' : t.status === 'В работе' ? 'warning' : 'success'}>
                            {t.status}
                          </Badge>
                        </td>
                        <td className="px-8 py-5 text-right font-bold text-safi-green">
                          {t.lastReply}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
