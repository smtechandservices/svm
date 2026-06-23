import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientInit from '@/components/ClientInit';
import WhatsAppButton from '@/components/WhatsAppButton';

const dmSans = DM_Sans({
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
    default: 'SVM Projects and Consulting | IT Infrastructure & Managed Services',
    template: '%s | SVM',
  },
  description:
    'SVM Projects and Consulting empowers businesses with innovative IT infrastructure, network design, cybersecurity, cloud solutions, and SAP services. Expert consulting for modern enterprises.',
  openGraph: {
    title: 'SVM Projects and Consulting | IT Infrastructure & Managed Services',
    description:
      'Empowering businesses with innovative IT infrastructure, network design, cybersecurity, cloud solutions, and SAP services.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SVM Projects and Consulting | IT Infrastructure & Managed Services',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-slate-body font-body leading-relaxed overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        <ClientInit />
        <WhatsAppButton />
      </body>
    </html>
  );
}
