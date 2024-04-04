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
  title: 'Eco Finance and Home Loans || Invest With Confidence',
  description: 'Invest With Confidence',
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
