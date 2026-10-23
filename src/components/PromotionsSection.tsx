import React from 'react';
import { Language, TRANSLATIONS, PROMOTION_PACKAGES_DATA, PromotionPackageLocalized } from '../data/translations';
import { Check, ShoppingCart, Sparkles, Truck, ShieldCheck } from 'lucide-react';

interface PromotionsSectionProps {
  lang: Language;
  onSelectPackage: (pkg: PromotionPackageLocalized) => void;
  onAddToCart: (pkg: PromotionPackageLocalized) => void;
}

export const PromotionsSection: React.FC<PromotionsSectionProps> = ({
  lang,
  onSelectPackage,
  onAddToCart
}) => {
  const t = TRANSLATIONS[lang].promotions;
  const packages = PROMOTION_PACKAGES_DATA[lang];

  return (
    <section id="promotions" className="py-20 bg-white border-t border-[#e2e8f0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-semibold tracking-wider text-[#136299] uppercase font-mono">
            {t.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1c30] font-display">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#41474f]">
            {t.subtitle}
          </p>
        </div>

        {/* Promotion Cards (2 Bundles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 items-stretch">
          {packages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between relative p-6 sm:p-8 ${
                  pkg.isPopular
                    ? 'border-[#136299] shadow-xl ring-2 ring-[#5b9bd5]/20 -translate-y-1'
                    : 'border-[#e2e8f0] shadow-sm hover:border-[#98cbff] hover:shadow-md'
                }`}
              >
                {/* Badge if Popular or Best Value */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#136299] to-[#0b1c30] text-white text-[11px] font-semibold tracking-wide py-1 px-4 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-[#98cbff]" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0b1c30]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#41474f] mt-1.5 min-h-[32px]">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 border-t border-b border-[#f0f4f8] my-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] font-mono tabular-nums">
                        ฿{pkg.price}
                      </span>
                      <span className="text-sm text-[#717880] line-through font-mono">
                        ฿{pkg.originalPrice}
                      </span>
                    </div>
                    <span className="inline-block mt-1 text-[11px] font-medium text-[#4b635a] bg-[#cde9dc]/50 px-2 py-0.5 rounded">
                      {t.saveInstant} ฿{pkg.savings}
                    </span>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#41474f] mb-6">
                    {pkg.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#136299] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="space-y-2.5 pt-4 border-t border-[#f0f4f8]">
                  <a
                    href="https://lin.ee/uV13yLr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.isPopular
                        ? 'bg-[#136299] hover:bg-[#0b1c30] text-white'
                        : 'bg-[#0b1c30] hover:bg-[#136299] text-white'
                    }`}
                  >
                    <span>{t.orderThisPack}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onAddToCart(pkg)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-[#136299] bg-[#eff4ff] hover:bg-[#dce9ff] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>{t.addToCart}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-[#eff4ff] border border-[#dce9ff] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center sm:text-left text-xs sm:text-sm text-[#0b1c30]">
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-[#136299] shrink-0" />
            <div>
              <p className="font-semibold">{t.freeExpressBanner}</p>
              <p className="text-xs text-[#41474f]">{t.freeExpressDesc}</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-[#dce9ff]" />

          <div className="flex items-center gap-3">
            <span className="text-xl">🌿</span>
            <div>
              <p className="font-semibold">{t.authBanner}</p>
              <p className="text-xs text-[#41474f]">{t.authDesc}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
