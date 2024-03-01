import BackgroundAnimation from './components/BackgroundAnimation';
import HomePage from './components/Bank/Bank';
import Footer from './components/Footer/Footer';
import GetStarted from './components/Get Started/GetStarted';
import Introduction from './components/Introduction/Introduction';
import { Loan } from './components/Loan/Loan';
import Processes from './components/Processes/Processes';
import Service from './components/Service/Service';
import { TinyFooter } from './components/Tiny Footer/TinyFooter';
import { TopBar } from './components/Top/top';
import { Wrapper } from './components/Wrapper/wrapper';

export default function WebSite() {
  return (
    <div>
      <TopBar />
      <Wrapper />
      <Introduction />
      {/* <BackgroundAnimation /> */}
      <Service />
      {/* <Loan /> */}
      <Processes />

      <GetStarted />
      <Footer />
      <HomePage />

      {/* <TinyFooter /> */}

      {/* <LandingPage /> */}
    </div>
  );
}
