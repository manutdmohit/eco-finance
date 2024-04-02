import AssistanceSection from './components/Assist/Assist';
import Bank from './components/Bank/Bank';
import FirstHomeSection from './components/First Home/FirstHomeSection';
import Footer from './components/Footer/Footer';
import GetStarted from './components/Get Started/GetStarted';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import Processes from './components/Processes/Processes';
import Service from './components/Service/Service';
import TopBar from './components/Top/top';
import WhyChooseUsSection from './components/WhyChooseUs/WhyChooseUs';
import Wrapper from './components/Wrapper/wrapper';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WebSite() {
  return (
    <div>
      <ToastContainer />

      {/* <TopBar />
      <Wrapper /> */}
      <Introduction />
      <WhyChooseUsSection />
      {/* <FirstHomeSection /> */}
      <Service />
      <Processes />
      <GetStarted />
      <Bank />
    </div>
  );
}
