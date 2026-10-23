import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Truck,
  Droplets,
  PackageCheck
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  lang: Language;
  onOpenOrderModal: (packId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenOrderModal
}) => {
  const [imageLoaded, setImageLoaded] = useState(true);
  const t = TRANSLATIONS[lang].hero;

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#f8f9ff] via-white to-[#f0f4f8]">
      {/* Luminous atmospheric subtle background blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#dce9ff]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#cde9dc]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a5d6f4]/25 border border-[#a5d6f4] text-xs font-medium text-[#125a85]">
              <Sparkles className="w-3.5 h-3.5 text-[#125a85]" />
              <span className="font-semibold tracking-wide">{t.kicker}</span>
              <span className="text-[#a5d6f4]">•</span>
              <span>{t.kickerSub}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0b1c30] font-display">
                {t.brand}
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#125a85]">
                {t.headline}
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#41474f] leading-relaxed max-w-xl">
              {t.subtext}
            </p>

            {/* Feature Bullet Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#a5d6f4]/60 text-xs font-medium text-[#0b1c30] shadow-xs">
                <Droplets className="w-4 h-4 text-[#125a85]" />
                <span>{t.badgeClean}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#a5d6f4]/60 text-xs font-medium text-[#0b1c30] shadow-xs">
                <span className="text-base leading-none">📐</span>
                <span>{t.badgeSize}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#a5d6f4]/60 text-xs font-medium text-[#0b1c30] shadow-xs">
                <span className="text-base leading-none">🌿</span>
                <span>{t.badgeHerbs}</span>
              </div>
            </div>

            {/* Action Buttons (Note: 'ลองหมุนสติ๊กดู' and 'วิธีใช้งานแท่งหมุน' removed per user request) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="https://lin.ee/uV13yLr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0b1c30] hover:bg-[#125a85] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] group cursor-pointer"
              >
                <span>{t.ctaOrder}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#ingredients"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#125a85] bg-white hover:bg-[#a5d6f4]/20 border border-[#a5d6f4] rounded-xl transition-colors cursor-pointer"
              >
                <span>{t.ctaIngredients}</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#a5d6f4]/40 text-xs text-[#41474f]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#125a85] shrink-0" />
                <span>
                  {t.regLabel} <strong className="font-mono text-[#0b1c30]">G 70131/69</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#4b635a] shrink-0" />
                <span>{t.freeShipping}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Showcase Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Main Product Card */}
            <div className="relative w-full max-w-md bg-white rounded-2xl border border-[#a5d6f4] shadow-xl overflow-hidden group">
              
              {/* Product Card Visual Image from Original Attachment */}
              <div className="relative aspect-square w-full bg-[#f0f7fc] flex items-center justify-center overflow-hidden">
                {imageLoaded ? (
                  <img
                    src="/assets/aistudio/hero_showcase.jpg"
                    alt="RANE HERB Herbal Balm Stick 6g"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={() => setImageLoaded(false)}
                  />
                ) : (
                  /* Styled resilient fallback container */
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#d3e4fe] to-[#cbdbf5] flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-4xl mb-3">🌿</span>
                    <h3 className="text-2xl font-bold text-[#0b1c30]">RANE HERB</h3>
                    <p className="text-sm text-[#136299] mt-1">Herbal Balm Stick 6g</p>
                    <p className="text-xs text-[#41474f] mt-4">1 pc ฿89 • 2 pcs ฿169</p>
                  </div>
                )}

                {/* Floating Pocket Tag (Elegant Non-intrusive badge) */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#125a85] border border-[#a5d6f4] shadow-sm flex items-center gap-1.5">
                  <PackageCheck className="w-3.5 h-3.5 text-[#125a85]" />
                  <span>{t.pocketSize}</span>
                </div>
              </div>

              {/* Card Footer Banner */}
              <div className="px-5 py-3 bg-[#f8f9ff] border-t border-[#e2e8f0] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#136299]">
                  {lang === 'th' ? '1 แท่ง 89.- • 2 แท่ง พิเศษ 169.-' : '1 pc ฿89 • 2 pcs ฿169'}
                </span>
                <span className="font-mono text-[#4b635a] bg-[#cde9dc]/60 px-2 py-0.5 rounded font-medium">6g Pocket Size</span>
              </div>

            </div>

            {/* Three Metrics Bar below the card */}
            <div className="w-full max-w-md grid grid-cols-3 gap-2 mt-4">
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-3 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-bold text-[#0b1c30] font-mono tabular-nums">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-[#41474f] mt-0.5">
                  {t.metricNatural}
                </div>
              </div>

              <div className="bg-white border border-[#e2e8f0] rounded-xl p-3 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-bold text-[#136299] font-mono tabular-nums">
                  90%
                </div>
                <div className="text-[11px] sm:text-xs text-[#41474f] mt-0.5">
                  {t.metricNonGreasy}
                </div>
              </div>

              <div className="bg-white border border-[#e2e8f0] rounded-xl p-3 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-bold text-[#4b635a] font-mono tabular-nums">
                  6g
                </div>
                <div className="text-[11px] sm:text-xs text-[#41474f] mt-0.5">
                  {t.metricTravel}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
