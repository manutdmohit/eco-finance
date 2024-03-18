'use client';

import React from 'react';

import TopBar from '../components/Top/top';
import Wrapper from '../components/Wrapper/wrapper';
import Footer from '../components/Footer/Footer';
import PrivacyPolicyContainer from './PrivacyPolicy';

const PrivacyPolicy = () => {
  return (
    <div>
      <TopBar />
      <Wrapper />
      <PrivacyPolicyContainer />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
