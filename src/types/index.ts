export interface Laptop {
  id: string;
  title: string;
  brand: string;
  category: "gaming" | "ultrabook" | "office" | "creative";
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    gpu: string;
    display: string;
    battery?: string;
    weight?: string;
  };
  badge?: string;
  image: string;
  inStock: boolean;
  isPopular?: boolean;
  isNewArrival?: boolean;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  laptopBought: string;
  createdAt?: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface OrderItem {
  laptopId: string;
  laptopTitle: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  paymentType: "cash" | "payme" | "click" | "installment";
  items: OrderItem[];
  totalPrice: number;
  status: "pending" | "confirmed" | "delivered" | "cancelled";
  createdAt: string;
}

export interface InstallmentApplication {
  id: string;
  customerName: string;
  phone: string;
  provider: string; // Uzum Nasiya, Iman Pay, etc.
  laptopId?: string;
  laptopTitle?: string;
  amount: number;
  months: number;
  initialPayment: number;
  monthlyPayment: number;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

export interface ConsultationRequest {
  id: string;
  name: string;
  phone: string;
  category?: string;
  budget?: string;
  subject?: string;
  message?: string;
  status: "new" | "contacted" | "closed";
  createdAt: string;
}
