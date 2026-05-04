import { products } from '../../data/products';
import { ShoppingBag, Star } from 'lucide-react';

export default function Products() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-safi-green mb-1">Магазин продуктов</h1>
          <p className="text-sm text-safi-text/70">Ознакомьтесь с ассортиментом Safi Life</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-[32px] border border-safi-green/5 shadow-sm overflow-hidden group flex flex-col hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-safi-green uppercase tracking-widest">
                {product.category}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-serif font-bold text-safi-green mb-2">{product.name}</h3>
              <p className="text-sm text-safi-text/70 mb-4 line-clamp-2 flex-1">{product.shortDescription}</p>
              
              <div className="space-y-3 mb-6">
                 <div className="flex justify-between items-center text-sm border-b border-safi-green/5 pb-2">
                   <span className="text-safi-text/60">Цена</span>
                   <span className="font-bold text-safi-green">{product.price.toLocaleString()} ₸</span>
                 </div>
                 <div className="flex justify-between items-center text-sm pb-2">
                   <span className="text-safi-text/60">PV</span>
                   <span className="font-bold text-safi-gold flex items-center gap-1"><Star className="w-3 h-3 fill-current" /> {product.pv} PV</span>
                 </div>
              </div>
              
              <button className="w-full py-3 bg-[#F5F5F0] group-hover:bg-safi-green group-hover:text-white rounded-xl text-[10px] uppercase font-bold tracking-widest text-safi-green transition-colors flex items-center justify-center gap-2 mt-auto">
                <ShoppingBag className="w-4 h-4" />
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
