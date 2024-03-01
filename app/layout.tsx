import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import type { Metadata } from 'next';
import { Questrial } from 'next/font/google';
import './globals.css';

import BootStrapClient from './components/BootstrapClient';
import { TopBar as TopBar } from './components/Top/top';
import { Wrapper } from './components/Wrapper/Wrapper';
import { Loan } from './components/Loan/Loan';
import Footer from './components/Footer/Footer';
import Processes from './components/Processes/Processes';

const barlow = Questrial({ weight: '400', subsets: ['latin'] });

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
        {/* <TopBar />
        <Wrapper />
        <Loan />
        <Processes />
        <Footer /> */}
        {children}
        <BootStrapClient />
      </body>
    </html>
  );
}
