import React from 'react';
import Footer from '../components/Footer/Footer';
import TopBar from '../components/Top/top';
import Wrapper from '../components/Wrapper/wrapper';
import Introduction from '../components/Introduction/Introduction';
import AssistanceSection from '../components/Assist/Assist';
import FirstHomeSection from '../components/First Home/FirstHomeSection';
import { Form } from '../contact-us/page';

const Home = () => {
  return (
    <div>
      <TopBar />
      <Wrapper />
      <Introduction />
      <AssistanceSection />
      <FirstHomeSection />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
