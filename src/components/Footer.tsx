import React from 'react';
import { CheckCircle2, ShieldCheck, Truck, Phone, Mail, MessageCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: Language;
  onOpenOrderTracking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenOrderTracking }) => {
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer className="bg-[#0b1c30] text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5b9bd5] to-[#136299] flex items-center justify-center text-white font-bold text-xs">
                RH
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                RANE <span className="text-[#a5d6f4] font-light">HERB</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.desc}
            </p>
            <div className="pt-1 flex items-center gap-2 text-[11px] text-slate-300">
              <span className="relative flex h-2 w-2 items-center justify-center shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-xs"></span>
              </span>
              <span>{t.readyShip}</span>
            </div>
          </div>

          {/* Column 2: Standards & Certification */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider text-[#a5d6f4] uppercase font-mono">
              {t.colStandards}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#a5d6f4] shrink-0 mt-0.5" />
                <span>{t.certGmp}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#a5d6f4] shrink-0 mt-0.5" />
                <span>
                  {t.certReg}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#a5d6f4] shrink-0 mt-0.5" />
                <span>{t.certThai}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Warranties */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider text-[#a5d6f4] uppercase font-mono">
              {t.colWarranty}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-[#a5d6f4] shrink-0 mt-0.5" />
                <span>{t.freeShipAll}</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#a5d6f4] shrink-0 mt-0.5" />
                <span>{t.authenticBrand}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm">📦</span>
                <span>{t.paddedBox}</span>
              </li>
            </ul>
            {onOpenOrderTracking && (
              <button
                type="button"
                onClick={onOpenOrderTracking}
                className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#136299]/50 hover:bg-[#136299] text-[#a5d6f4] hover:text-white border border-[#5b9bd5]/40 text-xs font-medium transition-all cursor-pointer shadow-xs"
              >
                <Truck className="w-3.5 h-3.5" />
                <span>{lang === 'th' ? '🔍 ตรวจสอบสถานะคำสั่งซื้อ' : '🔍 Track Order'}</span>
              </button>
            )}
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider text-[#a5d6f4] uppercase font-mono">
              {t.colContact}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#a5d6f4] shrink-0" />
                <span>Line Official: <a href="https://lin.ee/uV13yLr" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-semibold">@rane_herb</a></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#a5d6f4]">f</span>
                <span>Facebook: <strong className="text-white">Rane Herb</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#a5d6f4] shrink-0" />
                <span>Phone: <a href="tel:0820094695" className="hover:text-white underline">082-009-4695</a> {t.hours}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#a5d6f4] shrink-0" />
                <span>Email: <a href="mailto:raneherb@gmail.com" className="hover:text-white">raneherb@gmail.com</a></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            {t.copyright}
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-slate-300 transition-colors">{t.privacy}</a>
            <span aria-hidden="true">•</span>
            <a href="#hero" className="hover:text-slate-300 transition-colors">{t.terms}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
