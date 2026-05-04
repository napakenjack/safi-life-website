import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { ArrowRight, Leaf, ShieldCheck, Wallet, RefreshCw, Layers, TrendingUp } from 'lucide-react';
import { products } from '../data/products';
import { packages } from '../data/packages';
import { newsArticles } from '../data/news';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-24 flex items-center min-h-[700px]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
            <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safi-green/5 border border-safi-green/10">
                <span className="w-2 h-2 rounded-full bg-safi-gold"></span>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Отечественная продукция Казахстана</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] font-medium text-safi-green">
                Здоровье, красота и <br className="hidden md:block"/>
                <span className="italic text-safi-gold">финансовый рост</span>
              </h1>
              <p className="text-lg md:text-xl text-safi-text leading-relaxed max-w-2xl opacity-80">
                Развивайте собственный партнёрский бизнес по прозрачной системе бонусов. Продукты для жизни, система для будущего.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 h-auto justify-center lg:justify-start w-full max-w-md lg:max-w-none">
                <Button size="lg" to="/register" className="h-auto flex-col items-center py-4 px-8 group w-full lg:w-auto">
                  <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70 mb-1">Начать сейчас</span>
                  <span className="text-sm">Стать партнёром</span>
                </Button>
                <Button size="lg" variant="outline" to="/products" className="h-auto flex-col items-center py-4 px-8 border-safi-green/20 hover:border-safi-green w-full lg:w-auto">
                  <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70 mb-1">Каталог</span>
                  <span className="text-sm">Оформить заказ</span>
                </Button>
              </div>
              <p className="mt-4 text-xs text-safi-text opacity-40 max-w-lg italic">
                *Доход зависит от личной активности. Информация не является гарантией заработка.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 border-t border-safi-green/5 mt-8 w-full max-w-3xl">
                <div className="flex flex-col text-safi-green items-center lg:items-start">
                  <span className="text-xl md:text-2xl font-serif font-bold">Бинар +</span>
                  <span className="text-[10px] uppercase tracking-wider opacity-60 italic">Классика</span>
                </div>
                <div className="hidden sm:block w-px h-10 bg-safi-green/10"></div>
                <div className="flex flex-col text-safi-green items-center lg:items-start">
                  <span className="text-xl md:text-2xl font-serif font-bold">14 дней</span>
                  <span className="text-[10px] uppercase tracking-wider opacity-60 italic">Выплаты бонусов</span>
                </div>
                <div className="hidden sm:block w-px h-10 bg-safi-green/10"></div>
                <div className="flex flex-col text-safi-green items-center lg:items-start">
                  <span className="text-xl md:text-2xl font-serif font-bold">PV</span>
                  <span className="text-[10px] uppercase tracking-wider opacity-60 italic">Накопительная система</span>
                </div>
              </div>
            </div>

            {/* Visual Section */}
            <div className="relative flex items-center justify-center lg:justify-end h-full py-12 lg:py-0 w-full mt-10 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-safi-green/5 rounded-full blur-3xl z-[-1]"></div>
              
              <div className="relative w-full max-w-[340px] sm:max-w-sm aspect-[3/4] bg-white/60 backdrop-blur-2xl rounded-[40px] shadow-2xl p-4 border border-white flex flex-col group overflow-visible">
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 bg-safi-gold rounded-full border-4 border-white flex flex-col items-center justify-center text-white shadow-xl rotate-12 z-20 group-hover:rotate-0 transition-transform duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Кэшбэк</span>
                  <span className="text-xl sm:text-2xl font-bold font-serif">20%</span>
                  <span className="text-[8px] uppercase tracking-widest opacity-80">бонус</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-safi-green rounded-full flex flex-col items-center justify-center text-white shadow-lg z-20 border-4 border-white">
                   <Leaf className="w-5 h-5 sm:w-6 sm:h-6 mb-1 opacity-80" />
                   <span className="text-[7px] sm:text-[8px] uppercase tracking-widest font-bold">100% Nat</span>
                </div>
                
                {/* Image container */}
                <div className="h-[55%] w-full bg-[#F5F5F0] rounded-[32px] flex items-center justify-center overflow-hidden relative shadow-inner">
                   <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=800" alt="Safi Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                     <span className="px-3 py-1.5 bg-white/90 backdrop-blur text-safi-green text-[9px] sm:text-[10px] uppercase font-bold tracking-widest rounded-full shadow-sm">Хит продаж</span>
                     <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-safi-green shadow-sm text-xs font-bold hover:bg-safi-green hover:text-white transition-colors cursor-pointer">+</span>
                   </div>
                </div>
                
                {/* Content */}
                <div className="mt-4 flex flex-col flex-1 px-3 sm:px-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg sm:text-xl font-serif text-safi-green font-bold">Safi Face Serum</h3>
                    <span className="text-safi-gold font-bold text-lg">21 000 ₸</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-safi-text opacity-70 mb-4 flex-1">
                    Омолаживающая сыворотка с пептидами. Антивозрастной эффект и глубокая гидратация кожи.
                  </p>
                  <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-safi-green/10 mt-auto pb-2">
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 rounded-md bg-[#F5F5F0] text-[10px] text-safi-green font-bold uppercase tracking-widest">35 PV</div>
                    </div>
                    <Button variant="ghost" size="sm" className="px-4 py-2 bg-[#F5F5F0] rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest font-bold hover:bg-safi-green hover:text-white transition-colors" to="/products">Каталог</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mini News Feed */}
      <section className="py-6 bg-white border-b border-safi-green/5">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
             <div className="shrink-0 flex items-center gap-2 text-safi-gold">
               <span className="w-2 h-2 rounded-full bg-safi-gold animate-pulse"></span>
               <span className="text-[10px] font-bold uppercase tracking-widest text-safi-green">Новости</span>
             </div>
             
             <div className="flex-1 overflow-hidden">
                <div className="flex gap-6 overflow-x-auto pb-2 -mb-2 scrollbar-none snap-x">
                   {newsArticles.slice(0, 3).map(article => (
                     <Link to="/news" key={article.id} className="shrink-0 snap-start bg-[#F5F5F0] border border-safi-green/5 rounded-xl p-4 w-[280px] hover:bg-safi-green/5 transition-colors cursor-pointer flex flex-col justify-between group">
                       <div className="text-[10px] text-safi-text/50 mb-2 font-mono flex items-center justify-between">
                         <span className="bg-white px-2 py-0.5 rounded-full text-safi-green font-bold">{article.category}</span>
                         <span>{article.date}</span>
                       </div>
                       <h4 className="text-sm font-bold text-safi-green line-clamp-2 leading-tight group-hover:text-safi-gold transition-colors">{article.title}</h4>
                     </Link>
                   ))}
                </div>
             </div>
             <div className="shrink-0">
               <Link to="/news" className="text-xs uppercase tracking-widest font-bold text-safi-gold hover:text-safi-green transition-colors flex items-center gap-1">
                 Смотреть всё <ArrowRight className="w-3 h-3" />
               </Link>
             </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F5F5F0]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-safi-green mb-4">Почему выбирают <span className="italic text-safi-gold">Safi Life</span></h2>
            <p className="text-lg text-safi-text max-w-2xl mx-auto opacity-80">
              Натуральные продукты из Казахстана и прозрачный маркетинг-план, который действительно работает.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Отечественная продукция', desc: 'Производим товары для здоровья и красоты из качественного сырья.', icon: <Leaf className="h-6 w-6 text-safi-green" /> },
              { title: 'Бинар + Классика', desc: 'Сбалансированная система выплат с левой и правой веток, плюс кэшбэк.', icon: <Layers className="h-6 w-6 text-safi-green" /> },
              { title: 'Выплаты каждые 14 дней', desc: 'Стабильные начисления прямо на ваш счет без скрытых комиссий.', icon: <Wallet className="h-6 w-6 text-safi-green" /> },
              { title: 'Апгрейд пакетов', desc: 'Начните с малого и повышайте свой пакет по мере роста бизнеса.', icon: <TrendingUp className="h-6 w-6 text-safi-green" /> },
              { title: 'Накопительные баллы (PV)', desc: 'Баллы сохраняются и переносятся, помогая быстрее достигать статусов.', icon: <RefreshCw className="h-6 w-6 text-safi-green" /> },
              { title: 'Прозрачный маркетинг', desc: 'Никаких сложных условий. Реальные достижения и справедливые выплаты.', icon: <ShieldCheck className="h-6 w-6 text-safi-green" /> },
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-safi-green/5 group hover:shadow-xl transition-all duration-300">
                <div className="h-16 w-16 bg-safi-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-safi-gold/20">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-safi-green mb-3">{benefit.title}</h3>
                <p className="text-sm text-safi-text opacity-70 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-safi-green mb-4">Популярные <span className="italic text-safi-gold">продукты</span></h2>
              <p className="text-lg text-safi-text opacity-80 max-w-xl">Начните знакомство с хитов продаж, которые уже выбрали тысячи партнеров.</p>
            </div>
            <Button variant="outline" to="/products" className="shrink-0 bg-transparent">ВЕСЬ КАТАЛОГ</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="group relative bg-[#F5F5F0] rounded-[32px] overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-500">
                <div className="aspect-[4/5] relative overflow-hidden bg-safi-bg p-6">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-safi-green/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-2xl shadow-sm transition-transform duration-700 group-hover:scale-105" />
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-safi-green flex items-center gap-1 shadow-sm border border-safi-green/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-safi-gold"></span>
                    {product.pv} PV
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 bg-white mx-2 mb-2 rounded-[24px] z-10 -mt-6">
                  <div className="text-[10px] font-bold text-safi-gold mb-2 uppercase tracking-widest">{product.category}</div>
                  <h3 className="text-xl font-serif text-safi-green mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-safi-text text-sm opacity-60 mb-6 line-clamp-2">{product.shortDescription}</p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-safi-green/5">
                    <span className="text-xl font-bold text-safi-green">{product.price.toLocaleString('ru-RU')} ₸</span>
                    <div className="w-8 h-8 rounded-full bg-safi-green/5 flex items-center justify-center text-safi-green group-hover:bg-safi-green group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" to="/products" className="w-full bg-transparent">Смотреть все</Button>
          </div>
        </Container>
      </section>

      {/* Entry Packages */}
      <section className="py-24 bg-[#F5F5F0]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-safi-green mb-4">Стартовые <span className="italic text-safi-gold">пакеты</span></h2>
            <p className="text-lg text-safi-text opacity-80 max-w-2xl mx-auto">
              Выберите пакет, который подходит именно вам, и начните зарабатывать с Safi Life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`rounded-3xl p-8 border hover:-translate-y-2 transition-transform duration-500 flex flex-col ${pkg.isPopular ? 'bg-safi-green text-white shadow-2xl relative border-safi-green' : 'bg-white border-safi-green/5'}`}>
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-safi-gold text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                    Хит продаж
                  </div>
                )}
                <h3 className={`text-2xl font-serif mb-2 ${pkg.isPopular ? 'text-white' : 'text-safi-green'}`}>{pkg.name}</h3>
                <div className={`text-4xl font-bold mb-8 ${pkg.isPopular ? 'text-safi-gold' : 'text-safi-green'}`}>{pkg.price.toLocaleString('ru-RU')} ₸</div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <div className={`mt-1 rounded-full shrink-0 ${pkg.isPopular ? 'bg-safi-gold' : 'bg-safi-green'} w-2 h-2`}></div>
                    <span className={`text-sm font-medium ${pkg.isPopular ? 'opacity-100' : 'text-safi-text text-opacity-80'}`}>Реферальный бонус: {pkg.referralBonus}%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className={`mt-1 rounded-full shrink-0 ${pkg.binaryBonus ? (pkg.isPopular ? 'bg-safi-gold' : 'bg-safi-green') : 'bg-gray-300'} w-2 h-2`}></div>
                    <span className={`text-sm ${pkg.binaryBonus ? 'font-medium' : 'opacity-40'} ${pkg.isPopular && pkg.binaryBonus ? 'opacity-100' : ''} ${!pkg.isPopular && pkg.binaryBonus ? 'text-safi-text text-opacity-80' : ''}`}>
                      Бинарный бонус: {pkg.binaryBonus ? `${pkg.binaryBonus}%` : 'Нет'}
                    </span>
                  </li>
                  {pkg.features.slice(1).map((feature, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm ${pkg.isPopular ? 'opacity-80' : 'text-safi-text text-opacity-70'}`}>
                       <div className="mt-1.5 rounded-full bg-current shrink-0 w-1.5 h-1.5 opacity-40"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.isPopular ? 'secondary' : 'outline'} className="w-full" to="/register">Выбрать пакет</Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-safi-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-safi-bg/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-safi-gold/20 rounded-full blur-3xl z-0"></div>
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Готовы начать <span className="italic text-safi-gold">бизнес?</span></h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
            Оставьте заявку, и наш менеджер свяжется с вами, чтобы проконсультировать по пакетам и маркетинг-плану.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" to="/contacts">Получить консультацию</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" to="/marketing">Изучить маркетинг-план</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
