import { useTranslation } from 'react-i18next';
import { Container } from '../components/ui/Container';
import { newsArticles } from '../data/news';
import { Calendar } from 'lucide-react';

export default function NewsPage() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F5F5F0] min-h-screen py-24">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center md:text-left mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-safi-green mb-4">{t('news.pageTitle', 'Новости компании')}</h1>
            <p className="text-lg text-safi-text/70 max-w-2xl">Будьте в курсе всех последних событий, обновлений и специальных предложений.</p>
          </div>

          <div className="grid gap-8">
            {newsArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-[32px] border border-safi-green/5 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
                {article.imageUrl && (
                  <div className="md:w-1/3 h-64 md:h-auto shrink-0 overflow-hidden relative">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-8 md:p-10 flex flex-col flex-1 justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-safi-green/5 text-safi-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                      {article.category}
                    </span>
                    <span className="text-sm text-safi-text/50 flex items-center gap-1.5 font-mono">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-safi-green mb-4">
                    {article.title}
                  </h3>
                  
                  <p className="text-base text-safi-text/80 leading-relaxed">
                    {article.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
