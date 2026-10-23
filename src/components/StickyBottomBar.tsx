import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface StickyBottomBarProps {
  lang: Language;
  onOpenOrderModal: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  lang,
  onOpenOrderModal
}) => {
  const t = TRANSLATIONS[lang].stickyBar;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0b1c30]/95 backdrop-blur-md text-white border-t border-slate-700 py-3 px-4 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Information */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#a5d6f4]/20 border border-[#a5d6f4]/40 text-[#a5d6f4] flex items-center justify-center shrink-0 shadow-inner">
            <Sparkles className="w-5 h-5 text-[#a5d6f4]" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
              <span>{t.productName}</span>
              <span className="hidden sm:inline-block text-[10px] bg-[#a5d6f4]/20 text-[#a5d6f4] border border-[#a5d6f4]/30 px-1.5 py-0.5 rounded font-mono">
                {t.regBadge}
              </span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-300">
              {t.subDesc}
            </div>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://lin.ee/uV13yLr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-[#0b1c30] bg-[#a5d6f4] hover:bg-[#8eccee] border border-[#a5d6f4] shadow-lg hover:shadow-[#a5d6f4]/30 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4 text-[#0b1c30]" />
          </a>
        </div>

      </div>
    </div>
  );
};
