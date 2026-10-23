import React from 'react';
import { PromotionPackageLocalized, Language, TRANSLATIONS } from '../data/translations';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck } from 'lucide-react';

export interface CartItemLocalized {
  package: PromotionPackageLocalized;
  count: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  cartItems: CartItemLocalized[];
  onUpdateCount: (packId: string, delta: number) => void;
  onRemoveItem: (packId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  lang,
  cartItems,
  onUpdateCount,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang].cart;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.package.price * item.count,
    0
  );

  const totalItemsCount = cartItems.reduce(
    (sum, item) => sum + item.package.quantity * item.count,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity animate-fadeIn">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#dce9ff]">
        
        {/* Header */}
        <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between bg-[#f8f9ff]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#136299]" />
            <h3 className="font-bold text-base text-[#0b1c30]">
              {t.title} ({cartItems.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-[#0b1c30] rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Alert */}
        <div className="bg-[#eff4ff] px-5 py-2.5 border-b border-[#dce9ff] flex items-center gap-2 text-xs text-[#136299] font-medium">
          <Truck className="w-4 h-4 text-[#136299] shrink-0" />
          <span>{t.freeShippingAlert}</span>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center text-slate-400">
              <ShoppingBag className="w-12 h-12 stroke-1 mb-2 text-slate-300" />
              <p className="text-sm font-medium text-slate-600">{t.emptyTitle}</p>
              <p className="text-xs text-slate-400 mt-1">
                {t.emptySub}
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.package.id}
                className="p-4 rounded-xl border border-[#e2e8f0] bg-white flex flex-col gap-3 shadow-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0b1c30]">
                      {item.package.name}
                    </h4>
                    <p className="text-[11px] text-[#41474f] mt-0.5">
                      6g ({item.package.quantity} {t.unitStick})
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.package.id)}
                    className="text-slate-400 hover:text-red-500 p-1 cursor-pointer"
                    title={t.removeTooltip}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#f0f4f8]">
                  <div className="flex items-center border border-[#e2e8f0] rounded-lg bg-slate-50">
                    <button
                      onClick={() => onUpdateCount(item.package.id, -1)}
                      className="p-1.5 text-slate-600 hover:text-[#0b1c30] cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold font-mono text-[#0b1c30]">
                      {item.count}
                    </span>
                    <button
                      onClick={() => onUpdateCount(item.package.id, 1)}
                      className="p-1.5 text-slate-600 hover:text-[#0b1c30] cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="font-mono font-extrabold text-[#0b1c30] text-sm">
                      ฿{item.package.price * item.count}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#e2e8f0] bg-[#f8f9ff] space-y-4">
            <div className="space-y-1.5 text-xs text-[#41474f]">
              <div className="flex justify-between">
                <span>{t.totalCount}</span>
                <span className="font-mono font-bold text-[#0b1c30]">
                  {totalItemsCount} {t.unitStick}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{t.shippingFee}</span>
                <span className="font-bold text-emerald-600">{t.shippingFree}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-[#e2e8f0] text-sm sm:text-base">
                <span className="font-bold text-[#0b1c30]">{t.grandTotal}</span>
                <span className="font-extrabold text-xl text-[#136299] font-mono">
                  ฿{totalAmount}
                </span>
              </div>
            </div>

            <a
              href="https://lin.ee/uV13yLr"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#0b1c30] hover:bg-[#136299] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.checkoutLine}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
