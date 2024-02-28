import HomePage from './components/Bank/Bank';
import Footer from './components/Footer/Footer';
import GetStarted from './components/Get Started/GetStarted';
import { Loan } from './components/Loan/Loan';
import Processes from './components/Processes/Processes';
import { TinyFooter } from './components/Tiny Footer/TinyFooter';
import { TopBar } from './components/Top/top';
import { Wrapper } from './components/Wrapper/wrapper';

export default function WebSite() {
  return (
    <div>
      <TopBar />
      <Wrapper />
      <Loan />
      <Processes />

      <GetStarted />
      <Footer />
      <HomePage />

      {/* <TinyFooter /> */}
    </div>
  );
}
