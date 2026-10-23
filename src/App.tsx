/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { IngredientsSection } from './components/IngredientsSection';
import { PromotionsSection } from './components/PromotionsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { OrderModal } from './components/OrderModal';
import { CartDrawer, CartItemLocalized } from './components/CartDrawer';
import { LanguageSelectModal } from './components/LanguageSelectModal';
import { OrderTrackingModal } from './components/OrderTrackingModal';
import {
  Language,
  PROMOTION_PACKAGES_DATA,
  PromotionPackageLocalized
} from './data/translations';

interface StoredCartItem {
  packageId: string;
  count: number;
}

export default function App() {
  // Current active language (defaults to 'th')
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('rane_herb_lang') as Language;
    return saved === 'en' || saved === 'th' ? saved : 'th';
  });

  // Language selection popup modal: opens immediately on page entry
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(true);

  // Cart & Order state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPackId, setSelectedPackId] = useState<string>('pack-2');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Customer Order Tracking state
  const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(false);
  const [trackingInitialQuery, setTrackingInitialQuery] = useState('');

  // Store package IDs so cart content dynamically mirrors the chosen language
  const [rawCartItems, setRawCartItems] = useState<StoredCartItem[]>([
    { packageId: 'pack-2', count: 1 }
  ]);

  // Handle language selection from the popup
  const handleSelectLanguage = (selectedLang: Language) => {
    setLang(selectedLang);
    localStorage.setItem('rane_herb_lang', selectedLang);
    sessionStorage.setItem('rane_herb_lang_selected', 'true');
    setIsLanguageModalOpen(false);
  };

  const handleOpenOrderModal = (packId?: string) => {
    if (packId) {
      setSelectedPackId(packId);
    }
    setIsOrderModalOpen(true);
  };

  const handleOpenOrderTracking = (query?: string) => {
    setTrackingInitialQuery(query || '');
    setIsOrderTrackingOpen(true);
  };

  const handleAddToCart = (pkg: PromotionPackageLocalized) => {
    setRawCartItems((prev) => {
      const existing = prev.find((item) => item.packageId === pkg.id);
      if (existing) {
        return prev.map((item) =>
          item.packageId === pkg.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { packageId: pkg.id, count: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCount = (packId: string, delta: number) => {
    setRawCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.packageId === packId) {
            const newCount = item.count + delta;
            return newCount > 0 ? { ...item, count: newCount } : null;
          }
          return item;
        })
        .filter((item): item is StoredCartItem => item !== null);
    });
  };

  const handleRemoveFromCart = (packId: string) => {
    setRawCartItems((prev) => prev.filter((item) => item.packageId !== packId));
  };

  // Convert rawCartItems to localized CartItems for the current language
  const packages = PROMOTION_PACKAGES_DATA[lang];
  const localizedCartItems: CartItemLocalized[] = rawCartItems
    .map((item) => {
      const pkg = packages.find((p) => p.id === item.packageId) || packages[0];
      return pkg ? { package: pkg, count: item.count } : null;
    })
    .filter((item): item is CartItemLocalized => item !== null);

  const totalCartCount = rawCartItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] selection:bg-[#dce9ff] selection:text-[#136299]">
      {/* 1. Official Top Announcement Bar */}
      <TopBanner lang={lang} />

      {/* 2. Top Navigation Bar with Flag & Language Toggle */}
      <Navbar
        lang={lang}
        onSetLanguage={handleSelectLanguage}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
        onOpenOrderModal={handleOpenOrderModal}
        onOpenOrderTracking={() => handleOpenOrderTracking()}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* 3. Main Sections */}
      <main>
        {/* Hero Section (With "ลองหมุนสติ๊กดู" button removed) */}
        <Hero
          lang={lang}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* The Twist Revolution Section */}
        <FeaturesSection lang={lang} />

        {/* 5 Key Herbal Actives & Extraction Dossier */}
        <IngredientsSection lang={lang} />

        {/* Promotion Bundles & Special Offers */}
        <PromotionsSection
          lang={lang}
          onSelectPackage={(pkg) => handleOpenOrderModal(pkg.id)}
          onAddToCart={handleAddToCart}
        />

        {/* Real User Experiences & Verified Reviews */}
        <ReviewsSection lang={lang} />

        {/* Frequently Asked Questions (FAQ) */}
        <FAQSection lang={lang} />
      </main>

      {/* Clinical Herbal Footer */}
      <Footer
        lang={lang}
        onOpenOrderTracking={() => handleOpenOrderTracking()}
      />

      {/* Floating Sticky Bottom Bar for Instant Order */}
      <StickyBottomBar
        lang={lang}
        onOpenOrderModal={() => handleOpenOrderModal()}
      />

      {/* Interactive Direct Checkout Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        lang={lang}
        defaultPackageId={selectedPackId}
        onTrackOrder={(orderId) => handleOpenOrderTracking(orderId)}
      />

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        lang={lang}
        cartItems={localizedCartItems}
        onUpdateCount={handleUpdateCount}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => handleOpenOrderModal(localizedCartItems[0]?.package.id)}
      />

      {/* Language Selection Popup Modal: prompts user upon entry */}
      <LanguageSelectModal
        isOpen={isLanguageModalOpen}
        onSelectLanguage={handleSelectLanguage}
        currentLanguage={lang}
      />

      {/* Customer Order Tracking & History Portal */}
      <OrderTrackingModal
        isOpen={isOrderTrackingOpen}
        onClose={() => setIsOrderTrackingOpen(false)}
        lang={lang}
        initialQuery={trackingInitialQuery}
        onReorder={(packId) => handleOpenOrderModal(packId)}
      />
    </div>
  );
}
