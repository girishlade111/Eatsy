import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Poppins, PT_Sans } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/contexts/cart-context';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const fontPtSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'Eatsy - Delicious food delivered to your doorstep',
  description:
    'Eatsy is a modern food delivery platform that connects you with the best local restaurants.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          fontPoppins.variable,
          fontPtSans.variable
        )}
      >
        <CartProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
