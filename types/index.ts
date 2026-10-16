export interface Product {
  id: string;
  name: string;
  category: 'water' | 'powders' | 'snacks' | 'seeds_spices' | 'hampers';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  weightOrUnit: string;
  description: string;
  benefits?: string[];
  imageUrl: string;
  featured?: boolean;
  inStock?: boolean;
}

export interface CartItem extends Product {
  qty: number;
}

export interface OrderCustomerDetails {
  name: string;
  phone: string;
  address: string;
  pincode: string;
  notes?: string;
}
