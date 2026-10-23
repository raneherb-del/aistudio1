import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface TopBannerProps {
  lang: Language;
}

export const TopBanner: React.FC<TopBannerProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].topBanner;

  return (
    <div className="bg-[#a5d6f4]/20 text-[#125a85] text-xs font-medium border-b border-[#a5d6f4]/60 py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center gap-2">
          <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-xs"></span>
          </span>
          <span>{t.promo}</span>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-[11px] sm:text-xs text-[#41474f]">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#125a85]" />
            <span>{t.regNumber} <strong className="font-mono text-[#0b1c30]">{t.regValue}</strong></span>
          </div>
          <span className="text-[#a5d6f4]" aria-hidden="true">•</span>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4b635a]" />
            <span>{t.authentic}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
