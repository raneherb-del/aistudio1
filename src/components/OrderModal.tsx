import React, { useState } from 'react';
import {
  Language,
  TRANSLATIONS,
  PROMOTION_PACKAGES_DATA,
  PromotionPackageLocalized
} from '../data/translations';
import {
  X,
  CheckCircle2,
  Truck,
  ShieldCheck,
  CreditCard,
  Banknote,
  Printer,
  ChevronRight,
  Package,
  ExternalLink
} from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  defaultPackageId?: string;
  onTrackOrder?: (orderId: string) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  lang,
  defaultPackageId,
  onTrackOrder
}) => {
  const [selectedPackId, setSelectedPackId] = useState<string>(
    defaultPackageId || 'pack-2'
  );
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'transfer'>('cod');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderReference, setOrderReference] = useState('');
  const [assignedTrackingNumber, setAssignedTrackingNumber] = useState('');

  if (!isOpen) return null;

  const t = TRANSLATIONS[lang].orderModal;
  const packages = PROMOTION_PACKAGES_DATA[lang];

  const currentPackage =
    packages.find((p) => p.id === selectedPackId) || packages[1];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !address.trim()) {
      alert(t.alertMissing);
      return;
    }

    setIsSubmitting(true);
    let ref = `RH-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: {
            name: customerName,
            phone,
            address,
            province,
            postalCode,
            note
          },
          items: [
            {
              packageId: currentPackage.id,
              packageName: currentPackage.name,
              quantity: currentPackage.quantity,
              price: currentPackage.price
            }
          ],
          totalPrice: currentPackage.price,
          paymentMethod
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.order?.id) {
          ref = data.order.id;
        }
        if (data.order?.trackingNumber) {
          setAssignedTrackingNumber(data.order.trackingNumber);
        }
      }
    } catch {
      // Offline fallback
    } finally {
      setOrderReference(ref);
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-[#dce9ff] shadow-2xl relative my-8 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0b1c30] to-[#136299] text-white p-6 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-mono text-[#98cbff] mb-1">
            <Package className="w-4 h-4" />
            <span>{t.directCheckout}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display">
            {isSubmitted ? t.titleSuccess : t.titleForm}
          </h3>
          <p className="text-xs text-slate-200 mt-1">
            {isSubmitted ? t.subtitleSuccess : t.subtitleForm}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            /* Order Confirmation Slip */
            <div className="space-y-6">
              <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-4 text-emerald-900">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-base">{t.thankYou}</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    {t.orderCode} <strong className="font-mono text-emerald-900 text-sm">{orderReference}</strong>
                  </p>
                  {assignedTrackingNumber && (
                    <p className="text-xs text-slate-600 mt-0.5">
                      <span>เลขพัสดุ: </span>
                      <strong className="font-mono font-bold text-[#125a85]">{assignedTrackingNumber}</strong>
                    </p>
                  )}
                </div>
              </div>

              {/* Receipt Breakdown */}
              <div className="bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl p-4 space-y-3 text-xs sm:text-sm text-[#0b1c30]">
                <div className="flex justify-between items-center pb-2 border-b border-[#e2e8f0]">
                  <span className="font-semibold text-slate-600">{t.productItem}</span>
                  <span className="font-bold">{currentPackage.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{t.quantity}</span>
                  <span className="font-mono font-bold">{currentPackage.quantity} (6g)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{t.paymentLabel}</span>
                  <span className="font-semibold text-[#136299]">
                    {paymentMethod === 'cod' ? t.codText : t.transferText}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{t.shippingExpress}</span>
                  <span className="text-emerald-600 font-bold">{t.freeZero}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#e2e8f0] text-base">
                  <span className="font-bold">{t.totalToPay}</span>
                  <span className="font-mono font-extrabold text-[#136299] text-xl">
                    ฿{currentPackage.price}
                  </span>
                </div>
              </div>

              {/* Shipping Address Summary */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-[#41474f] space-y-1">
                <p className="font-semibold text-[#0b1c30]">{t.shippingAddress}</p>
                <p><strong>{t.recipient}</strong> {customerName} ({phone})</p>
                <p><strong>{t.address}</strong> {address} {province} {postalCode}</p>
                {note && <p><strong>{t.note}</strong> {note}</p>}
                <p className="text-emerald-700 pt-1 flex items-center gap-1 font-medium">
                  <Truck className="w-3.5 h-3.5" />
                  <span>{t.etaText}</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-3.5 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>{t.printSlip}</span>
                  </button>

                  {onTrackOrder && (
                    <button
                      type="button"
                      onClick={() => {
                        onTrackOrder(orderReference);
                        handleResetAndClose();
                      }}
                      className="px-3.5 py-2 rounded-lg bg-[#edf6fb] border border-[#c2ddef] text-[#125a85] text-xs font-semibold hover:bg-[#dcebf6] transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <Truck className="w-4 h-4" />
                      <span>{lang === 'th' ? 'ติดตามพัสดุนี้' : 'Track Package'}</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://lin.ee/uV13yLr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span>{t.lineNotify}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-5 py-2 rounded-lg bg-[#0b1c30] hover:bg-[#136299] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {t.finishBtn}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Order Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Package Selector */}
              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-2">
                  {t.step1}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {packages.map((pkg) => (
                    <button
                      type="button"
                      key={pkg.id}
                      onClick={() => setSelectedPackId(pkg.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedPackId === pkg.id
                          ? 'border-[#136299] bg-[#eff4ff] ring-2 ring-[#5b9bd5]/20 shadow-xs'
                          : 'border-[#e2e8f0] hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="text-xs font-bold text-[#0b1c30] truncate">
                        {pkg.name}
                      </div>
                      <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="text-base font-extrabold text-[#136299] font-mono">
                          ฿{pkg.price}
                        </span>
                        <span className="text-[10px] text-slate-400 line-through font-mono">
                          ฿{pkg.originalPrice}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer Contact */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-[#0b1c30]">
                  {t.step2}
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={t.recipientPlaceholder}
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#e2e8f0] focus:border-[#136299] focus:ring-2 focus:ring-[#5b9bd5]/20 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder={t.phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#e2e8f0] focus:border-[#136299] focus:ring-2 focus:ring-[#5b9bd5]/20 outline-none font-mono"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    required
                    rows={2}
                    placeholder={t.addressPlaceholder}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#e2e8f0] focus:border-[#136299] focus:ring-2 focus:ring-[#5b9bd5]/20 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder={t.provincePlaceholder}
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#e2e8f0] focus:border-[#136299] outline-none"
                  />
                  <input
                    type="text"
                    placeholder={t.postalPlaceholder}
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#e2e8f0] focus:border-[#136299] outline-none font-mono"
                  />
                </div>

                <input
                  type="text"
                  placeholder={t.notePlaceholder}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full text-xs px-3.5 py-2 rounded-lg border border-[#e2e8f0] focus:border-[#136299] outline-none text-slate-500"
                />
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-bold text-[#0b1c30]">
                  {t.step3}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-left transition-all cursor-pointer ${
                      paymentMethod === 'cod'
                        ? 'border-[#136299] bg-[#eff4ff] ring-1 ring-[#136299]'
                        : 'border-[#e2e8f0] hover:bg-slate-50'
                    }`}
                  >
                    <Banknote className="w-5 h-5 text-[#136299] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#0b1c30]">{t.codText}</p>
                      <p className="text-[10px] text-[#41474f]">{t.codDesc}</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('transfer')}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-left transition-all cursor-pointer ${
                      paymentMethod === 'transfer'
                        ? 'border-[#136299] bg-[#eff4ff] ring-1 ring-[#136299]'
                        : 'border-[#e2e8f0] hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-[#136299] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#0b1c30]">{t.promptPayTitle}</p>
                      <p className="text-[10px] text-[#41474f]">{t.promptPayDesc}</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Order Total & Submit */}
              <div className="pt-4 border-t border-[#e2e8f0] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-[#41474f]">
                    <span>{t.totalFreeShip}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-[#0b1c30] font-mono">
                      ฿{currentPackage.price}
                    </span>
                    <span className="block text-[10px] text-emerald-600 font-medium">
                      {t.saveAmount} ฿{currentPackage.savings}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#0b1c30] hover:bg-[#136299] transition-all shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{lang === 'th' ? 'กำลังบันทึกคำสั่งซื้อ...' : 'Processing Order...'}</span>
                  ) : (
                    <>
                      <span>{t.confirmOrder}</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.secureGuarantee}</span>
                  </span>
                  <span>•</span>
                  <span>{t.authGuarantee}</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
