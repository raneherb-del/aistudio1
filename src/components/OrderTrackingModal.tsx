import React, { useState } from 'react';
import {
  X,
  Search,
  Truck,
  CheckCircle2,
  Clock,
  Package,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  RotateCcw,
  Printer,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { Language } from '../data/translations';

export interface OrderRecordClient {
  id: string;
  createdAt: string;
  status: 'confirmed' | 'processing' | 'shipped' | 'delivered';
  customer: {
    name: string;
    phone: string;
    address: string;
    province: string;
    postalCode: string;
    note?: string;
  };
  items: {
    packageId: string;
    packageName: string;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
  paymentMethod: 'cod' | 'transfer';
  trackingNumber: string;
  carrier: string;
  estimatedDeliveryDate: string;
}

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onReorder?: (packageId: string) => void;
  initialQuery?: string;
}

export const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({
  isOpen,
  onClose,
  lang,
  onReorder,
  initialQuery = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<OrderRecordClient[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen && initialQuery) {
      setSearchQuery(initialQuery);
      handleSearch(initialQuery);
    }
  }, [isOpen, initialQuery]);

  if (!isOpen) return null;

  const handleSearch = async (queryToSearch: string) => {
    const q = queryToSearch.trim();
    if (!q) return;

    setIsLoading(true);
    setErrorMessage(null);
    setHasSearched(true);

    try {
      const res = await fetch(`/api/orders/track?q=${encodeURIComponent(q)}`);
      if (!res.ok) {
        throw new Error('Search failed');
      }
      const data = await res.json();
      setOrders(data.orders || []);
    } catch {
      // Fallback in-app mock search if network offline or direct SPA mode
      setErrorMessage(
        lang === 'th'
          ? 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง'
          : 'Unable to connect to the server. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyTracking = (trackingNo: string) => {
    navigator.clipboard.writeText(trackingNo);
    setCopiedId(trackingNo);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getStatusStepIndex = (status: OrderRecordClient['status']) => {
    switch (status) {
      case 'confirmed':
        return 0;
      case 'processing':
        return 1;
      case 'shipped':
        return 2;
      case 'delivered':
        return 3;
      default:
        return 1;
    }
  };

  const stepsTh = [
    { label: 'รับคำสั่งซื้อแล้ว', desc: 'บันทึกในระบบเรียบร้อย' },
    { label: 'กำลังแพ็กสินค้า', desc: 'ตรวจสอบคุณภาพ QC' },
    { label: 'ส่งมอบให้ขนส่งแล้ว', desc: 'อยู่ระหว่างนำจ่ายพัสดุ' },
    { label: 'จัดส่งสำเร็จ', desc: 'ลูกค้าได้รับสินค้าแล้ว' }
  ];

  const stepsEn = [
    { label: 'Order Confirmed', desc: 'Recorded in system' },
    { label: 'Packaging & QC', desc: 'Quality inspection' },
    { label: 'In Transit', desc: 'Out for local delivery' },
    { label: 'Delivered', desc: 'Completed successfully' }
  ];

  const steps = lang === 'th' ? stepsTh : stepsEn;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md overflow-y-auto animate-fadeIn"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-[#a5d6f4] shadow-2xl overflow-hidden my-6 relative flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0b1c30] via-[#125a85] to-[#0b1c30] text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-[#a5d6f4] mb-1">
            <Truck className="w-4 h-4 text-[#a5d6f4]" />
            <span>RANE HERB ORDER TRACKING</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">
            {lang === 'th' ? 'ตรวจสอบสถานะและติดตามพัสดุ' : 'Order Status & Tracking Portal'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            {lang === 'th'
              ? 'กรอกเบอร์โทรศัพท์ที่ใช้สั่งซื้อ หรือรหัสคำสั่งซื้อเพื่อเช็กสถานะการจัดส่ง'
              : 'Enter your phone number or Order Reference ID to check live shipping status.'}
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#e2e8f0] bg-[#f8f9ff] shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(searchQuery);
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"
          >
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={
                  lang === 'th'
                    ? 'กรอกเบอร์โทรศัพท์ (เช่น 0820094695) หรือรหัส RH-XXXXXX'
                    : 'Search phone number (e.g. 0820094695) or Order ID...'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white text-xs sm:text-sm rounded-xl border border-[#c2ddef] focus:border-[#125a85] focus:ring-2 focus:ring-[#a5d6f4]/40 outline-none transition-all shadow-xs"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !searchQuery.trim()}
              className="px-6 py-2.5 sm:py-3 bg-[#0b1c30] hover:bg-[#125a85] text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-[0.98] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{lang === 'th' ? 'กำลังค้นหา...' : 'Searching...'}</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>{lang === 'th' ? 'ค้นหาคำสั่งซื้อ' : 'Track Order'}</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Search Chips */}
          <div className="mt-3 flex items-center gap-2 flex-wrap text-xs text-[#717880]">
            <span className="text-[11px] font-medium">{lang === 'th' ? 'ค้นหาตัวอย่าง:' : 'Quick samples:'}</span>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('0820094695');
                handleSearch('0820094695');
              }}
              className="px-2.5 py-1 rounded-lg bg-white border border-[#c2ddef] hover:border-[#125a85] text-[#125a85] text-[11px] font-mono font-medium hover:bg-[#edf6fb] transition-colors cursor-pointer"
            >
              0820094695
            </button>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('RH-891240');
                handleSearch('RH-891240');
              }}
              className="px-2.5 py-1 rounded-lg bg-white border border-[#c2ddef] hover:border-[#125a85] text-[#125a85] text-[11px] font-mono font-medium hover:bg-[#edf6fb] transition-colors cursor-pointer"
            >
              RH-891240
            </button>
          </div>
        </div>

        {/* Search Results Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {!hasSearched ? (
            <div className="py-12 flex flex-col items-center justify-center text-center text-slate-400">
              <div className="w-16 h-16 rounded-2xl bg-[#edf6fb] text-[#125a85] flex items-center justify-center mb-3">
                <Truck className="w-8 h-8" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#0b1c30]">
                {lang === 'th' ? 'ค้นหาประวัติคำสั่งซื้อของคุณ' : 'Search your order records'}
              </h4>
              <p className="text-xs text-[#717880] max-w-sm mt-1">
                {lang === 'th'
                  ? 'ระบบจะแสดงสถานะการจัดส่ง, เลขพัสดุ และประวัติการสั่งซื้อทันที'
                  : 'Real-time delivery progress, carrier tracking number, and order receipt.'}
              </p>
            </div>
          ) : orders.length === 0 ? (
            <div className="py-10 text-center flex flex-col items-center justify-center text-slate-400">
              <Package className="w-12 h-12 stroke-1 text-slate-300 mb-2" />
              <h4 className="text-sm font-bold text-[#0b1c30]">
                {lang === 'th' ? 'ไม่พบข้อมูลคำสั่งซื้อที่ค้นหา' : 'No matching orders found'}
              </h4>
              <p className="text-xs text-[#717880] mt-1 max-w-sm">
                {lang === 'th'
                  ? 'กรุณาตรวจสอบเบอร์โทรศัพท์หรือรหัสคำสั่งซื้ออีกครั้ง หรือติดต่อแอดมินทาง LINE'
                  : 'Please verify the phone number or order code, or reach out to our team on LINE.'}
              </p>
              <a
                href="https://lin.ee/uV13yLr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 rounded-xl bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-semibold inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'th' ? 'สอบถามผ่าน LINE Official' : 'Contact Support on LINE'}</span>
              </a>
            </div>
          ) : (
            orders.map((order) => {
              const currentStep = getStatusStepIndex(order.status);
              return (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl border border-[#c2ddef] shadow-sm p-4 sm:p-6 space-y-5 transition-all hover:border-[#125a85]"
                >
                  {/* Order Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#e2e8f0]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#125a85] bg-[#edf6fb] px-2.5 py-1 rounded-lg border border-[#c2ddef]">
                          {order.id}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          {new Date(order.createdAt).toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      <p className="text-xs text-[#0b1c30] font-semibold mt-1.5">
                        {order.customer.name} ({order.customer.phone})
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === 'delivered'
                          ? 'bg-emerald-100 text-emerald-800'
                          : order.status === 'shipped'
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                        <span>{steps[currentStep].label}</span>
                      </span>
                    </div>
                  </div>

                  {/* 4-Step Visual Timeline */}
                  <div>
                    <h5 className="text-xs font-bold text-[#0b1c30] mb-3">
                      {lang === 'th' ? 'ขั้นตอนการจัดส่ง:' : 'Delivery Progress:'}
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                      {steps.map((st, idx) => {
                        const isDone = idx <= currentStep;
                        const isCurrent = idx === currentStep;
                        return (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              isCurrent
                                ? 'bg-[#edf6fb] border-[#125a85] ring-2 ring-[#a5d6f4]/30'
                                : isDone
                                ? 'bg-slate-50 border-slate-200 text-slate-700'
                                : 'bg-white border-dashed border-slate-200 text-slate-400 opacity-60'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-mono font-bold text-slate-400">
                                0{idx + 1}
                              </span>
                              {isDone ? (
                                <CheckCircle2 className={`w-4 h-4 ${isCurrent ? 'text-[#125a85]' : 'text-emerald-600'}`} />
                              ) : (
                                <Clock className="w-3.5 h-3.5 text-slate-300" />
                              )}
                            </div>
                            <p className="text-xs font-bold text-[#0b1c30] truncate">{st.label}</p>
                            <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{st.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Courier & Tracking Details Box */}
                  <div className="p-4 rounded-xl bg-[#f0f7fc] border border-[#c2ddef] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <p className="text-slate-500 text-[11px]">{lang === 'th' ? 'บริษัทขนส่ง & เลขพัสดุ:' : 'Carrier & Tracking Number:'}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-bold text-[#0b1c30]">{order.carrier}</span>
                        <span className="text-slate-300">•</span>
                        <span className="font-mono font-bold text-[#125a85]">{order.trackingNumber}</span>
                        <button
                          type="button"
                          onClick={() => handleCopyTracking(order.trackingNumber)}
                          className="p-1 hover:bg-white rounded text-slate-500 hover:text-[#125a85] transition-colors cursor-pointer"
                          title="Copy tracking number"
                        >
                          {copiedId === order.trackingNumber ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-slate-500 text-[11px]">{lang === 'th' ? 'กำหนดจัดส่งโดยประมาณ:' : 'Estimated Delivery:'}</p>
                      <p className="font-bold text-emerald-700">{order.estimatedDeliveryDate}</p>
                    </div>
                  </div>

                  {/* Destination & Ordered Items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <div>
                      <p className="font-semibold text-[#0b1c30] flex items-center gap-1.5 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#125a85]" />
                        <span>{lang === 'th' ? 'ที่อยู่จัดส่ง' : 'Delivery Address'}</span>
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {order.customer.address} {order.customer.province} {order.customer.postalCode}
                      </p>
                      {order.customer.note && (
                        <p className="text-[11px] text-slate-400 mt-1 italic">
                          {lang === 'th' ? 'หมายเหตุ: ' : 'Note: '}{order.customer.note}
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-[#0b1c30] flex items-center gap-1.5 mb-1">
                        <Package className="w-3.5 h-3.5 text-[#125a85]" />
                        <span>{lang === 'th' ? 'รายการสินค้า' : 'Ordered Items'}</span>
                      </p>
                      <div className="space-y-1">
                        {order.items.map((it, i) => (
                          <div key={i} className="flex justify-between items-center text-slate-700">
                            <span>{it.packageName}</span>
                            <span className="font-mono font-bold">฿{it.price}</span>
                          </div>
                        ))}
                        <div className="flex justify-between items-center pt-1.5 border-t border-slate-100 font-bold text-[#0b1c30]">
                          <span>{lang === 'th' ? 'ยอดชำระสุทธิ (ส่งฟรี):' : 'Total (Free Delivery):'}</span>
                          <span className="font-mono text-sm text-[#125a85]">฿{order.totalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>{lang === 'th' ? 'พิมพ์ใบเสร็จ' : 'Print Receipt'}</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {onReorder && (
                        <button
                          type="button"
                          onClick={() => {
                            onReorder(order.items[0]?.packageId || 'pack-2');
                            onClose();
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-[#edf6fb] hover:bg-[#dcebf6] text-[#125a85] text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>{lang === 'th' ? 'สั่งซื้อซ้ำ' : 'Re-order'}</span>
                        </button>
                      )}

                      <a
                        href="https://lin.ee/uV13yLr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 rounded-lg bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>LINE</span>
                      </a>
                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#f8f9ff] border-t border-slate-200 text-center text-[11px] text-slate-500 shrink-0">
          <span>{lang === 'th' ? 'ระบบอัปเดตสถานะขนส่งแบบเรียลไทม์ สอบถามเพิ่มเติมโทร ' : 'Real-time courier update. For inquiries call '}</span>
          <a href="tel:0820094695" className="font-bold text-[#125a85] underline">082-009-4695</a>
        </div>

      </div>
    </div>
  );
};
