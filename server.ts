import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface OrderRecord {
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

// In-memory persistent order storage with pre-seeded sample orders for instant testing
const orders: OrderRecord[] = [
  {
    id: 'RH-891240',
    createdAt: new Date(Date.now() - 36 * 3600 * 1000).toISOString(),
    status: 'shipped',
    customer: {
      name: 'คุณพัชราภรณ์ วงศ์สวัสดิ์',
      phone: '0820094695',
      address: '39/243 ซอยนวมินทร์ 143 แขวงนวลจันทร์ เขตบึงกุ่ม',
      province: 'กรุงเทพมหานคร',
      postalCode: '10230',
      note: 'วางไว้ที่ป้อม รปภ. ได้เลยค่ะ'
    },
    items: [
      {
        packageId: 'pack-2',
        packageName: '2 แท่ง (ชุดสุดคุ้มยอดนิยม 🔥)',
        quantity: 2,
        price: 169
      }
    ],
    totalPrice: 169,
    paymentMethod: 'cod',
    trackingNumber: 'KEX-TH-99201488',
    carrier: 'Kerry Express / KEX',
    estimatedDeliveryDate: new Date(Date.now() + 24 * 3600 * 1000).toLocaleDateString('th-TH')
  },
  {
    id: 'RH-552190',
    createdAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    status: 'delivered',
    customer: {
      name: 'คุณณัฐพล เกียรติสกุล',
      phone: '0812345678',
      address: '88/12 ถนนสุขุมวิท 55 แขวงคลองตันเหนือ เขตวัฒนา',
      province: 'กรุงเทพมหานคร',
      postalCode: '10110',
      note: 'โทรแจ้งก่อนส่ง'
    },
    items: [
      {
        packageId: 'pack-1',
        packageName: '1 แท่ง (ทดลองใช้)',
        quantity: 1,
        price: 89
      }
    ],
    totalPrice: 89,
    paymentMethod: 'cod',
    trackingNumber: 'EMS-TH-82019401',
    carrier: 'Thailand Post EMS',
    estimatedDeliveryDate: new Date(Date.now() - 2 * 24 * 3600 * 1000).toLocaleDateString('th-TH')
  }
];

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // 1. Health check endpoint
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({
      status: 'ok',
      service: 'RANE HERB Web Application API',
      timestamp: new Date().toISOString(),
      orderCount: orders.length
    });
  });

  // 2. Create new customer order
  app.post('/api/orders', (req: Request, res: Response) => {
    const { customer, items, totalPrice, paymentMethod } = req.body;

    if (!customer?.name || !customer?.phone || !customer?.address) {
      return res.status(400).json({ error: 'Missing required customer contact details' });
    }

    const orderId = `RH-${Math.floor(100000 + Math.random() * 900000)}`;
    const randomCarrierNo = Math.floor(10000000 + Math.random() * 90000000);

    const estDays = 2;
    const estDate = new Date(Date.now() + estDays * 24 * 3600 * 1000).toLocaleDateString('th-TH');

    const newOrder: OrderRecord = {
      id: orderId,
      createdAt: new Date().toISOString(),
      status: 'processing',
      customer: {
        name: customer.name.trim(),
        phone: customer.phone.replace(/[^0-9]/g, ''),
        address: customer.address.trim(),
        province: (customer.province || '').trim(),
        postalCode: (customer.postalCode || '').trim(),
        note: (customer.note || '').trim()
      },
      items: items && items.length > 0 ? items : [
        {
          packageId: 'pack-2',
          packageName: '2 แท่ง (ชุดสุดคุ้มยอดนิยม 🔥)',
          quantity: 2,
          price: 169
        }
      ],
      totalPrice: Number(totalPrice) || 169,
      paymentMethod: paymentMethod === 'transfer' ? 'transfer' : 'cod',
      trackingNumber: `KEX-TH-${randomCarrierNo}`,
      carrier: 'Kerry Express / Flash Express',
      estimatedDeliveryDate: estDate
    };

    orders.unshift(newOrder);

    res.status(201).json({
      success: true,
      order: newOrder
    });
  });

  // 3. Search & Track orders by Phone Number or Order ID
  app.get('/api/orders/track', (req: Request, res: Response) => {
    const query = (req.query.q as string || '').trim().toLowerCase();

    if (!query) {
      return res.status(400).json({ error: 'Query parameter q is required' });
    }

    const cleanDigits = query.replace(/[^0-9]/g, '');

    const matched = orders.filter((o) => {
      // Search by Order ID (e.g. "RH-891240" or "891240")
      if (o.id.toLowerCase().includes(query)) return true;
      if (query.length >= 4 && o.id.includes(query)) return true;

      // Search by Phone Number digits (e.g. "0820094695" or "082-009-4695")
      if (cleanDigits.length >= 8 && o.customer.phone.includes(cleanDigits)) {
        return true;
      }

      // Search by Customer Name
      if (o.customer.name.toLowerCase().includes(query)) return true;

      // Search by Carrier Tracking Number
      if (o.trackingNumber.toLowerCase().includes(query)) return true;

      return false;
    });

    res.json({
      query,
      count: matched.length,
      orders: matched
    });
  });

  // 4. Get specific order by ID
  app.get('/api/orders/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const order = orders.find((o) => o.id.toLowerCase() === id.toLowerCase());

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  });

  // 5. Get recent orders (for live social proof and counter)
  app.get('/api/orders', (req: Request, res: Response) => {
    // Return sanitized recent orders
    const publicList = orders.slice(0, 10).map((o) => ({
      id: o.id,
      createdAt: o.createdAt,
      status: o.status,
      customerName: o.customer.name.charAt(0) + '***' + o.customer.name.slice(-1),
      province: o.customer.province,
      itemCount: o.items.reduce((s, i) => s + i.quantity, 0),
      totalPrice: o.totalPrice
    }));

    res.json(publicList);
  });

  // Setup Vite in development or serve static in production
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`[RANE HERB Web Application] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
