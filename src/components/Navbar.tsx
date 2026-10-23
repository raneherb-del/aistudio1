import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Sparkles, Globe, Truck } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onSetLanguage: (lang: Language) => void;
  onOpenLanguageModal: () => void;
  onOpenOrderModal: (packId?: string) => void;
  onOpenOrderTracking: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onSetLanguage,
  onOpenLanguageModal,
  onOpenOrderModal,
  onOpenOrderTracking,
  onOpenCart,
  cartCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  const navLinks = [
    { label: t.overview, href: '#hero', isExternal: false },
    { label: t.features, href: '#features', isExternal: false },
    { label: t.promotions, href: 'https://lin.ee/uV13yLr', isExternal: true },
    { label: t.reviews, href: '#reviews', isExternal: false },
    { label: t.faq, href: '#faq', isExternal: false }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a href="#hero" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a5d6f4] via-[#5caee0] to-[#125a85] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <span className="font-bold text-xs tracking-wider text-[#08283d]">RH</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0b1c30] font-display">
              RANE <span className="text-[#125a85] font-light">HERB</span>
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#41474f]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className="hover:text-[#125a85] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#a5d6f4] hover:after:w-full after:transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Action Buttons + Language Switcher */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Language Switcher Pill Button */}
          <button
            type="button"
            onClick={onOpenLanguageModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#a5d6f4] bg-[#eff6fb] hover:bg-[#dcebf6] text-[#125a85] text-xs font-semibold shadow-2xs transition-all cursor-pointer"
            title={lang === 'th' ? 'เปลี่ยนภาษา / Change Language' : 'Change Language / เปลี่ยนภาษา'}
          >
            {lang === 'th' ? (
              <>
                {/* Thai flag mini */}
                <span className="inline-block w-4 h-3 rounded-xs overflow-hidden border border-slate-300 shadow-2xs">
                  <span className="block h-[17%] bg-[#A51931]" />
                  <span className="block h-[17%] bg-white" />
                  <span className="block h-[32%] bg-[#2D2A4A]" />
                  <span className="block h-[17%] bg-white" />
                  <span className="block h-[17%] bg-[#A51931]" />
                </span>
                <span className="font-mono">TH</span>
              </>
            ) : (
              <>
                {/* UK flag mini */}
                <span className="inline-block w-4 h-3 rounded-xs overflow-hidden border border-slate-300 shadow-2xs bg-[#012169]">
                  <svg viewBox="0 0 60 30" className="w-full h-full">
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                  </svg>
                </span>
                <span className="font-mono">EN</span>
              </>
            )}
            <Globe className="w-3.5 h-3.5 text-[#125a85] ml-0.5 opacity-70" />
          </button>

          {/* Track Order Button */}
          <button
            type="button"
            onClick={onOpenOrderTracking}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#c2ddef] bg-white hover:bg-[#edf6fb] text-[#125a85] text-xs font-semibold shadow-2xs transition-all cursor-pointer"
            title={t.trackOrder}
          >
            <Truck className="w-4 h-4 text-[#125a85]" />
            <span className="hidden md:inline">{t.trackOrder}</span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label={t.cartTitle}
            className="relative p-2.5 text-[#41474f] hover:text-[#136299] hover:bg-[#eff4ff] rounded-lg transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#136299] text-white text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Fast Order CTA */}
          <a
            href="https://lin.ee/uV13yLr"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0b1c30] hover:bg-[#136299] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#98cbff]" />
            <span>{t.orderInstant}</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-[#41474f] hover:text-[#0b1c30] rounded-lg cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e2e8f0] bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs text-[#717880]">{t.selectLanguage}:</span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  onSetLanguage('th');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
                  lang === 'th' ? 'bg-[#125a85] text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <span>🇹🇭</span>
                <span>ไทย</span>
              </button>
              <button
                onClick={() => {
                  onSetLanguage('en');
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
                  lang === 'en' ? 'bg-[#125a85] text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <span>🇬🇧</span>
                <span>English</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#41474f] hover:bg-[#eff4ff] hover:text-[#136299]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 space-y-2">
            <button
              type="button"
              onClick={() => {
                onOpenOrderTracking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-[#125a85] bg-[#edf6fb] border border-[#c2ddef] flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <Truck className="w-4 h-4" />
              <span>{t.trackOrder}</span>
            </button>

            <a
              href="https://lin.ee/uV13yLr"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 text-center text-sm font-semibold text-white bg-[#0b1c30] hover:bg-[#136299] rounded-lg shadow"
            >
              {t.orderInstant}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
