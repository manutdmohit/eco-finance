import AssistanceSection from './components/Assist/Assist';
import Bank from './components/Bank/Bank';
import FirstHomeSection from './components/First Home/FirstHomeSection';
import Footer from './components/Footer/Footer';
import GetStarted from './components/Get Started/GetStarted';
import Introduction from './components/Introduction/Introduction';
import { Loan } from './components/Loan/Loan';
import Processes from './components/Processes/Processes';
import ReviewsSection from './components/Review/Review';
import Service from './components/Service/Service';
import { TinyFooter } from './components/Tiny Footer/TinyFooter';
import TopBar from './components/Top/top';
import WhyChooseUsSection from './components/WhyChooseUs/WhyChooseUs';
import Wrapper from './components/Wrapper/wrapper';

export default function WebSite() {
  return (
    <div>
      <TopBar />
      <Wrapper />
      <Introduction />
      {/* <BackgroundAnimation /> */}

      {/* <AssistanceSection /> */}
      <WhyChooseUsSection />
      <FirstHomeSection />

      <Service />
      {/* <Loan /> */}
      <Processes />

      {/* <ReviewsSection /> */}

      <GetStarted />

      <Bank />
      <Footer />

      {/* <TinyFooter /> */}

      {/* <LandingPage /> */}
    </div>
  );
}
