# RANE HERB - Customer Web Application & Order Management System

แผนการยกระดับเว็บไซต์สู่ระบบ **Full-Stack Web Application** สำหรับลูกค้าอย่างสมบูรณ์แบบ ขับเคลื่อนด้วย **React (Vite) + TypeScript** และ **Tailwind CSS** ในส่วนหน้าบ้าน (Customer-Facing Frontend) ผสานพลังกับ **Node.js Express API** ในส่วนหลังบ้าน พร้อมระบบค้นหาและติดตามสถานะพัสดุ/ประวัติคำสั่งซื้อ (Order Tracking & History), ระบบบันทึกคำสั่งซื้อแบบเรียลไทม์ และระบบเปิดใช้งานบนคลาวด์ผ่าน **HTTPS URL** ที่พร้อมใช้งานทันที

---

## User Review & Critical Decisions

> [!IMPORTANT]
> **การตัดสินใจสำคัญที่ได้รับการยืนยันจากผู้ใช้ (Confirmed Decisions):**
> 1. **ระบบ Node.js Backend**: รองรับครบวงจร ทั้ง RESTful API สำหรับรับคำสั่งซื้อ, คลังข้อมูลคำสั่งซื้อ (Persistent Order Store), การเช็กสถานะพัสดุ และการเชื่อมต่อส่งข้อมูลเข้า LINE Official / พิมพ์ใบเสร็จ
> 2. **ฟีเจอร์ลูกค้าหลัก**: เพิ่มหน้า/แท็บ **"ตรวจสอบสถานะคำสั่งซื้อและประวัติการสั่งซื้อ" (Order Tracking & History)** ที่ให้ลูกค้าสามารถค้นหาคำสั่งซื้อด้วยเบอร์โทรศัพท์ หรือรหัสออเดอร์ (RH-XXXXXX) พร้อม Timeline การจัดส่งแบบเรียลไทม์
> 3. **HTTPS Production URLs**: ระบบเปิดใช้งานและเข้าถึงได้ผ่าน URL ที่รองรับ HTTPS โดยอัตโนมัติ:
>    - **Development URL**: `https://ais-dev-5vvqkbnmhzx4rqyf73wirx-291732250979.asia-northeast1.run.app`
>    - **Production / Shared URL**: `https://ais-pre-5vvqkbnmhzx4rqyf73wirx-291732250979.asia-northeast1.run.app`

---

## 1. Overview & Core Concept

- **What It Does**: แปลงโฉมเว็บไซต์ให้เป็นเว็บแอปพลิเคชันลูกค้าเต็มรูปแบบ ลูกค้าสามารถเลือกดูผลิตภัณฑ์สมุนไพรบาล์มสติ๊ก, สลับภาษาไทย-อังกฤษได้อย่างอิสระ, สั่งซื้อสินค้าผ่านแบบฟอร์มหรือตะกร้าสินค้าแบบเรียลไทม์, และสามารถเข้ามาตรวจสอบสถานะคำสั่งซื้อ ติดตามเลขพัสดุ (Tracking No.) พร้อมดูประวัติการสั่งซื้อย้อนหลังได้อย่างสะดวก
- **Target Audience**: ลูกค้าทั่วไป, พนักงานออฟฟิศ, นักกีฬา, ผู้สูงอายุ และผู้ที่มีอาการปวดเมื่อยที่ต้องการซื้อซ้ำและติดตามสถานะการจัดส่ง
- **Key Value**: สั่งซื้อง่ายใน 30 วินาที ไม่ต้องสมัครสมาชิกให้ยุ่งยาก และสามารถเช็กสถานะพัสดุได้ทันทีตลอด 24 ชั่วโมง

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Storefront & Discovery**: ลูกค้าเข้ามาสัมผัสจุดเด่นบาล์มสติ๊ก, ข้อมูลสมุนไพร 5 ชนิด, โปรโมชัน (1 แท่ง 89.- / 2 แท่ง 169.- ส่งฟรี)
2. **Instant Checkout / Cart Drawer**: ลูกค้าเลือกกดสั่งซื้อ กรอกข้อมูลจัดส่ง ระบบส่งข้อมูลผ่าน Node.js API `/api/orders` และได้รับรหัสออเดอร์ทันที
3. **Customer Order Tracking Portal**: 
   - มีปุ่ม **"ติดตามสถานะคำสั่งซื้อ"** บนแถบเมนูนำทาง (Navbar) และ Floating Action บนมือถือ
   - ลูกค้ากรอกเบอร์โทรศัพท์หรือรหัสคำสั่งซื้อ (เช่น `0820094695` หรือ `RH-829103`)
   - ระบบแสดงสถานะการจัดส่ง 4 ขั้นตอน: 
     1. รับคำสั่งซื้อแล้ว (Order Placed)
     2. กำลังจัดเตรียมสินค้า (Packaging & QC)
     3. ส่งมอบให้บริษัทขนส่งแล้ว (Handed to Courier)
     4. จัดส่งสำเร็จ (Delivered)
   - แสดงเลข Tracking Number พร้อมปุ่มลิงก์เช็กพัสดุ, รายการสินค้า และปุ่มสั่งซื้อซ้ำ (Re-order) ได้ทันที

### Visual Identity & Theme
- **Aesthetic**: Scandinavian Clinical Apothecary — สะอาดตา ทันสมัย ให้ความรู้สึกผ่อนคลายและปลอดภัย
- **Color Palette**:
  - Primary Canvas: `#f8f9ff` (Soft clean porcelain)
  - Dominant Neutral: `#0b1c30` (Deep authoritative navy)
  - Therapeutic Accent: `#125a85` / `#a5d6f4` (Calibrated sky & ice blue)
  - Real-time Live Status: Emerald Green `#10b981` (สถานะจัดส่ง/ออนไลน์)
- **Typography**: `Prompt` (สำหรับภาษาไทย) + `Plus Jakarta Sans` / `Manrope` (สำหรับภาษาอังกฤษ) + `JetBrains Mono` (สำหรับเลขออเดอร์และตัวเลขราคา)
- **Mobile Responsive**: รองรับ Touch Gestures, ปุ่มกดขนาด $\ge 48\text{px}$, เมนู Drawer ลื่นไหล, Sticky Purchase Bar ล่างจอสูงไม่เกิน 15% ของหน้าจอมือถือ

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Full-Stack Architecture (Node.js Express + React Vite)**
  - *Chosen Approach*: นำ Express มารวมในไฟล์ `server.ts` เพื่อให้บริการ API endpoints (`/api/orders`, `/api/orders/track`, `/api/orders/:id`) ในขณะที่ทำหน้าที่เป็น Dev Server และ Production Server ร่วมกับ Vite middlewares
  - *Why*: ได้สถาปัตยกรรม Web Application ที่แท้จริง สามารถทดสอบ API ได้ในสภาพแวดล้อมจริง และรองรับการเก็บข้อมูลคำสั่งซื้อได้อย่างต่อเนื่อง
  - *Alternatives Considered*: Client-only mock state (ไม่สามารถค้นหาข้ามอุปกรณ์หรือจำลองระบบหลังบ้านได้จริง)

- **Decision 2: Order Persistence & Fast Lookup**
  - *Chosen Approach*: Node.js Server In-Memory & File Store พร้อม Seed ข้อมูลตัวอย่างคำสั่งซื้อสำหรับการทดสอบค้นหาทันที
  - *Why*: ทำงานได้รวดเร็วระดับมิลลิวินาที ไม่ต้องพึ่งพา external credentials และไม่ก่อให้เกิด downtime

- **Decision 3: Seamless Dual Access (Direct Buy & Cart)**
  - *Chosen Approach*: คงฟังก์ชันการสั่งซื้อผ่านฟอร์มส่งฟรีปลายทาง, การส่งข้อมูลเข้า LINE Official และระบบตะกร้าสินค้า โดยทุกออเดอร์จะบันทึกเข้าระบบอัตโนมัติ

---

## 4. Technical Architecture & Data Strategy

### System & Component Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│               CUSTOMER CLIENT (React 19 + Tailwind CSS)                 │
│                                                                        │
│  ┌───────────────┐  ┌──────────────────┐  ┌─────────────────────────┐  │
│  │ Storefront    │  │ Cart & Checkout  │  │ Order Tracking Portal   │  │
│  │ (Hero, Herbs, │  │ (Slide-over      │  │ (Search by Phone / Ref, │  │
│  │  Promotions)  │  │  COD / Transfer) │  │  Delivery Timeline)     │  │
│  └───────┬───────┘  └────────┬─────────┘  └───────────┬─────────────┘  │
│          │                   │                         │                │
└──────────┼───────────────────┼─────────────────────────┼────────────────┘
           │                   │                         │
           │ HTTP POST /orders │ HTTP GET /orders/track?q=...
           ▼                   ▼                         ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   NODE.JS EXPRESS BACKEND (server.ts)                  │
│                                                                        │
│  ┌───────────────────────┐             ┌─────────────────────────────┐ │
│  │ REST API Router       │             │ In-Memory & File Store      │ │
│  │ - POST /api/orders    ├────────────►│ (Order Records, Tracking No,│ │
│  │ - GET  /api/orders    │             │  Customer Profiles, Dates)  │ │
│  │ - GET  /api/orders/:id│             │                             │ │
│  └───────────────────────┘             └─────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### Data Schema (Order Entity)

```typescript
interface OrderRecord {
  id: string;              // e.g. "RH-728190"
  createdAt: string;       // ISO timestamp
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
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
  trackingNumber?: string; // e.g. "TH-KEX-892104"
  estimatedDeliveryDate: string;
}
```

### API Endpoints
- `POST /api/orders`: บันทึกคำสั่งซื้อใหม่และออกรหัสออเดอร์
- `GET /api/orders/track?query=:query`: ค้นหาคำสั่งซื้อด้วยเบอร์โทรศัพท์ หรือเลขคำสั่งซื้อ
- `GET /api/orders/:id`: ดึงรายละเอียดของคำสั่งซื้อตามรหัส
- `GET /api/health`: ตรวจสอบสถานะการทำงานของ Node.js Server

---

## Plan Verification & Approval
เมื่อผู้ใช้กดปุ่ม **"Proceed"** ระบบจะเริ่มดำเนินการตามขั้นตอน:
1. ปรับแต่ง `package.json` และสร้าง `server.ts` สำหรับระบบ Node.js Express API
2. สร้างคอมโพเนนต์ **OrderTrackingModal / OrderTrackingPortal** สำหรับการค้นหาและติดตามพัสดุ
3. เชื่อมต่อระบบสั่งซื้อหน้าบ้าน (OrderModal & CartDrawer) เข้ากับ Backend API อัตโนมัติ
4. ตรวจสอบการรองรับ Mobile Responsive และทดสอบการทำงานของระบบทั้งหมด
