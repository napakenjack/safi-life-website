import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { products, Product } from '../data/products';
import { X, Check } from 'lucide-react';

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="py-20 bg-safi-bg min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safi-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"></div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-safi-green mb-4">Каталог <span className="italic text-safi-gold">продукции</span></h2>
          <p className="text-safi-text opacity-70 max-w-2xl mx-auto uppercase tracking-wider text-xs font-bold">Здоровье, красота и ежедневное использование</p>
        </div>
        
        <div className="flex gap-4 mb-10 overflow-x-auto pb-4 hide-scrollbar">
          {['Все', 'Здоровье', 'Красота', 'Ежедневное использование'].map((cat, i) => (
            <button key={i} className={`px-6 py-3 rounded-full whitespace-nowrap text-[10px] uppercase tracking-widest font-bold transition-all ${i === 0 ? 'bg-safi-green text-safi-gold shadow-md' : 'bg-white border border-safi-green/10 text-safi-text opacity-70 hover:bg-[#F5F5F0]'}`}>
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
                  <Button variant="outline" className="w-full" onClick={() => setSelectedProduct(product)}>Подробнее</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-safi-green/40 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white rounded-[40px] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 border border-safi-green/5 animate-in fade-in zoom-in-95 duration-300 hide-scrollbar">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-[#F5F5F0] rounded-full flex items-center justify-center text-safi-green hover:bg-safi-green hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid md:grid-cols-2 gap-0 h-full">
              <div className="h-[300px] md:h-auto md:min-h-[500px] bg-[#F5F5F0] relative overflow-hidden">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] uppercase font-bold tracking-widest text-safi-green shadow-sm">
                  {selectedProduct.pv} PV
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col h-full bg-white">
                <div className="text-[10px] font-bold text-safi-gold mb-4 uppercase tracking-widest">{selectedProduct.category}</div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-safi-green mb-4">{selectedProduct.name}</h2>
                <div className="text-3xl font-serif font-bold text-safi-green mb-8">{selectedProduct.price.toLocaleString('ru-RU')} ₸</div>
                
                <div className="space-y-8 flex-1">
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-safi-green tracking-widest opacity-80 mb-3 border-b border-safi-green/10 pb-2">Описание</h4>
                    <p className="text-sm text-safi-text leading-relaxed opacity-80">{selectedProduct.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-safi-green tracking-widest opacity-80 mb-3 border-b border-safi-green/10 pb-2">Преимущества</h4>
                    <ul className="space-y-2">
                       {selectedProduct.benefits.map((benefit, i) => (
                         <li key={i} className="flex items-start gap-3 text-sm text-safi-text opacity-80">
                           <Check className="w-4 h-4 mt-0.5 text-safi-gold shrink-0" />
                           <span>{benefit}</span>
                         </li>
                       ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-safi-green tracking-widest opacity-80 mb-3 border-b border-safi-green/10 pb-2">Состав</h4>
                    <p className="text-sm text-safi-text leading-relaxed opacity-80">{selectedProduct.composition.join(', ')}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-safi-green tracking-widest opacity-80 mb-3 border-b border-safi-green/10 pb-2">Способ применения</h4>
                    <p className="text-sm text-safi-text leading-relaxed opacity-80">{selectedProduct.usage}</p>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-safi-green/5">
                  <Button size="lg" className="w-full">Добавить в корзину</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
