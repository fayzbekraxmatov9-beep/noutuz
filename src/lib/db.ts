import fs from "fs";
import path from "path";
import { Laptop, Review, Order, InstallmentApplication, ConsultationRequest } from "@/types";
import { LAPTOPS, REVIEWS } from "@/data/storeData";

export interface DatabaseSchema {
  laptops: Laptop[];
  reviews: Review[];
  orders: Order[];
  installments: InstallmentApplication[];
  consultations: ConsultationRequest[];
}

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "db.json");

function getInitialData(): DatabaseSchema {
  return {
    laptops: LAPTOPS,
    reviews: REVIEWS,
    orders: [
      {
        id: "ord-1001",
        customerName: "Jasur Oripov",
        phone: "+998 90 123 45 67",
        address: "Toshkent sh., Yunusobod 14-mavze",
        paymentType: "payme",
        items: [
          {
            laptopId: "macbook-pro-16-m3-max",
            laptopTitle: "Apple MacBook Pro 16\" (M3 Max, Space Black)",
            price: 3499,
            quantity: 1,
          },
        ],
        totalPrice: 3499,
        status: "confirmed",
        createdAt: "2026-10-18T10:30:00.000Z",
      },
    ],
    installments: [
      {
        id: "ins-2001",
        customerName: "Temur Xoliqov",
        phone: "+998 97 765 43 21",
        provider: "Uzum Nasiya",
        laptopId: "lenovo-legion-pro-7i",
        laptopTitle: "Lenovo Legion Pro 7i Gen 9",
        amount: 2450,
        months: 12,
        initialPayment: 0,
        monthlyPayment: 204,
        status: "pending",
        createdAt: "2026-10-18T14:15:00.000Z",
      },
    ],
    consultations: [
      {
        id: "con-3001",
        name: "Sardorbek",
        phone: "+998 99 888 77 66",
        category: "Dasturlash / IT",
        budget: "$1000 - $1500",
        subject: "Noutbuk tanlashda yordam",
        message: "Flutter va backend dasturlash uchun 32GB RAM'li model qidiryapman",
        status: "new",
        createdAt: "2026-10-19T09:00:00.000Z",
      },
    ],
  };
}

export function readDatabase(): DatabaseSchema {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      const initial = getInitialData();
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), "utf-8");
      return initial;
    }
    const raw = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(raw) as DatabaseSchema;
  } catch (error) {
    console.error("Database read error, restoring defaults:", error);
    return getInitialData();
  }
}

export function writeDatabase(data: DatabaseSchema): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Database write error:", error);
    throw error;
  }
}
