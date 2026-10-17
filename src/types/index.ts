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
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
