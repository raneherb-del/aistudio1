import React, { useState } from 'react';
import { X, RotateCw, CheckCircle2, Sparkles, Droplets, Shield } from 'lucide-react';

interface InteractiveTwistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderModal: () => void;
}

export const InteractiveTwistModal: React.FC<InteractiveTwistModalProps> = ({
  isOpen,
  onClose,
  onOpenOrderModal
}) => {
  const [twistLevel, setTwistLevel] = useState(25); // 0 to 100%

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-[#dce9ff] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0b1c30] to-[#136299] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#98cbff] mb-1">
            <RotateCw className="w-4 h-4" />
            <span>HOW TO USE & TWIST TECHNOLOGY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display">
            วิธีใช้งานนวัตกรรมบาล์มสติ๊ก RANE HERB
          </h3>
          <p className="text-xs text-slate-200 mt-1">
            สัมผัสมิติใหม่แห่งการดูแลความเมื่อยล้า สะอาด ไม่เลอะมือ พกพาสะดวก
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-8">
          
          {/* Interactive Virtual Stick Simulator */}
          <div className="bg-gradient-to-b from-[#f0f4f8] to-white border border-[#dce9ff] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Visual Stick Column */}
            <div className="w-32 h-64 flex flex-col items-center justify-end relative">
              
              {/* Cooling Aroma Mist Aura */}
              <div
                className="absolute top-0 w-28 h-20 bg-cyan-200/40 rounded-full blur-xl pointer-events-none transition-all duration-300"
                style={{ opacity: twistLevel > 10 ? 0.8 : 0 }}
              />

              {/* Emerging Herbal Balm Core */}
              <div
                className="w-16 bg-gradient-to-t from-[#cde9dc] via-[#a3d5be] to-[#80bd9e] rounded-t-lg transition-all duration-200 shadow-inner border border-emerald-300 flex items-center justify-center relative overflow-hidden"
                style={{ height: `${Math.max(12, twistLevel * 1.1)}px` }}
              >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] transform -skew-y-12" />
                <span className="text-[9px] font-mono text-emerald-950 font-bold opacity-80 rotate-90">
                  RANE BALM
                </span>
              </div>

              {/* Tube Body (The White/Sky Blue Container) */}
              <div className="w-20 h-32 bg-white rounded-t-sm border-2 border-[#136299] shadow-md flex flex-col justify-between items-center p-2 z-10">
                <div className="w-full flex justify-between items-center text-[7px] text-[#136299] font-bold">
                  <span>6g</span>
                  <span>❄️</span>
                </div>
                <div className="text-center my-auto">
                  <div className="text-[10px] font-extrabold text-[#0b1c30] tracking-tight">RANE</div>
                  <div className="text-[8px] text-[#136299] font-light">HERB</div>
                </div>
                <div className="w-full h-1 bg-[#dce9ff] rounded" />
              </div>

              {/* Rotating Twist Base Dial */}
              <div
                className="w-20 h-8 bg-gradient-to-b from-[#136299] to-[#0b1c30] rounded-b-md border-x-2 border-b-2 border-[#0b1c30] flex items-center justify-center text-white text-[9px] font-mono shadow-lg transition-transform cursor-pointer"
                onClick={() => setTwistLevel((prev) => (prev >= 90 ? 10 : prev + 25))}
                title="คลิกเพื่อหมุน"
              >
                <RotateCw className="w-3 h-3 text-[#98cbff] mr-1" />
                <span>DIAL</span>
              </div>

            </div>

            {/* Slider & Description */}
            <div className="flex-1 space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#136299] uppercase font-mono">
                  จำลองการหมุนเกลียว (Interactive Dial)
                </span>
                <h4 className="text-base font-bold text-[#0b1c30] mt-1">
                  หมุนขึ้นเพียง 1-2 มม. เพื่อความประหยัดและทาง่าย
                </h4>
                <p className="text-xs text-[#41474f] mt-1">
                  กลไกเกลียวคู่ Precision Twist ปรับระดับเนื้อบาล์มได้อย่างแม่นยำ ไม่หักงอ ไม่ยุบตัวลงขณะกดทาบนผิว
                </p>
              </div>

              {/* Slider Control */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-[#41474f]">
                  <span>หมุนลงสุด (เก็บ)</span>
                  <span className="font-bold text-[#136299]">{twistLevel}%</span>
                  <span>หมุนขึ้นพร้อมทา</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="85"
                  value={twistLevel}
                  onChange={(e) => setTwistLevel(Number(e.target.value))}
                  className="w-full accent-[#136299] h-2 bg-[#dce9ff] rounded-lg cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs text-[#4b635a]">
                <Sparkles className="w-4 h-4 text-[#5b9bd5]" />
                <span>เนื้อบาล์มแน่น ไม่ละลายเยิ้มในอุณหภูมิห้อง</span>
              </div>
            </div>

          </div>

          {/* 4 Steps Usage Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#136299] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h5 className="font-bold text-xs sm:text-sm text-[#0b1c30]">
                  เปิดฝาครอบออกตรงๆ
                </h5>
              </div>
              <p className="text-xs text-[#41474f] leading-relaxed">
                ดึงฝาครอบด้านบนออกตรงๆ จะพบหัวบาล์มสมุนไพรพร้อมกลิ่นอโรม่าแรกสัมผัส
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#136299] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h5 className="font-bold text-xs sm:text-sm text-[#0b1c30]">
                  หมุนเกลียวที่ฐานด้านล่าง
                </h5>
              </div>
              <p className="text-xs text-[#41474f] leading-relaxed">
                หมุนวงแหวนเกลียวด้านล่างตามเข็มนาฬิกาเพียง 1-2 มิลลิเมตร ให้เนื้อบาล์มโผล่พ้นขอบเล็กน้อย
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#136299] text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h5 className="font-bold text-xs sm:text-sm text-[#0b1c30]">
                  ป้ายนวดลงบนผิวโดยตรง
                </h5>
              </div>
              <p className="text-xs text-[#41474f] leading-relaxed">
                ทาบริเวณที่มีอาการปวดเมื่อย เช่น คอ บ่า ไหล่ ขมับ ปลายนิ้วมือสะอาดหมดจด ไม่ต้องล้างมือ
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#136299] text-white text-xs font-bold flex items-center justify-center">
                  4
                </span>
                <h5 className="font-bold text-xs sm:text-sm text-[#0b1c30]">
                  หมุนเกลียวกลับ & ปิดฝา
                </h5>
              </div>
              <p className="text-xs text-[#41474f] leading-relaxed">
                หมุนทวนเข็มนาฬิกาเพื่อนำเนื้อบาล์มกลับลงหลอด แล้วกดปิดฝาครอบให้สนิท ป้องกันกลิ่นระเหย
              </p>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#41474f]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>ผ่านการทดสอบไม่ระคายเคืองต่อผิวหนัง</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#41474f] hover:bg-slate-200 rounded-lg w-1/2 sm:w-auto"
            >
              ปิดหน้าต่าง
            </button>
            <a
              href="https://lin.ee/uV13yLr"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0b1c30] hover:bg-[#136299] rounded-lg shadow-sm w-1/2 sm:w-auto text-center"
            >
              สั่งซื้อโปรโมชั่นตอนนี้
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
