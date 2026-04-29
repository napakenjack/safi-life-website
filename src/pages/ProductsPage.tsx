import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { products } from '../data/products';

export default function ProductsPage() {
  return (
    <div className="py-20 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Каталог продукции" 
          subtitle="Здоровье, красота и ежедневное использование"
        />
        
        <div className="flex gap-4 mb-10 overflow-x-auto pb-4 hide-scrollbar">
          {['Все', 'Здоровье', 'Красота', 'Ежедневное использование'].map((cat, i) => (
            <button key={i} className={`px-6 py-3 rounded-full whitespace-nowrap text-[10px] uppercase tracking-widest font-bold transition-all ${i === 0 ? 'bg-safi-green text-safi-gold' : 'bg-white border border-safi-green/10 text-safi-text opacity-70 hover:bg-[#F5F5F0]'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-safi-green/5 flex flex-col group hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-[4/3] bg-[#F5F5F0] relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] uppercase font-bold tracking-widest text-safi-green shadow-sm">
                  {product.pv} PV
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-[10px] font-bold text-safi-gold mb-3 uppercase tracking-widest">{product.category}</div>
                <h3 className="text-xl font-serif font-bold text-safi-green mb-3">{product.name}</h3>
                <p className="text-safi-text opacity-70 text-sm mb-6 flex-1 leading-relaxed">{product.shortDescription}</p>
                <div className="text-3xl font-serif font-bold text-safi-green mb-6">{product.price.toLocaleString('ru-RU')} ₸</div>
                <div className="flex flex-col gap-3">
                  <Button className="w-full">Заказать</Button>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
