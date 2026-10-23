import React, { useState } from 'react';
import { Language, TRANSLATIONS, FAQS_DATA } from '../data/translations';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const t = TRANSLATIONS[lang].faq;
  const faqs = FAQS_DATA[lang];

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-[#e2e8f0]/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs font-semibold tracking-wider text-[#125a85] uppercase font-mono">
            {t.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1c30] font-display">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#41474f]">
            {t.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#a5d6f4] bg-[#f5faff] shadow-xs'
                    : 'border-[#e2e8f0] bg-white hover:border-[#a5d6f4]/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-semibold transition-colors ${
                    isOpen ? 'text-[#125a85]' : 'text-[#0b1c30] group-hover:text-[#125a85]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                    isOpen ? 'bg-[#a5d6f4]/30 text-[#125a85] rotate-180' : 'text-[#717880] group-hover:text-[#0b1c30]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#41474f] leading-relaxed border-t border-[#dce9ff]/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#eff4ff] border border-[#dce9ff] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#136299] text-white flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0b1c30]">{t.needHelp}</p>
              <p className="text-xs text-[#41474f]">{t.supportTeam}</p>
            </div>
          </div>
          <a
            href="tel:0820094695"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0b1c30] hover:bg-[#136299] transition-colors shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{t.callBtn}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
