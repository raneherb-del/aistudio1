import React, { useState } from 'react';
import { Language, TRANSLATIONS, HERB_ITEMS_DATA, HerbItemLocalized } from '../data/translations';
import {
  Droplets,
  Snowflake,
  Wind,
  Sparkles,
  Activity,
  Info,
  X
} from 'lucide-react';

interface IngredientsSectionProps {
  lang: Language;
}

export const IngredientsSection: React.FC<IngredientsSectionProps> = ({ lang }) => {
  const [selectedHerb, setSelectedHerb] = useState<HerbItemLocalized | null>(null);
  const [imageLoaded, setImageLoaded] = useState(true);
  const t = TRANSLATIONS[lang].ingredients;
  const herbs = HERB_ITEMS_DATA[lang];

  // Map icon names to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Droplet':
        return Droplets;
      case 'Snowflake':
        return Snowflake;
      case 'Wind':
        return Wind;
      case 'Sparkles':
        return Sparkles;
      case 'Activity':
      default:
        return Activity;
    }
  };

  return (
    <section id="ingredients" className="py-20 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Left Column: Authentic Product Box & Stick Image */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-2xl border border-[#a5d6f4] shadow-sm overflow-hidden flex flex-col group">
              <div className="relative aspect-square w-full overflow-hidden bg-[#e5eeff]">
                {imageLoaded ? (
                  <img
                    src="/assets/aistudio/herbs_card.png"
                    alt="RANE HERB 5 Key Botanical Extracts"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={() => setImageLoaded(false)}
                  />
                ) : (
                  <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                    <span className="text-5xl">🌿</span>
                    <h4 className="text-xl font-bold text-[#0b1c30] mt-3">RANE HERB</h4>
                    <p className="text-xs text-[#125a85] mt-1">100% Botanical Extracts</p>
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="p-5 bg-white border-t border-[#a5d6f4]/40">
                <h4 className="text-sm sm:text-base font-bold text-[#0b1c30] mb-1">
                  {t.captionTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#41474f] leading-relaxed">
                  {t.captionDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Herb Items */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#125a85] uppercase font-mono mb-2">
                {t.kicker}
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1c30] font-display">
                {t.title}
              </h2>
              <p className="text-sm sm:text-base text-[#41474f] mt-2">
                {t.subtitle}
              </p>
            </div>

            {/* Herb Cards List */}
            <div className="space-y-3.5">
              {herbs.map((herb) => {
                const IconComponent = getIcon(herb.iconName);
                return (
                  <div
                    key={herb.id}
                    onClick={() => setSelectedHerb(herb)}
                    className="p-4 sm:p-5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#a5d6f4] hover:shadow-sm transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-lg bg-[#a5d6f4]/25 text-[#125a85] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-bold text-[#0b1c30] group-hover:text-[#125a85] transition-colors">
                              {herb.number}. {herb.name} <span className="text-xs font-normal text-[#125a85]">({herb.englishName})</span>
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-[#41474f] mt-1.5 leading-relaxed">
                            {herb.description}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 flex flex-col items-end gap-2">
                        <span className="text-[11px] font-medium text-[#125a85] bg-[#a5d6f4]/25 border border-[#a5d6f4] px-2.5 py-1 rounded-md whitespace-nowrap">
                          {herb.tag}
                        </span>
                        <span className="text-[10px] text-[#717880] flex items-center gap-1 group-hover:text-[#125a85] transition-colors">
                          <Info className="w-3 h-3" />
                          <span>{t.viewProps}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      {/* Herb Detail Modal */}
      {selectedHerb && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-[#dce9ff] p-6 shadow-2xl relative space-y-4">
            <button
              onClick={() => setSelectedHerb(null)}
              className="absolute top-4 right-4 p-1.5 text-[#717880] hover:text-[#0b1c30] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#136299] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#136299] font-medium bg-[#eff4ff] px-2 py-0.5 rounded">
                  {selectedHerb.tag}
                </span>
                <h3 className="text-xl font-bold text-[#0b1c30] mt-1">
                  {selectedHerb.name} <span className="text-sm font-normal text-[#125a85]">({selectedHerb.englishName})</span>
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#41474f] pt-2 border-t border-[#e2e8f0]">
              <div className="bg-[#f8f9ff] p-3 rounded-lg border border-[#e2e8f0]/60">
                <span className="font-semibold text-[#0b1c30] block mb-1">🌱 {t.modalOrigin}</span>
                <p>{selectedHerb.details.origin}</p>
              </div>

              <div className="bg-[#f8f9ff] p-3 rounded-lg border border-[#e2e8f0]/60">
                <span className="font-semibold text-[#0b1c30] block mb-1">🔬 {t.modalProperties}</span>
                <p>{selectedHerb.details.properties}</p>
              </div>

              <div className="bg-[#f8f9ff] p-3 rounded-lg border border-[#e2e8f0]/60">
                <span className="font-semibold text-[#0b1c30] block mb-1">✨ {t.modalUsage}</span>
                <p>{selectedHerb.details.usage}</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedHerb(null)}
                className="px-5 py-2 text-xs font-semibold text-[#136299] bg-[#eff4ff] hover:bg-[#dce9ff] rounded-lg transition-colors cursor-pointer"
              >
                {t.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
