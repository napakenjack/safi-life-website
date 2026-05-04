import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { faq } from '../data/faq';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const { t } = useTranslation();
  return (
    <div className="py-20 bg-safi-bg min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-safi-green/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-safi-green mb-4">Часто задаваемые <span className="italic text-safi-gold">{t('faq.title2', 'вопросы')}</span></h2>
          <p className="text-safi-text opacity-70 max-w-2xl mx-auto uppercase tracking-wider text-xs font-bold">Ответы на главные вопросы о компании, продуктах и партнерстве.</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {faq.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-serif font-bold mb-8 text-safi-green border-b border-safi-green/10 pb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.questions.map((q, qIdx) => (
                  <details key={qIdx} className="group bg-white rounded-[24px] shadow-sm border border-safi-green/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 font-serif font-bold text-lg text-safi-green marker:content-none hover:bg-safi-green/5 transition-colors">
                      {q.q}
                      <span className="transition-transform duration-300 group-open:-rotate-180 bg-[#F5F5F0] p-2 rounded-full text-safi-gold shrink-0 ml-4">
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </summary>
                    <div className="p-6 md:p-8 pt-0 md:pt-0 text-safi-text opacity-80 leading-relaxed border-t border-safi-green/5 mt-2">
                      <p className="pt-4">{q.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
          
          <div className="text-center p-8 border border-safi-green/10 rounded-[24px] bg-white text-[10px] uppercase tracking-widest text-safi-text opacity-50 font-bold shadow-sm">
            «Партнёрский доход зависит от активности, продаж и выполнения условий маркетинг-плана. Информация не является публичной офертой и гарантией дохода.»
          </div>
        </div>
      </Container>
    </div>
  );
}
