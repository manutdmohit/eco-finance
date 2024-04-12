import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ToastContainer, toast } from 'react-toastify';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import type { Metadata } from 'next';
import { Questrial, Open_Sans, Poppins } from 'next/font/google';
import './globals.css';

import BootStrapClient from './components/BootstrapClient';
import TopBar from './components/Top/top';
import Wrapper from './components/Wrapper/wrapper';
import { Loan } from './components/Loan/Loan';
import Footer from './components/Footer/Footer';
import Processes from './components/Processes/Processes';
import WhatsappButton from './components/Whatsapp/WhatsappButton';
import Header from './components/Header/Header';

const barlow = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eco Finance and Home Loans - Invest With Confidence',
  description:
    'Eco Finance is a leading provider of home loans and investment opportunities. Invest with confidence and explore our range of financial services.',
  keywords:
    'home loans, investment opportunities, finance, mortgages, real estate',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': 'https://www.ecofinanceandhomeloans.com.au',
      es: 'https://es.ecofinanceandhomeloans.com.au',
    },
  },
  openGraph: {
    title: 'Eco Finance and Home Loans - Invest With Confidence',
    description:
      'Eco Finance is a leading provider of home loans and investment opportunities. Invest with confidence and explore our range of financial services.',
    url: 'https://www.ecofinanceandhomeloans.com.au',
    siteName: 'Eco Finance and Home Loans',
    images: [
      {
        url: 'https://www.ecofinanceandhomeloans.com.au/_next/image?url=%2Fassets%2Feco-removed.png&w=640&q=75',
        width: 1200,
        height: 630,
        alt: 'Eco Finance and Home Loans',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Header />
        {/* <TopBar />
        <Wrapper />
        <Footer /> */}

        {children}

        <Footer />

        <WhatsappButton />

        <BootStrapClient />
      </body>
    </html>
  );
}
