import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import './globals.css';
import { CartProvider } from '../context/CartContext';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-caveat',
});

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
    <html lang="en" className={`${jakarta.variable} ${caveat.variable}`}>
      <body className="antialiased font-sans bg-white text-gray-900 selection:bg-brand-soft selection:text-brand-dark">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
