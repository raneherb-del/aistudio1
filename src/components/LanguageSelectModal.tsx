import React from 'react';
import { Language, TRANSLATIONS } from '../data/translations';
import { Globe, Check, Sparkles, Server } from 'lucide-react';

interface LanguageSelectModalProps {
  isOpen: boolean;
  onSelectLanguage: (lang: Language) => void;
  currentLanguage: Language;
}

export const LanguageSelectModal: React.FC<LanguageSelectModalProps> = ({
  isOpen,
  onSelectLanguage,
  currentLanguage
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLanguage].langModal;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fadeIn"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full border border-[#a5d6f4] shadow-2xl overflow-hidden relative transform transition-all animate-scaleUp">
        
        {/* Decorative Top Accent Bar */}
        <div className="h-2.5 bg-gradient-to-r from-[#125a85] via-[#5caee0] to-[#a5d6f4]" />

        <div className="p-6 sm:p-8">
          {/* Header with Icon */}
          <div className="flex flex-col items-center text-center space-y-3 mb-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dce9ff] to-[#a5d6f4]/50 border border-[#a5d6f4] flex items-center justify-center text-[#125a85] shadow-sm">
                <Globe className="w-8 h-8 animate-pulse" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#125a85] text-white p-1 rounded-full shadow-sm">
                <Server className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edf6fb] border border-[#c2ddef] text-[11px] font-bold text-[#125a85] uppercase tracking-wider font-mono">
              <Sparkles className="w-3 h-3 text-[#125a85]" />
              <span>{t.headerBadge}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0b1c30] tracking-tight font-display">
              {t.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#41474f] leading-relaxed max-w-sm whitespace-pre-line">
              {t.desc}
            </p>
          </div>

          {/* Options Grid */}
          <div className="space-y-3.5">
            {/* Thai Option */}
            <button
              type="button"
              onClick={() => onSelectLanguage('th')}
              className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center justify-between group cursor-pointer text-left ${
                currentLanguage === 'th'
                  ? 'border-[#125a85] bg-[#f0f7fc] shadow-md ring-2 ring-[#a5d6f4]/40'
                  : 'border-[#e2e8f0] bg-white hover:border-[#a5d6f4] hover:bg-[#f8fbfe]'
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Thai Flag Badge */}
                <div className="w-13 h-10 rounded-xl overflow-hidden shadow-md border border-slate-200 shrink-0 flex flex-col justify-between group-hover:scale-105 transition-transform">
                  <div className="h-[17%] bg-[#A51931]" />
                  <div className="h-[17%] bg-white" />
                  <div className="h-[32%] bg-[#2D2A4A]" />
                  <div className="h-[17%] bg-white" />
                  <div className="h-[17%] bg-[#A51931]" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-[#0b1c30] group-hover:text-[#125a85] transition-colors">
                      {TRANSLATIONS.th.langModal.thTitle}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#125a85] bg-[#a5d6f4]/30 px-2 py-0.5 rounded">
                      TH
                    </span>
                  </div>
                  <p className="text-xs text-[#41474f] mt-0.5">
                    {TRANSLATIONS.th.langModal.thSub}
                  </p>
                </div>
              </div>

              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                currentLanguage === 'th'
                  ? 'bg-[#125a85] text-white shadow-sm'
                  : 'border border-slate-300 group-hover:border-[#125a85] text-transparent'
              }`}>
                <Check className="w-4 h-4" />
              </div>
            </button>

            {/* English Option */}
            <button
              type="button"
              onClick={() => onSelectLanguage('en')}
              className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center justify-between group cursor-pointer text-left ${
                currentLanguage === 'en'
                  ? 'border-[#125a85] bg-[#f0f7fc] shadow-md ring-2 ring-[#a5d6f4]/40'
                  : 'border-[#e2e8f0] bg-white hover:border-[#a5d6f4] hover:bg-[#f8fbfe]'
              }`}
            >
              <div className="flex items-center gap-4">
                {/* UK / US Union Jack Flag SVG Badge */}
                <div className="w-13 h-10 rounded-xl overflow-hidden shadow-md border border-slate-200 shrink-0 relative group-hover:scale-105 transition-transform bg-[#012169]">
                  <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
                    <clipPath id="s">
                      <path d="M0,0 v30 h60 v-30 z"/>
                    </clipPath>
                    <clipPath id="t">
                      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
                    </clipPath>
                    {/* Blue background is svg container */}
                    {/* White diagonals */}
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                    {/* Red diagonals */}
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" clipPath="url(#t)" />
                    {/* White cross */}
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                    {/* Red cross */}
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-[#0b1c30] group-hover:text-[#125a85] transition-colors">
                      {TRANSLATIONS.en.langModal.enTitle}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#125a85] bg-[#a5d6f4]/30 px-2 py-0.5 rounded">
                      EN
                    </span>
                  </div>
                  <p className="text-xs text-[#41474f] mt-0.5">
                    {TRANSLATIONS.en.langModal.enSub}
                  </p>
                </div>
              </div>

              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                currentLanguage === 'en'
                  ? 'bg-[#125a85] text-white shadow-sm'
                  : 'border border-slate-300 group-hover:border-[#125a85] text-transparent'
              }`}>
                <Check className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#717880]">
            <span className="flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-[#125a85]" />
              <span>International Bilingual Edition</span>
            </span>
            <span>RANE HERB • Official</span>
          </div>

        </div>

      </div>
    </div>
  );
};
