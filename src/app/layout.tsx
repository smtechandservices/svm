import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientInit from '@/components/ClientInit';
import WhatsAppButton from '@/components/WhatsAppButton';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700', '800'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'SVM Projects and Consulting',
    template: '%s | SVM Projects and Consulting',
  },
  description:
    'Empowering businesses with innovative IT infrastructure, security, networking, cloud, and SAP solutions. Professional IT consulting and managed services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8FAFC] text-slate-500 font-body leading-relaxed overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        <ClientInit />
        <WhatsAppButton />
      </body>
    </html>
  );
}
