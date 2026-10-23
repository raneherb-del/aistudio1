export type Language = 'th' | 'en';

export interface HerbItemLocalized {
  id: string;
  number: string;
  name: string;
  englishName: string;
  tag: string;
  description: string;
  iconName: string;
  details: {
    origin: string;
    properties: string;
    usage: string;
  };
}

export interface PromotionPackageLocalized {
  id: string;
  name: string;
  subtitle: string;
  quantity: number;
  bonusCount?: number;
  price: number;
  originalPrice: number;
  savings: number;
  isPopular?: boolean;
  badge?: string;
  benefits: string[];
}

export interface ReviewItemLocalized {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  verifiedText: string;
  initial: string;
  colorClass: string;
  helpfulCount: number;
}

export interface FAQItemLocalized {
  id: string;
  question: string;
  answer: string;
}

export interface ComparisonItemLocalized {
  feature: string;
  traditional: string;
  stick: string;
}

export const TRANSLATIONS = {
  th: {
    topBanner: {
      promo: 'โปรโมชั่นเปิดตัวออนไลน์: จัดส่งฟรีทั่วประเทศ ทุกออเดอร์',
      regNumber: 'เลขทะเบียนยา อย.',
      regValue: 'G 70131/69',
      authentic: 'การันตีของแท้ 100% จากแบรนด์'
    },
    nav: {
      overview: 'ภาพรวม',
      features: 'คุณสมบัติ & สมุนไพร',
      promotions: 'โปรโมชั่น',
      reviews: 'รีวิวลูกค้า',
      faq: 'คำถามที่พบบ่อย',
      orderNow: 'สั่งซื้อเลย',
      orderInstant: 'สั่งซื้อทันที ส่งฟรี',
      cartTitle: 'ตะกร้าสินค้า',
      trackOrder: 'ติดตามพัสดุ',
      selectLanguage: 'เลือกภาษา'
    },
    hero: {
      kicker: 'RANE HERB STICK BALM',
      kickerSub: 'สัมผัสเย็นลึก',
      brand: 'RANE HERB',
      headline: 'ยาหม่องในรูปแบบบาล์มสติ๊ก',
      subtext: 'ใช้ง่าย บรรเทาบริเวณที่มีอาการปวดเมื่อย ละมุน เย็น สดชื่น นวัตกรรมแท่งหมุน พกพา 6 กรัม ใช้งานสะดวกทันใจ ไม่เลอะปลายนิ้วมือ',
      badgeClean: 'ไม่เลอะมือ 99%',
      badgeSize: 'กะทัดรัด 6 กรัม',
      badgeHerbs: 'สมุนไพรสกัดธรรมชาติ 5 ชนิด',
      ctaOrder: 'สั่งซื้อโปรโมชั่นพิเศษ',
      ctaIngredients: 'ดูส่วนผสมสมุนไพร',
      regLabel: 'เลขทะเบียนยา อย.',
      freeShipping: 'จัดส่งฟรีทุกคำสั่งซื้อ',
      pocketSize: '6g Pocket Size',
      coolingReady: 'สูตรเย็นสดชื่น • ทาได้ทันที',
      metricNatural: 'สมุนไพรธรรมชาติ',
      metricNonGreasy: 'ไม่เหนียวเหนอะหนะ',
      metricTravel: 'พกพาขึ้นเครื่องได้'
    },
    features: {
      kicker: 'THE TWIST REVOLUTION',
      title: 'บอกลายาหม่องแบบเดิมๆ ด้วยบาล์มสติ๊ก',
      titleSub: 'จะนวดตอนไหนก็ได้ พกพาสะดวก ใช้งานง่าย',
      description: 'เปลี่ยนประสบการณ์การดูแลสุขภาพกล้ามเนื้อให้สะอาด ทันสมัย และมีรสนิยม ด้วยบรรจุภัณฑ์สติ๊กหมุนที่ออกแบบตามหลักสรีรศาสตร์',
      items: [
        {
          id: 'twist',
          title: 'หมุนทาง่าย ไม่เลอะมือ',
          description: 'เพียงแค่เปิดฝาและหมุนเกลียว ทาลงบนผิวได้โดยตรง ปลายนิ้วสะอาดหมดจด ไม่แสบตาเมื่อต้องหยิบจับของหรือขับรถ',
          checkText: 'สะอาดขึ้น 10 เท่า'
        },
        {
          id: 'compact',
          title: 'ขนาดกะทัดรัด 6 กรัม',
          description: 'สัดส่วนออกแบบให้เพรียวบางเท่าลิปสติก ใส่กระเป๋ากางเกง กระเป๋าถือ หรือกระเป๋าแล็ปท็อปได้สบาย ไม่กินพื้นที่',
          checkText: 'พกติดตัวไปได้ทุกวัน'
        },
        {
          id: 'relaxing',
          title: 'เย็นลึก อโรม่าผ่อนคลาย',
          description: 'สูตรเย็นสกัดพิเศษจากเมนทอล ยูคาลิปตัส และการบูร กลิ่นหอมบำบัดช่วยเคลียร์สมอง บรรเทาอาการตึงเครียดสะสม',
          checkText: 'สูดดมและนวดทาในแท่งเดียว'
        },
        {
          id: 'texture',
          title: 'เนื้อบาล์มเนียน ละมุนผิว',
          description: 'เนื้อบาล์มสัมผัสเรียบเนียน เกลี่ยง่าย ซึมซาบเข้าสู่ชั้นผิวอย่างรวดเร็ว ไม่ทิ้งคราบมันเหนอะหนะติดเสื้อผ้าตัวโปรด',
          checkText: 'แห้งสบาย ไม่เลอะคราบ'
        }
      ],
      compareButton: 'เปรียบเทียบ ยาหม่องกระปุกแก้วแบบเดิม vs บาล์มสติ๊ก RANE HERB',
      compareTitle: 'ตารางเปรียบเทียบความแตกต่างด้านการใช้งาน',
      traditionalLabel: 'แบบกระปุกเดิม:',
      stickLabel: 'RANE HERB สติ๊ก:'
    },
    ingredients: {
      kicker: 'ส่วนประกอบสำคัญ',
      title: 'คัดสรรสุดยอดสมุนไพรธรรมชาติ 5 ชนิด',
      subtitle: 'สร้างสมดุลแห่งความเย็นและกลิ่นสัมผัสเพื่อคลายความเมื่อยล้าอย่างล้ำลึก',
      captionTitle: 'ศาสตร์สมุนไพรไทยร่วมสมัย',
      captionDesc: 'ผสมผสานสารสกัดบริสุทธิ์จากพืชสมุนไพรพื้นบ้านเข้ากับเทคโนโลยีบาล์มสมัยใหม่ ปราศจากสารกันเสียและสารเคมีสังเคราะห์ที่เป็นอันตราย',
      viewProps: 'ดูสรรพคุณ',
      modalOrigin: 'แหล่งที่มาและการสกัด:',
      modalProperties: 'กลไกและสารสำคัญ:',
      modalUsage: 'ประโยชน์และวิธีใช้:',
      closeModal: 'ปิดหน้าต่าง'
    },
    reviews: {
      kicker: 'USER EXPERIENCES',
      title: 'เสียงตอบรับและรีวิวจากผู้ใช้จริง',
      subtitle: 'ความประทับใจจากผู้ใช้งานจริงในหลากหลายไลฟ์สไตล์ ออฟฟิศ เดินทาง และการออกกำลังกาย',
      satisfactionScore: 'คะแนนความพึงพอใจ 4.9/5',
      userCount: 'จากผู้ใช้งานจริงมากกว่า 10,000+ ชิ้น',
      guaranteeText: 'การันตีคุณภาพและความประทับใจ ด้วยอัตราการสั่งซื้อซ้ำสูงกว่า 78%',
      writeReviewBtn: 'แบ่งปันประสบการณ์ของคุณ',
      helpful: 'เป็นประโยชน์',
      modalTitle: 'เขียนรีวิวความประทับใจ',
      modalSubtitle: 'แบ่งปันประสบการณ์การใช้ RANE HERB บาล์มสติ๊ก เพื่อเป็นประโยชน์แก่เพื่อนผู้ใช้งาน',
      formRating: 'ให้คะแนนความพึงพอใจ:',
      formName: 'ชื่อของคุณ:',
      formNamePlaceholder: 'เช่น คุณกมลวรรณ ท.',
      formRole: 'บทบาทหรืออาชีพ / ไลฟ์สไตล์:',
      formRolePlaceholder: 'เช่น พนักงานออฟฟิศ, คนขับรถ, นักวิ่ง',
      formQuote: 'ข้อความรีวิว:',
      formQuotePlaceholder: 'เล่าความรู้สึกหลังใช้งาน ความสะดวก กลิ่น หรือผลลัพธ์...',
      cancelBtn: 'ยกเลิก',
      submitReviewBtn: 'ส่งรีวิว'
    },
    faq: {
      kicker: 'FREQUENTLY ASKED QUESTIONS',
      title: 'คำถามที่พบบ่อย (FAQ)',
      subtitle: 'ข้อสงสัยเกี่ยวกับ RANE Herb บาล์มสมุนไพรแบบสติ๊ก',
      needHelp: 'ยังมีข้อสงสัยเพิ่มเติม?',
      supportTeam: 'ทีมเภสัชกรและฝ่ายบริการลูกค้ายินดีให้คำแนะนำทุกวัน',
      callBtn: 'โทรสอบถาม: 082-009-4695'
    },
    promotions: {
      kicker: 'EXCLUSIVE OFFERS & BUNDLES',
      title: 'โปรโมชั่นพิเศษเปิดตัวออนไลน์',
      subtitle: 'จัดส่งฟรีทุกคำสั่งซื้อ จัดส่งรอบด่วนทุกวัน',
      saveInstant: 'ประหยัดทันที',
      orderThisPack: 'สั่งซื้อชุดนี้ (กดเลย)',
      addToCart: 'ใส่ตะกร้าสินค้า',
      freeExpressBanner: 'จัดส่งด่วนฟรี ทุกออเดอร์',
      freeExpressDesc: 'ไม่มีขั้นต่ำ จัดส่งรอบวันต่อวัน',
      codBanner: 'ชำระเงินปลายทางได้ (COD)',
      codDesc: 'ตรวจเช็กสินค้าก่อนชำระเงิน ปลอดภัย 100%',
      authBanner: 'รับประกันของแท้จากบริษัท',
      authDesc: 'มาตรฐาน อย. เลขที่ G 70131/69'
    },
    cart: {
      title: 'ตะกร้าสินค้า',
      freeShippingAlert: 'ยินดีด้วย! คุณได้รับสิทธิ์ จัดส่งฟรีด่วน Express',
      emptyTitle: 'ยังไม่มีสินค้าในตะกร้า',
      emptySub: 'เลือกชุดโปรโมชั่นเพื่อเริ่มสั่งซื้อ',
      removeTooltip: 'ลบรายการ',
      totalCount: 'จำนวนสินค้าทั้งหมด:',
      shippingFee: 'ค่าจัดส่ง:',
      shippingFree: 'ฟรี (ทั่วประเทศ)',
      grandTotal: 'ยอดสุทธิ:',
      checkoutLine: 'สั่งซื้อทาง Line (กดเลย)',
      unitStick: 'แท่ง'
    },
    orderModal: {
      directCheckout: 'RANE HERB DIRECT CHECKOUT',
      titleForm: 'แบบฟอร์มสั่งซื้อด่วน (จัดส่งฟรี)',
      titleSuccess: 'สั่งซื้อสินค้าสำเร็จ เรียบร้อยแล้ว',
      subtitleForm: 'กรอกข้อมูลจัดส่งด้านล่าง ตรวจสอบสินค้าก่อนชำระเงินปลายทาง',
      subtitleSuccess: 'ระบบได้รับคำสั่งซื้อของคุณแล้ว เจ้าหน้าที่จะจัดส่งสินค้าทันที',
      thankYou: 'ขอบคุณสำหรับคำสั่งซื้อของคุณ!',
      orderCode: 'รหัสคำสั่งซื้อ:',
      productItem: 'รายการสินค้า:',
      quantity: 'จำนวน:',
      paymentLabel: 'วิธีชำระเงิน:',
      codText: 'เก็บเงินปลายทาง (COD)',
      transferText: 'โอนเงินชำระ',
      shippingExpress: 'ค่าจัดส่งด่วน Express:',
      freeZero: 'ฟรี (0.-)',
      totalToPay: 'ยอดสุทธิที่ต้องชำระ:',
      shippingAddress: 'ที่อยู่จัดส่ง:',
      recipient: 'ผู้รับ:',
      address: 'ที่อยู่:',
      note: 'หมายเหตุ:',
      etaText: 'คาดว่าจะได้รับสินค้าภายใน 1-2 วันทำการ',
      printSlip: 'พิมพ์ใบเสร็จ',
      lineNotify: 'แจ้งผ่าน LINE',
      finishBtn: 'เสร็จสิ้น',
      step1: '1. เลือกชุดโปรโมชั่น:',
      step2: '2. ข้อมูลการจัดส่ง:',
      recipientPlaceholder: 'ชื่อ-นามสกุล ผู้รับ *',
      phonePlaceholder: 'เบอร์โทรศัพท์ติดต่อ *',
      addressPlaceholder: 'บ้านเลขที่, หมู่, ซอย, ถนน, ตำบล/แขวง, อำเภอ/เขต *',
      provincePlaceholder: 'จังหวัด',
      postalPlaceholder: 'รหัสไปรษณีย์',
      notePlaceholder: 'หมายเหตุเพิ่มเติม (ถ้ามี)',
      step3: '3. ช่องทางการชำระเงิน:',
      codDesc: 'ชำระเงินสดกับขนส่งเมื่อรับของ (ฟรี)',
      promptPayTitle: 'โอนเงิน / PromptPay',
      promptPayDesc: 'แนบสลิปหลังยืนยันคำสั่งซื้อ',
      totalFreeShip: 'ยอดรวมสุทธิ (จัดส่งฟรี):',
      saveAmount: 'ประหยัด',
      confirmOrder: 'ยืนยันการสั่งซื้อทันที',
      secureGuarantee: 'ข้อมูลปลอดภัย 100%',
      authGuarantee: 'รับประกันของแท้จากผู้ผลิต',
      alertMissing: 'กรุณากรอกข้อมูลชื่อ เบอร์โทร และที่อยู่จัดส่งให้ครบถ้วน'
    },
    stickyBar: {
      productName: 'RANE Herb บาล์มสติ๊ก 6g',
      regBadge: 'อย. G 70131/69',
      subDesc: 'สูตรเย็น ไม่เลอะมือ • 1 แท่ง 89.- | 2 แท่ง พิเศษ 169.- จัดส่งฟรีทั่วประเทศ',
      cta: 'สั่งซื้อตอนนี้ กดเลย'
    },
    footer: {
      desc: '39/243 ซอย นวมินทร์ 143 แขวงนวลจันทร์ เขตบึงกุ่ม กรุงเทพมหานคร 10230, Bangkok, Thailand, 10230',
      readyShip: 'พร้อมจัดส่งทันทีทั่วประเทศ',
      colStandards: 'มาตรฐานและการรับรอง',
      certGmp: 'ผลิตตามมาตรฐาน GMP / ISO Certified',
      certReg: 'เลขทะเบียนยา อย. G 70131/69',
      certThai: 'ตำรับยาแผนไทยสกัดบริสุทธิ์ ปราศจากสารสเตียรอยด์',
      colWarranty: 'การรับประกันและความพึงพอใจ',
      freeShipAll: 'ส่งฟรี ทุกคำสั่งซื้อทั่วประเทศ',
      authenticBrand: 'รับประกันของแท้ 100% จากผู้ผลิต',
      paddedBox: 'บรรจุภัณฑ์กันกระแทกอย่างดี',
      colContact: 'ติดต่อฝ่ายบริการลูกค้า',
      hours: '(08:00 - 18:00 น.)',
      copyright: '© 2026 RANE Herb Co., Ltd. สงวนลิขสิทธิ์ตามกฎหมาย',
      privacy: 'นโยบายความเป็นส่วนตัว',
      terms: 'เงื่อนไขการให้บริการ'
    },
    langModal: {
      headerBadge: 'LANGUAGE PREFERENCE',
      title: 'เลือกภาษาของคุณ / Select Language',
      desc: 'กรุณาเลือกภาษาเพื่อการแสดงผลเนื้อหาที่เหมาะสมกับคุณ\nPlease select your preferred language to proceed.',
      thTitle: 'ภาษาไทย (Thai)',
      thSub: 'ใช้งานด้วยภาษาไทยเต็มรูปแบบ',
      enTitle: 'English (อังกฤษ)',
      enSub: 'International English version'
    }
  },
  en: {
    topBanner: {
      promo: 'Special Online Launch Promotion: Free Express Shipping Nationwide on All Orders',
      regNumber: 'FDA Reg. No.',
      regValue: 'G 70131/69',
      authentic: '100% Guaranteed Authentic Herbal Formula'
    },
    nav: {
      overview: 'Overview',
      features: 'Features & Herbs',
      promotions: 'Promotions',
      reviews: 'Reviews',
      faq: 'FAQ',
      orderNow: 'Order Now',
      orderInstant: 'Order Now • Free Delivery',
      cartTitle: 'Shopping Cart',
      trackOrder: 'Track Order',
      selectLanguage: 'Language'
    },
    hero: {
      kicker: 'RANE HERB STICK BALM',
      kickerSub: 'Deep Cooling Relief',
      brand: 'RANE HERB',
      headline: 'Herbal Stick Balm Innovation',
      subtext: 'Effortless topical relief for muscle aches, tension, and fatigue. Refreshing cooling aroma in an ergonomic 6g twist stick. Fast-acting and completely mess-free without greasy fingertips.',
      badgeClean: '99% Clean & Mess-Free',
      badgeSize: 'Pocket 6g Ergonomic Stick',
      badgeHerbs: '5 Pure Botanical Actives',
      ctaOrder: 'Order Special Promotion',
      ctaIngredients: 'Explore Botanical Actives',
      regLabel: 'FDA Thai Reg. No.',
      freeShipping: 'Free Nationwide Shipping',
      pocketSize: '6g Pocket Size',
      coolingReady: 'Instant Cooling • Direct Application',
      metricNatural: 'Natural Botanical Extracts',
      metricNonGreasy: 'Non-Greasy & Fast Absorbing',
      metricTravel: 'TSA Flight Friendly'
    },
    features: {
      kicker: 'THE TWIST REVOLUTION',
      title: 'Leave Messy Traditional Balms in the Past',
      titleSub: 'Instant relief anytime, anywhere with an ergonomic pocket twist stick.',
      description: 'Redefining natural pain care with clean, modern apothecary design. Engineered for busy professionals, travelers, and active lifestyles.',
      items: [
        {
          id: 'twist',
          title: 'Twist & Apply, Zero Mess',
          description: 'Simply uncapping and twisting enables direct application onto skin. Your hands stay clean—no stinging eyes while driving or working on your laptop.',
          checkText: '10x Cleaner Experience'
        },
        {
          id: 'compact',
          title: 'Compact 6g Pocket Profile',
          description: 'Sleek cylindrical geometry designed like luxury lipstick. Slips effortlessly into jeans pockets, clutches, gym pouches, or laptop cases.',
          checkText: 'Everyday Portable Companion'
        },
        {
          id: 'relaxing',
          title: 'Deep Cooling & Aromatherapy',
          description: 'Specially calibrated cooling synergy of menthol, eucalyptus, and camphor. Therapeutic aromatics invigorate clarity and dissolve accumulated tension.',
          checkText: 'Inhale & Massage in One Stick'
        },
        {
          id: 'texture',
          title: 'Silky Texture, Fabric Safe',
          description: 'Velvety herbal glide that absorbs deep into dermis and fascia quickly. Never leaves heavy grease or yellow stains on clothing.',
          checkText: 'Quick-Dry & Stain-Free'
        }
      ],
      compareButton: 'Compare: Traditional Glass Jar Balm vs. RANE HERB Stick Balm',
      compareTitle: 'Head-to-Head Usability & Clinical Comparison',
      traditionalLabel: 'Old Glass Balm Jar:',
      stickLabel: 'RANE HERB Stick:'
    },
    ingredients: {
      kicker: 'KEY BOTANICAL ACTIVES',
      title: 'Formulated with 5 Master Herbal Extracts',
      subtitle: 'Harmonizing cooling sensations and restorative aromatherapeutic benefits for deep neuromuscular relief.',
      captionTitle: 'Contemporary Herbal Apothecary',
      captionDesc: 'Harmonizing time-honored Thai herbal medicine with advanced solid balm delivery systems. Free from synthetic preservatives, artificial dyes, and harsh chemicals.',
      viewProps: 'Clinical Dossier',
      modalOrigin: 'Botanical Origin & Extraction:',
      modalProperties: 'Pharmacological Bio-Actives:',
      modalUsage: 'Therapeutic Benefits & Application:',
      closeModal: 'Close'
    },
    reviews: {
      kicker: 'USER EXPERIENCES',
      title: 'Verified Customer Feedback & Ratings',
      subtitle: 'Real everyday experiences from office workers, athletes, frequent flyers, and families.',
      satisfactionScore: 'Customer Satisfaction 4.9/5',
      userCount: 'Trusted by over 10,000+ satisfied users',
      guaranteeText: 'Proven satisfaction backed by an exceptional 78% repeat order rate.',
      writeReviewBtn: 'Share Your Experience',
      helpful: 'Helpful',
      modalTitle: 'Submit Your Review',
      modalSubtitle: 'Share your personal experience with RANE HERB stick balm to help the community.',
      formRating: 'Satisfaction Rating:',
      formName: 'Your Full Name:',
      formNamePlaceholder: 'e.g. Alex M., Sarah K.',
      formRole: 'Profession / Lifestyle:',
      formRolePlaceholder: 'e.g. Software Engineer, Marathon Runner, Driver',
      formQuote: 'Review Details:',
      formQuotePlaceholder: 'Describe how the cooling stick helped your neck, shoulders, or daily fatigue...',
      cancelBtn: 'Cancel',
      submitReviewBtn: 'Publish Review'
    },
    faq: {
      kicker: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Frequently Asked Questions (FAQ)',
      subtitle: 'Everything you need to know about RANE Herb Herbal Stick Balm.',
      needHelp: 'Have more specific questions?',
      supportTeam: 'Our apothecary specialists and customer support team are available daily.',
      callBtn: 'Direct Support: +66 82-009-4695'
    },
    promotions: {
      kicker: 'EXCLUSIVE OFFERS & BUNDLES',
      title: 'Exclusive Launch Packages & Value Sets',
      subtitle: 'Complimentary express shipping on all orders. Dispatched daily.',
      saveInstant: 'You save',
      orderThisPack: 'Order This Bundle',
      addToCart: 'Add to Cart',
      freeExpressBanner: 'Complimentary Express Delivery',
      freeExpressDesc: 'No minimum order required, dispatched within 24 hours.',
      codBanner: 'Cash on Delivery (COD) Available',
      codDesc: 'Inspect your parcel upon arrival before paying. 100% secure.',
      authBanner: 'Direct from Manufacturer',
      authDesc: 'Thai FDA Registered No. G 70131/69'
    },
    cart: {
      title: 'Your Shopping Cart',
      freeShippingAlert: 'Congratulations! You qualify for Free Express Shipping',
      emptyTitle: 'Your cart is currently empty',
      emptySub: 'Select a promotion package to start your order.',
      removeTooltip: 'Remove item',
      totalCount: 'Total Items:',
      shippingFee: 'Shipping:',
      shippingFree: 'Free (Nationwide)',
      grandTotal: 'Total Payable:',
      checkoutLine: 'Order via LINE Official (Click)',
      unitStick: 'sticks'
    },
    orderModal: {
      directCheckout: 'RANE HERB DIRECT CHECKOUT',
      titleForm: 'Express Order Form (Free Shipping)',
      titleSuccess: 'Order Placed Successfully!',
      subtitleForm: 'Provide delivery details below. Cash on delivery or bank transfer available.',
      subtitleSuccess: 'We have received your order. Our fulfillment team is preparing your package.',
      thankYou: 'Thank you for choosing RANE HERB!',
      orderCode: 'Order Reference:',
      productItem: 'Selected Package:',
      quantity: 'Quantity:',
      paymentLabel: 'Payment Method:',
      codText: 'Cash on Delivery (COD)',
      transferText: 'Bank Transfer / PromptPay',
      shippingExpress: 'Express Delivery:',
      freeZero: 'Free (0.-)',
      totalToPay: 'Total Amount Due:',
      shippingAddress: 'Shipping Destination:',
      recipient: 'Recipient:',
      address: 'Address:',
      note: 'Order Notes:',
      etaText: 'Estimated delivery within 1-2 business days',
      printSlip: 'Print Receipt',
      lineNotify: 'Confirm on LINE',
      finishBtn: 'Done',
      step1: '1. Select Promotional Bundle:',
      step2: '2. Shipping Information:',
      recipientPlaceholder: 'Recipient Full Name *',
      phonePlaceholder: 'Mobile Phone Number *',
      addressPlaceholder: 'Building, House No., Street, District, Sub-district *',
      provincePlaceholder: 'Province / State',
      postalPlaceholder: 'Postal Code',
      notePlaceholder: 'Delivery instructions (Optional)',
      step3: '3. Select Payment Method:',
      codDesc: 'Pay cash directly to courier upon delivery (Zero fee)',
      promptPayTitle: 'Bank Transfer / PromptPay QR',
      promptPayDesc: 'Attach payment slip after confirming order',
      totalFreeShip: 'Total Payable (Free Express Delivery):',
      saveAmount: 'Saved',
      confirmOrder: 'Confirm Order Now',
      secureGuarantee: '100% Secure & Confidential',
      authGuarantee: 'Genuine Brand Guaranteed',
      alertMissing: 'Please fill in the recipient name, phone number, and shipping address.'
    },
    stickyBar: {
      productName: 'RANE Herb Stick Balm 6g',
      regBadge: 'FDA G 70131/69',
      subDesc: 'Cooling, mess-free stick • 1 Stick ฿89 | 2 Sticks Special ฿169 • Free Shipping',
      cta: 'Order Now'
    },
    footer: {
      desc: '39/243 ซอย นวมินทร์ 143 แขวงนวลจันทร์ เขตบึงกุ่ม กรุงเทพมหานคร 10230, Bangkok, Thailand, 10230',
      readyShip: 'In Stock & Ready to Ship Nationwide',
      colStandards: 'Standards & Certifications',
      certGmp: 'Manufactured under GMP / ISO Certified Standards',
      certReg: 'Thai FDA Registered: G 70131/69',
      certThai: 'Pure traditional Thai herbal pharmacopoeia, steroid-free',
      colWarranty: 'Quality & Satisfaction Guarantees',
      freeShipAll: 'Complimentary shipping on all orders',
      authenticBrand: '100% Authentic direct from manufacturer',
      paddedBox: 'Protective climate-safe packaging',
      colContact: 'Customer Care & Enquiries',
      hours: '(08:00 AM - 06:00 PM ICT)',
      copyright: '© 2026 RANE Herb Co., Ltd. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    langModal: {
      headerBadge: 'LANGUAGE PREFERENCE',
      title: 'เลือกภาษาของคุณ / Select Language',
      desc: 'กรุณาเลือกภาษาเพื่อการแสดงผลเนื้อหาที่เหมาะสมกับคุณ\nPlease select your preferred language to proceed.',
      thTitle: 'ภาษาไทย (Thai)',
      thSub: 'สัมผัสประสบการณ์ภาษาไทยเต็มรูปแบบ',
      enTitle: 'English (อังกฤษ)',
      enSub: 'International English version'
    }
  }
};

export const HERB_ITEMS_DATA: Record<Language, HerbItemLocalized[]> = {
  th: [
    {
      id: 'plai',
      number: '1',
      name: 'ไพล',
      englishName: 'Plai (Zingiber cassumunar)',
      tag: 'คลายกล้ามเนื้อ',
      description: 'ราชาแห่งสมุนไพรไทยคลายปวด มีสารออกฤทธิ์ช่วยลดการอักเสบ บรรเทาอาการฟกช้ำ และอาการเคล็ดขัดยอก จากกิจกรรมประจำวัน',
      iconName: 'Droplet',
      details: {
        origin: 'สารสกัดจากเหง้าไพลธรรมชาติแท้ 100% สกัดด้วยกรรมวิธีเย็นคงคุณค่าสารเคอร์คูมินอยด์',
        properties: 'มีสารสำคัญ D (compound D) ช่วยยับยั้งกระบวนการอักเสบ บรรเทาปวดเมื่อยลึกถึงชั้นกล้ามเนื้อ',
        usage: 'ทาบริเวณกล้ามเนื้อ คอ บ่า ไหล่ หรือจุดที่มีอาการฟกช้ำ เคล็ดขัดยอก'
      }
    },
    {
      id: 'menthol',
      number: '2',
      name: 'เมนทอล',
      englishName: 'Menthol',
      tag: 'สัมผัสเย็นสดชื่น',
      description: 'มอบสัมผัสความเย็นสบายอย่างต่อเนื่อง ปลุกความกระปรี้กระเปร่า คลายความเมื่อยล้าตึงเครียดของกล้ามเนื้อได้ดี',
      iconName: 'Snowflake',
      details: {
        origin: 'ผลึกเมนทอลบริสุทธิ์จากพืชตระกูลมินต์ (Mentha arvensis)',
        properties: 'กระตุ้นตัวรับความรู้สึกเย็น (TRPM8) ทำให้หลอดเลือดคลายตัว เย็นลึกโดยไม่แสบไหม้ผิว',
        usage: 'สูดดมเพื่อแก้อาการหน้ามืด วิงเวียน หรือป้ายขมับ ต้นคอ เพื่อเพิ่มความกระปรี้กระเปร่า'
      }
    },
    {
      id: 'eucalyptus',
      number: '3',
      name: 'ยูคาลิปตัส',
      englishName: 'Eucalyptus',
      tag: 'อโรม่าโล่งสบาย',
      description: 'น้ำมันหอมระเหยบริสุทธิ์ ช่วยให้หายใจโล่ง สดชื่น ปลอดโปร่ง บรรเทาอาการวิงเวียนและคัดจมูก',
      iconName: 'Wind',
      details: {
        origin: 'สกัดจากใบยูคาลิปตัสเกรดบำบัดธรรมชาติ (Therapeutic Grade)',
        properties: 'สารซีนีโอล (Cineole) มีฤทธิ์ขยายทางเดินหายใจ ต้านแบคทีเรีย กลิ่นหอมสะอาดช่วยฟื้นฟูสมาธิ',
        usage: 'สูดดมกลิ่นอโรม่าเพื่อผ่อนคลายความเหนื่อยล้า ทาหน้าอก หรือทาใต้จมูกบางๆ'
      }
    },
    {
      id: 'borneol',
      number: '4',
      name: 'พิมเสน',
      englishName: 'Borneol',
      tag: 'กลิ่นเย็นชื่นใจ',
      description: 'เกล็ดพิมเสนแท้คุณภาพสูง ช่วยกระตุ้นระบบประสาทให้ผ่อนคลาย บรรเทาอาการหน้ามืด ตาลาย และคลายความเหนื่อยล้า',
      iconName: 'Sparkles',
      details: {
        origin: 'เกล็ดพิมเสนแท้จากพิมเสนธรรมชาติ (Dipterocarpus alatus)',
        properties: 'ช่วยกระตุ้นการไหลเวียนของชี่และโลหิต บรรเทาอาการวิงเวียนศีรษะ แน่นหน้าอก และระงับปวด',
        usage: 'ป้ายบริเวณจุดชีพจร ขมับ หลังใบหู หรือสูดดมเมื่อรู้สึกอ่อนเพลีย'
      }
    },
    {
      id: 'camphor',
      number: '5',
      name: 'การบูร และสารสกัดบำรุงผิว',
      englishName: 'Camphor',
      tag: 'กระตุ้นการหมุนเวียน',
      description: 'ผสมคุณค่าช่วยกระตุ้นการไหลเวียนโลหิต ลดความตึงเกร็ง พร้อมเนื้อไขธรรมชาติที่ช่วยเคลือบผิวให้นุ่มชุ่มชื้นไม่แห้งกร้าน',
      iconName: 'Activity',
      details: {
        origin: 'การบูรธรรมชาติสกัดจากเนื้อไม้การบูร ผสานขี้ผึ้งบริสุทธิ์ธรรมชาติ (Natural Beeswax)',
        properties: 'ช่วยเร่งการดูดซึมของสารสกัดสมุนไพรเข้าสู่ผิวอย่างอ่อนโยน พร้อมเคลือบผิวให้นุ่มลื่นไม่เป็นขุย',
        usage: 'นวดคลึงเบาๆ เป็นวงกลมบริเวณข้อต่อและเส้นเอ็นเพื่อคลายการเกร็งตัว'
      }
    }
  ],
  en: [
    {
      id: 'plai',
      number: '1',
      name: 'Plai Root',
      englishName: 'Zingiber cassumunar',
      tag: 'Muscle De-Tension',
      description: 'The prized jewel of traditional Thai herbal medicine. Clinically celebrated for active curcuminoids and compound D to soothe muscle sprains, contusions, and inflammation.',
      iconName: 'Droplet',
      details: {
        origin: '100% natural cold-extracted Plai rhizomes preserving vital curcuminoid bio-compounds.',
        properties: 'Potent Compound D acts as a natural COX-2 inhibitor, penetrating deep into tight myofascial layers.',
        usage: 'Apply directly onto neck, shoulders, upper back, lower back, or bruised muscles.'
      }
    },
    {
      id: 'menthol',
      number: '2',
      name: 'Pure Menthol',
      englishName: 'Mentha arvensis',
      tag: 'Crisp Cooling',
      description: 'Delivers an enduring, invigorating crisp cooling sensation that awakens alertness and relaxes constricted superficial tension.',
      iconName: 'Snowflake',
      details: {
        origin: 'Pure crystallized pharmaceutical menthol derived from premium steam-distilled mint leaves.',
        properties: 'Directly stimulates TRPM8 cold-sensitive thermoreceptors for soothing relief without thermal skin damage.',
        usage: 'Inhale directly or massage over temples, neck nape, and pulse points.'
      }
    },
    {
      id: 'eucalyptus',
      number: '3',
      name: 'Eucalyptus Essential Oil',
      englishName: 'Eucalyptus globulus',
      tag: 'Airway Clarity',
      description: 'Therapeutic grade essential oil that promotes clear breathing, mental rejuvenation, and dispels sensations of motion sickness and dizziness.',
      iconName: 'Wind',
      details: {
        origin: 'Steam-distilled from wild therapeutic-grade eucalyptus leaves.',
        properties: 'Rich in 1,8-cineole (eucalyptol), known to relax respiratory channels and refresh focused cognitive clarity.',
        usage: 'Inhale deeply or apply lightly beneath nostrils, over collarbone, and across wrists.'
      }
    },
    {
      id: 'borneol',
      number: '4',
      name: 'Natural Borneol',
      englishName: 'Borneol Flakes',
      tag: 'Aromatic Calm',
      description: 'Exquisite aromatic crystalline flakes revered for easing faintness, mental fatigue, and restoring micro-circulation balance.',
      iconName: 'Sparkles',
      details: {
        origin: 'Refined natural flakes from Dipterocarpus alatus and botanical sources.',
        properties: 'Enhances transdermal penetration of accompanying bio-herbs and relieves localized distress.',
        usage: 'Glide across temples, mastoid process behind ears, and pressure points.'
      }
    },
    {
      id: 'camphor',
      number: '5',
      name: 'Natural Camphor & Beeswax',
      englishName: 'Cinnamomum camphora & Beeswax',
      tag: 'Micro-Circulation',
      description: 'Promotes invigorating micro-circulation while natural non-comedogenic beeswax creates a breathable protective moisture seal.',
      iconName: 'Activity',
      details: {
        origin: 'Natural heartwood extract blended with ultra-pure hypoallergenic cosmetic-grade beeswax.',
        properties: 'Accelerates skin permeability and prevents moisture evaporation, leaving skin conditioned.',
        usage: 'Massage in circular motions over stiff tendons, joints, and muscular trigger points.'
      }
    }
  ]
};

export const PROMOTION_PACKAGES_DATA: Record<Language, PromotionPackageLocalized[]> = {
  th: [
    {
      id: 'pack-1',
      name: '1 แท่ง (ทดลองใช้)',
      subtitle: 'เหมาะสำหรับเริ่มต้นทดลองสัมผัสความเย็นสบาย',
      quantity: 1,
      price: 89,
      originalPrice: 129,
      savings: 40,
      benefits: [
        'ขนาดพกพา 6 กรัม 1 แท่ง',
        'จัดส่งฟรีทั่วประเทศ',
        'รับประกันของแท้ 100% จากแบรนด์'
      ]
    },
    {
      id: 'pack-2',
      name: '2 แท่ง (ชุดสุดคุ้มยอดนิยม 🔥)',
      subtitle: 'เฉลี่ยเพียงแท่งละ 84.5.- เหมาะพกโต๊ะทำงาน + รถ',
      quantity: 2,
      price: 169,
      originalPrice: 258,
      savings: 89,
      isPopular: true,
      badge: 'ขายดีอันดับ 1',
      benefits: [
        'ขนาดพกพา 6 กรัม 2 แท่ง',
        'เฉลี่ยเพียงแท่งละ 84.5.- (ประหยัด 89.-)',
        'จัดส่งฟรีทั่วประเทศ'
      ]
    }
  ],
  en: [
    {
      id: 'pack-1',
      name: '1 Stick (Trial Experience)',
      subtitle: 'Ideal for first-time users experiencing deep cooling comfort',
      quantity: 1,
      price: 89,
      originalPrice: 129,
      savings: 40,
      benefits: [
        'Pocket-sized 6g twist stick (1 unit)',
        'Free nationwide shipping',
        '100% Genuine manufacturer authentic guarantee'
      ]
    },
    {
      id: 'pack-2',
      name: '2 Sticks (Best Value Bundle 🔥)',
      subtitle: 'Only ฿84.5/stick — Desk + Car + Daily Bag',
      quantity: 2,
      price: 169,
      originalPrice: 258,
      savings: 89,
      isPopular: true,
      badge: '#1 Best Seller',
      benefits: [
        'Pocket-sized 6g twist stick (2 units)',
        'Only ฿84.5 per stick (Save ฿89 instantly)',
        'Free nationwide shipping'
      ]
    }
  ]
};

export const REVIEWS_DATA: Record<Language, ReviewItemLocalized[]> = {
  th: [
    {
      id: 'rev-1',
      rating: 5,
      quote: 'ติดกระเป๋าไว้ตลอด ใช้ง่าย พกพาสะดวก หยิบขึ้นมาป้ายคอบ่าตอนนั่งทำงาน ช่วยแก้อาการออฟฟิศซินโดรมได้ดีมากค่ะ',
      author: 'คุณมณฑ์วรี ส.',
      role: 'พนักงานบริษัทเอกชน',
      verifiedText: 'ซื้อซ้ำ 3 รอบ',
      initial: 'ม',
      colorClass: 'bg-sky-100 text-sky-800',
      helpfulCount: 48
    },
    {
      id: 'rev-2',
      rating: 5,
      quote: 'ทาบริเวณที่ปวดรู้สึกเย็นสดชื่นทันที ได้กลิ่นสมุนไพรสดชื่นมาก วิ่งเสร็จทาคลายกล้ามเนื้อสบายตัวสุดๆ',
      author: 'คุณธีรภัทร ว.',
      role: 'นักวิ่งมาราธอน & เทรล',
      verifiedText: 'คำสั่งซื้อที่ได้รับการยืนยัน',
      initial: 'ธ',
      colorClass: 'bg-emerald-100 text-emerald-800',
      helpfulCount: 35
    },
    {
      id: 'rev-3',
      rating: 5,
      quote: 'ไม่เลอะมือเหมือนเวลายาหม่องกระปุกมาทา ตอนขับขี่บนรถและทำงานหน้าคอมอย่างสะดวกมาก ไม่ต้องคอยหาน้ำล้างมือ',
      author: 'คุณกานดา ภ.',
      role: 'ผู้ประกอบการธุรกิจ',
      verifiedText: 'คำสั่งซื้อที่ได้รับการยืนยัน',
      initial: 'ก',
      colorClass: 'bg-blue-100 text-blue-800',
      helpfulCount: 52
    },
    {
      id: 'rev-4',
      rating: 5,
      quote: 'รู้สึกปวดเมื่อยตอนไหน ก็หมุนทานวดได้ทันที สะดวกสุดๆ คุณแม่ชอบมาก กลิ่นหอมเย็นกำลังดี ไม่ฉุนแสบจมูก',
      author: 'คุณณุชาดา พ.',
      role: 'ลูกค้าสั่งเป็นของฝากครอบครัว',
      verifiedText: 'คำสั่งซื้อที่ได้รับการยืนยัน',
      initial: 'ณ',
      colorClass: 'bg-teal-100 text-teal-800',
      helpfulCount: 29
    }
  ],
  en: [
    {
      id: 'rev-1',
      rating: 5,
      quote: 'Always in my handbag. Extremely ergonomic—I glide it across my stiff neck and shoulders during long desk sessions. Instant relief without greasy fingers touching my keyboard!',
      author: 'Monwaree S.',
      role: 'Corporate Executive',
      verifiedText: 'Repeat Purchaser (3x)',
      initial: 'M',
      colorClass: 'bg-sky-100 text-sky-800',
      helpfulCount: 48
    },
    {
      id: 'rev-2',
      rating: 5,
      quote: 'Immediate soothing cooling upon contact. Natural therapeutic scent without harsh artificial perfume. Perfect recovery stick after my 21k trail runs.',
      author: 'Teerapat W.',
      role: 'Marathon & Trail Runner',
      verifiedText: 'Verified Buyer',
      initial: 'T',
      colorClass: 'bg-emerald-100 text-emerald-800',
      helpfulCount: 35
    },
    {
      id: 'rev-3',
      rating: 5,
      quote: 'Goodbye messy ointment jars! When driving in heavy traffic or between meetings, I apply it in seconds with clean fingertips. No need to wash hands afterwards.',
      author: 'Kanda P.',
      role: 'Business Owner',
      verifiedText: 'Verified Buyer',
      initial: 'K',
      colorClass: 'bg-blue-100 text-blue-800',
      helpfulCount: 52
    },
    {
      id: 'rev-4',
      rating: 5,
      quote: 'My mother loves this gentle herbal aroma. Soothing and deep without stinging the eyes or smelling overpowering like old-fashioned medicines.',
      author: 'Nuchada P.',
      role: 'Family Gift Buyer',
      verifiedText: 'Verified Buyer',
      initial: 'N',
      colorClass: 'bg-teal-100 text-teal-800',
      helpfulCount: 29
    }
  ]
};

export const FAQS_DATA: Record<Language, FAQItemLocalized[]> = {
  th: [
    {
      id: 'faq-1',
      question: 'แท่ง 6 กรัม สามารถใช้ได้นานแค่ไหน?',
      answer: 'ด้วยเนื้อบาล์มเข้มข้นพิเศษแบบ Solid Stick ทำให้ใช้ปริมาณเพียงเล็กน้อยต่อครั้ง 1 แท่งขนาด 6 กรัม สามารถทาได้ประมาณ 150-200 ครั้ง หรือใช้งานทั่วไปเฉลี่ยได้ประมาณ 1-2 เดือน ขึ้นอยู่กับความถี่ในการใช้งานในแต่ละวัน'
    },
    {
      id: 'faq-2',
      question: 'ยาหม่องมีเลขจดแจ้ง อย. ถูกต้องหรือไม่?',
      answer: 'RANE HERB ได้รับการขึ้นทะเบียนตำรับยาแผนโบราณและใบอนุญาตจากสำนักงานคณะกรรมการอาหารและยา (อย.) อย่างถูกต้อง เลขทะเบียนยา อย. G 70131/69 ผลิตจากโรงงานมาตรฐานระดับสากล GMP / ISO จึงมั่นใจได้ในความปลอดภัย 100%'
    },
    {
      id: 'faq-3',
      question: 'ใช้ทาจุดไหนได้บ้าง และมีกลิ่นฉุนหรือไม่?',
      answer: 'สามารถทาได้หลากหลายบริเวณ เช่น ต้นคอ ท้ายทอย บ่า ไหล่ ขมับ หลังฝ่ามือ ข้อศอก หรือบริเวณที่มีอาการเคล็ดขัดยอก กลิ่นเป็นสูตรอโรม่าสมุนไพรธรรมชาติ หอมเย็นผ่อนคลาย ไม่ฉุนรุนแรง และไม่แสบตาเมื่อต้องนั่งทำงานในห้องแอร์หรือขับรถ'
    },
    {
      id: 'faq-4',
      question: 'ใช้เวลาจัดส่งกี่วัน?',
      answer: 'สำหรับกรุงเทพฯ และปริมณฑลได้รับสินค้าภายใน 1-2 วันทำการ สำหรับต่างจังหวัดได้รับภายใน 2-3 วันทำการ'
    },
    {
      id: 'faq-6',
      question: 'วิธีการเก็บรักษาตัวบาล์มสติ๊กที่ถูกต้องคืออย่างไร?',
      answer: 'ควรปิดฝาให้สนิทหลังใช้งานทุกครั้ง และเก็บไว้ในอุณหภูมิห้องปกติ หลีกเลี่ยงการวางทิ้งไว้ในรถยนต์กลางแดดจัดหรือบริเวณที่มีความร้อนสูง เพื่อรักษาโครงสร้างเนื้อบาล์มและประสิทธิภาพของสารสกัดสมุนไพร'
    }
  ],
  en: [
    {
      id: 'faq-1',
      question: 'How long does a 6g stick typically last?',
      answer: 'Thanks to the dense concentrated solid stick matrix, a minimal glide is all that is needed. One 6g stick yields approximately 150-200 applications, lasting on average 1 to 2 months depending on individual daily frequency.'
    },
    {
      id: 'faq-2',
      question: 'Is RANE HERB certified and registered with the FDA?',
      answer: 'Yes, RANE HERB is legally licensed and registered with the Thai Food and Drug Administration (FDA) under traditional herbal drug registration number G 70131/69. It is manufactured in ISO/GMP certified facilities adhering to stringent international quality controls.'
    },
    {
      id: 'faq-3',
      question: 'Where can I apply the balm stick, and does it irritate eyes?',
      answer: 'You can apply it to the nape of the neck, trapezius shoulders, temples, chest, wrists, and muscular aches. Formulated with balanced therapeutic essential oils, the aroma is soothingly crisp and non-pungent, ensuring no ocular stinging during office or driving routines.'
    },
    {
      id: 'faq-4',
      question: 'What is the shipping timeframe?',
      answer: 'Domestic orders within Bangkok metropolitan area arrive in 1-2 business days; upcountry provinces arrive within 2-3 business days with full real-time parcel tracking.'
    },
    {
      id: 'faq-6',
      question: 'What is the recommended storage guideline?',
      answer: 'Secure the cap firmly after each application. Store at ambient room temperature away from direct prolonged vehicle sunlight or high heat sources to preserve the active botanical integrity.'
    }
  ]
};

export const COMPARISONS_DATA: Record<Language, ComparisonItemLocalized[]> = {
  th: [
    {
      feature: 'ความสะอาดในการใช้งาน',
      traditional: 'ต้องใช้นิ้วควักเนื้อยาหม่อง เลอะปลายนิ้วมือ ต้องล้างมือทันที',
      stick: 'หมุนทาโดยตรงจากแท่ง ปลายนิ้วสะอาด 100% ไม่เลอะเปรอะเปื้อน'
    },
    {
      feature: 'การพกพาและการเดินทาง',
      traditional: 'กระปุกแก้วหนัก ตกแตกง่าย เสี่ยงเนื้อยาหม่องละลายหกเลอะกระเป๋า',
      stick: 'ดีไซน์เพรียวกะทัดรัด 6g เท่าลิปสติก ทนทาน พกขึ้นเครื่องบินได้สบาย'
    },
    {
      feature: 'ความรู้สึกเมื่อทาบนผิว',
      traditional: 'เนื้อสัมผัสเหนียวมัน ทิ้งคราบมันเหนอะหนะ ติดเสื้อผ้าซักออกยาก',
      stick: 'เนื้อบาล์มเนียนนุ่ม ซึมไว เคลือบผิวเบาสบาย ไม่ทิ้งคราบมันเลอะเสื้อผ้า'
    },
    {
      feature: 'กลิ่นและสัมผัสความเย็น',
      traditional: 'กลิ่นฉุนแรง แสบจมูก แสบตา หากนิ้วเผลอไปขยี้ตาจะแสบรุนแรง',
      stick: 'กลิ่นอโรม่าคัดสรร 5 สมุนไพร เย็นลึกละมุน ไม่แสบตา เหมาะกับชีวิตทำงาน'
    }
  ],
  en: [
    {
      feature: 'Application Hygiene',
      traditional: 'Requires digging fingers into the jar. Leaves greasy residue needing immediate hand washing.',
      stick: 'Direct glide stick applicator. 100% clean fingertips with zero sticky mess.'
    },
    {
      feature: 'Portability & Travel',
      traditional: 'Bulky glass jar that can shatter easily. Risk of leaking or melting inside bags.',
      stick: 'Sleek lipstick-profile 6g cylinder. Robust, lightweight, and TSA carry-on compliant.'
    },
    {
      feature: 'Skin Feel & Absorption',
      traditional: 'Heavy viscous oil film that rubs off onto expensive clothing fabrics and leaves stains.',
      stick: 'Silky micro-balm matrix. Absorbs rapidly into skin without greasy yellow stains.'
    },
    {
      feature: 'Aroma & Cooling Comfort',
      traditional: 'Harsh pungent odor that burns the nostrils and stings eyes severely.',
      stick: 'Artfully curated 5-herb aromatherapy. Deep, clean, soothing cooling suitable for modern work environments.'
    }
  ]
};
