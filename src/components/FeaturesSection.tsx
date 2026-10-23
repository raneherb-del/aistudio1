import React, { useState } from 'react';
import {
  RotateCcw,
  Sparkles,
  Droplets,
  CheckCircle2,
  Minimize,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Language, TRANSLATIONS, COMPARISONS_DATA } from '../data/translations';

interface FeaturesSectionProps {
  lang: Language;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang }) => {
  const [showComparison, setShowComparison] = useState(false);
  const t = TRANSLATIONS[lang].features;
  const comparisons = COMPARISONS_DATA[lang];

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    twist: RotateCcw,
    compact: Minimize,
    relaxing: Sparkles,
    texture: Droplets
  };

  return (
    <section id="features" className="py-20 bg-white border-t border-b border-[#a5d6f4]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-semibold tracking-wider text-[#125a85] uppercase font-mono">
            {t.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1c30] leading-tight font-display">
            {t.title} <br className="hidden sm:inline" />
            <span className="text-[#125a85] font-medium text-xl sm:text-2xl lg:text-3xl">{t.titleSub}</span>
          </h2>
          <p className="text-sm sm:text-base text-[#41474f] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((feat) => {
            const Icon = iconMap[feat.id] || Sparkles;
            return (
              <div
                key={feat.id}
                className="bg-white rounded-2xl border border-[#e2e8f0] p-6 flex flex-col justify-between hover:border-[#a5d6f4] hover:shadow-md transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#a5d6f4]/25 text-[#125a85] flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0b1c30] group-hover:text-[#125a85] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#41474f] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#f0f4f8] flex items-center gap-1.5 text-xs font-medium text-[#125a85]">
                  <CheckCircle2 className="w-4 h-4 text-[#125a85]" />
                  <span>{feat.checkText}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Comparison Expander */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#125a85] bg-[#a5d6f4]/20 hover:bg-[#a5d6f4]/35 border border-[#a5d6f4] rounded-lg transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>{t.compareButton}</span>
            {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {showComparison && (
          <div className="mt-6 max-w-4xl mx-auto bg-[#f8f9ff] border border-[#dce9ff] rounded-2xl overflow-hidden shadow-sm transition-all animate-fadeIn">
            <div className="p-4 bg-[#eff4ff] border-b border-[#dce9ff] text-center">
              <h4 className="text-sm font-bold text-[#0b1c30]">
                {t.compareTitle}
              </h4>
            </div>
            <div className="divide-y divide-[#e2e8f0]">
              {comparisons.map((comp, idx) => (
                <div key={idx} className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-3 text-xs sm:text-sm">
                  <div className="md:col-span-4 font-semibold text-[#0b1c30] flex items-center">
                    {comp.feature}
                  </div>
                  <div className="md:col-span-4 text-[#ba1a1a]/90 bg-red-50/50 p-3 rounded-xl border border-red-100/60">
                    <span className="block font-semibold text-red-700 text-xs mb-1">❌ {t.traditionalLabel}</span>
                    {comp.traditional}
                  </div>
                  <div className="md:col-span-4 text-[#136299] bg-[#eff4ff] p-3 rounded-xl border border-[#dce9ff]">
                    <span className="block font-semibold text-[#136299] text-xs mb-1">✅ {t.stickLabel}</span>
                    {comp.stick}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
