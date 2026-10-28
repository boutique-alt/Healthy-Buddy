import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '../context/CartContext';

export const metadata: Metadata = {
  title: 'Healthy Buddy • Pure Water • Better Health | Hope • Health • Happiness',
  description:
    'Pure Water. Better Health. Brighter Tomorrow. Experience the restorative power of pH 9+ Alkaline Mineral Water and organic superfoods.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-white text-gray-900 selection:bg-brand-soft selection:text-brand-dark">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
