import { newsArticles } from '../../data/news';
import { Calendar } from 'lucide-react';

export default function News() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-safi-green mb-1">Новости платформы</h1>
          <p className="text-sm text-safi-text/70">Следите за последними событиями и обновлениями</p>
        </div>
      </div>

      <div className="grid gap-6">
        {newsArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-[32px] border border-safi-green/5 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
            {article.imageUrl && (
              <div className="md:w-1/3 h-48 md:h-auto shrink-0 overflow-hidden relative">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-safi-green/5 text-safi-green px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {article.category}
                </span>
                <span className="text-xs text-safi-text/50 flex items-center gap-1 font-mono">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif font-bold text-safi-green mb-3">
                {article.title}
              </h3>
              
              <p className="text-sm text-safi-text/80 leading-relaxed">
                {article.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
