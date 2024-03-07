import React from 'react';
import Footer from '../components/Footer/Footer';
import TopBar from '../components/Top/top';
import Wrapper from '../components/Wrapper/wrapper';
import Introduction from '../components/Introduction/Introduction';
import AssistanceSection from '../components/Assist/Assist';

const Home = () => {
  return (
    <div>
      <TopBar />
      <Wrapper />
      <Introduction />
      <AssistanceSection />
      <Footer />
    </div>
  );
};

export default Home;
