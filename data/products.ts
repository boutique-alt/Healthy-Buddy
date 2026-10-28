import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'hb-alkaline-device',
    name: 'Healthy Buddy AquaLife+ H2 Magnetic Alkaline Water Device',
    category: 'water',
    categoryLabel: 'Flagship Alkaline Device',
    price: 13999, // MRP Price ₹13,999/-
    originalPrice: 13999,
    weightOrUnit: '11-Inch Device + Testing Kit + 1 Year Warranty',
    description: "India's first non-electrical H2 Magnetic Alkaline Water Device. Engineered with 3 natural mineral stones and 7 therapeutic metals (pure copper chalice funnel, 92.5% pure silver, 304 medical-grade steel), infusing water with 72+ trace minerals (Zinc, Magnesium, Calcium), pH 9.5+, and antioxidant ORP -500 to -800 mV. Tested capacity of 60,000 glasses with 12 months warranty.",
    benefits: [
      'Capacity: 60,000 Glasses of Mineral Alkaline Water',
      'pH 9.5+ Alkaline Water & Molecular Hydrogen +700 PPB',
      'Antioxidant ORP Level -500 to -800 mV',
      'Pure Copper Funnel + 92.5% Pure Silver + 304 Medical Steel',
      'Infuses 72+ Essential Trace Minerals (Zn, Mg, Ca)',
      '12 Months Official Warranty • Zero Electricity & Zero Maintenance'
    ],
    imageUrl: '/images/product_copper_device.png',
    featured: true,
    inStock: true
  }
];

export const CATEGORIES = [
  { id: 'ALL', label: 'All Products' },
  { id: 'water', label: '💧 Flagship Alkaline Device' },
];

export const BRAND_INFO = {
  name: 'Healthy Buddy',
  tagline: 'Hope • Health • Happiness',
  subtagline: 'Walking The Journey Together',
  company: 'Ad Herbalnest Private Limited / Healthy Buddy Wellness',
  address: 'Sonipat, Haryana - 131101, India',
  phoneDisplay: '+91 98300 22991',
  whatsappNumber: '919830022991',
  contactPerson: 'Healthy Buddy Support',
  email: 'info@healthybuddy.co.in',
  website: 'www.healthybuddy.co.in',
  socialLinks: {
    facebook: 'https://www.facebook.com/share/1GWsY5m3RM/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/adherbalnest?igsh=amFlcXJxb2J1bW80',
    youtube: 'https://youtube.com/@herbalnest?si=HsbrY5u0oyoD-2sZ',
  },
};
