import { user } from '../../data/dashboardMock';
import { Camera, Save, Shield, Bell, User, CreditCard } from 'lucide-react';
import { Badge } from '../../components/dashboard/ui';

export default function Profile() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
      
      <div className="flex items-center justify-between mb-8">
         <h1 className="text-3xl font-serif font-bold text-safi-green">Профиль</h1>
         <button className="flex items-center gap-2 px-6 py-3 bg-safi-green text-safi-gold hover:text-white rounded-xl font-bold uppercase tracking-widest text-[10px] transition-colors shadow-lg">
           <Save className="w-4 h-4 ml-[-4px]" /> Сохранить изменения
         </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Column (Avatar & Quick Info) */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-safi-green/5 text-center flex flex-col items-center">
             <div className="relative mb-6">
               <div className="w-32 h-32 rounded-full bg-safi-green/5 flex items-center justify-center text-5xl font-serif text-safi-green border-4 border-white shadow-lg overflow-hidden">
                 {user.name.charAt(0)}
               </div>
               <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#F5F5F0] rounded-full border-4 border-white flex items-center justify-center text-safi-green hover:bg-safi-green hover:text-white transition-colors cursor-pointer group shadow-sm">
                 <Camera className="w-4 h-4 transition-transform group-hover:scale-110" />
               </button>
             </div>
             
             <h2 className="text-2xl font-serif font-bold text-safi-green mb-2">{user.name}</h2>
             <div className="text-[10px] font-mono text-safi-text/50 mb-6 bg-[#F5F5F0] px-3 py-1 rounded-md">{user.partnerId}</div>
             
             <div className="w-full space-y-3">
               <div className="flex justify-between items-center text-sm p-3 bg-[#F5F5F0] rounded-xl">
                 <span className="text-safi-text/70">Пакет</span>
                 <Badge variant="gold" className="text-[10px]">{user.package}</Badge>
               </div>
               <div className="flex justify-between items-center text-sm p-3 bg-[#F5F5F0] rounded-xl">
                 <span className="text-safi-text/70">Статус</span>
                 <Badge variant="default" className="text-[10px]">{user.status}</Badge>
               </div>
               <div className="flex justify-between items-center text-sm p-3 bg-[#F5F5F0] rounded-xl">
                 <span className="text-safi-text/70">Спонсор</span>
                 <span className="font-bold text-safi-green">{user.sponsor}</span>
               </div>
               <div className="flex justify-between items-center text-sm p-3 bg-[#F5F5F0] rounded-xl">
                 <span className="text-safi-text/70">Регистрация</span>
                 <span className="font-bold text-safi-green">{user.registrationDate}</span>
               </div>
             </div>
          </div>
        </div>

        {/* Right Column (Forms) */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* Section 1 */}
           <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-safi-green/5">
             <h3 className="text-xl font-serif font-bold text-safi-green flex items-center gap-3 mb-6">
               <User className="w-5 h-5 text-safi-gold" /> Личные данные
             </h3>
             <div className="grid md:grid-cols-2 gap-4 md:gap-6">
               <ConfigInput label="ФИО" defaultValue={user.name} />
               <ConfigInput label="Телефон" defaultValue="+7 (777) 123-45-67" type="tel" />
               <ConfigInput label="Email" defaultValue="aidar@example.kz" type="email" />
               <ConfigInput label="Дата рождения" defaultValue="15.08.1990" type="date" />
               <ConfigInput label="Город" defaultValue="Алматы" />
               <ConfigInput label="Страна" defaultValue="Казахстан" />
             </div>
           </div>

           {/* Section 2 */}
           <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-safi-green/5">
             <h3 className="text-xl font-serif font-bold text-safi-green flex items-center gap-3 mb-2">
               <CreditCard className="w-5 h-5 text-safi-gold" /> Платёжные данные
             </h3>
             <p className="text-[10px] uppercase tracking-widest font-bold text-safi-text/40 mb-6">Используются только для обработки выплат.</p>
             <div className="grid md:grid-cols-2 gap-4 md:gap-6">
               <div className="md:col-span-2">
                 <label className="block text-[10px] uppercase font-bold text-safi-text/60 tracking-widest mb-2">Способ выплаты</label>
                 <select className="w-full px-5 py-3.5 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-safi-green/20 outline-none text-sm font-bold text-safi-green">
                   <option>Банковская карта (KZT)</option>
                   <option>Счёт ИП</option>
                 </select>
               </div>
               <ConfigInput label="Номер карты" defaultValue="4400 4301 2345 6789" />
               <ConfigInput label="Банк" defaultValue="Kaspi Bank" />
               <ConfigInput label="Имя получателя" defaultValue="AIDAR ALIKHANOV" />
               <ConfigInput label="ИИН / БИН" defaultValue="900815301234" />
             </div>
           </div>

           {/* Section 3 & 4 Grid */}
           <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-safi-green/5">
               <h3 className="text-xl font-serif font-bold text-safi-green flex items-center gap-3 mb-6">
                 <Shield className="w-5 h-5 text-safi-gold" /> Безопасность
               </h3>
               <div className="space-y-4">
                 <ConfigInput label="Текущий пароль" type="password" placeholder="••••••••" />
                 <ConfigInput label="Новый пароль" type="password" placeholder="••••••••" />
                 <ConfigInput label="Повторите пароль" type="password" placeholder="••••••••" />
                 <button className="w-full mt-2 bg-[#F5F5F0] hover:bg-safi-green hover:text-white text-safi-green py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-colors">
                   Изменить пароль
                 </button>
               </div>
               <div className="mt-6 pt-6 border-t border-safi-green/5">
                 <div className="flex flex-col gap-2 opacity-50">
                   <div className="text-[10px] uppercase font-bold tracking-widest mb-2">Будущие функции</div>
                   <div className="flex items-center gap-2 text-xs font-bold"><Shield className="w-4 h-4" /> Двухфакторная защита</div>
                   <div className="flex items-center gap-2 text-xs font-bold"><Shield className="w-4 h-4" /> История входов</div>
                 </div>
               </div>
             </div>

             <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-safi-green/5">
               <h3 className="text-xl font-serif font-bold text-safi-green flex items-center gap-3 mb-6">
                 <Bell className="w-5 h-5 text-safi-gold" /> Уведомления
               </h3>
               <div className="space-y-4">
                 <ToggleRow label="Уведомления о бонусах" active />
                 <ToggleRow label="Новые партнёры" active />
                 <ToggleRow label="Статус выплат" active />
                 <ToggleRow label="Новости компании" active={false} />
                 <ToggleRow label="Уведомления в WhatsApp" active={false} />
                 <ToggleRow label="Уведомления в Email" active />
               </div>
             </div>
           </div>

        </div>
      </div>
    </div>
  );
}

function ConfigInput({ label, defaultValue, type = "text", placeholder }: { label: string, defaultValue?: string, type?: string, placeholder?: string }) {
  return (
    <div>
      <label className="block text-[10px] uppercase font-bold text-safi-text/60 tracking-widest mb-2">{label}</label>
      <input 
        type={type} 
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full px-5 py-3.5 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-safi-green/20 outline-none text-sm font-bold text-safi-green placeholder:text-safi-text/40 placeholder:font-normal"
      />
    </div>
  );
}

function ToggleRow({ label, active: _active }: { label: string, active?: boolean }) {
  // In a real app we'd use state
  return (
    <div className="flex items-center justify-between p-2 hover:bg-[#F5F5F0] rounded-lg transition-colors cursor-pointer group">
      <span className="text-xs font-bold text-safi-text/70">{label}</span>
      <div className={`w-10 h-5 rounded-full relative transition-colors ${ _active ? 'bg-safi-green' : 'bg-safi-text/20' }`}>
        <div className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${ _active ? 'translate-x-5' : 'translate-x-1' }`}></div>
      </div>
    </div>
  );
}
