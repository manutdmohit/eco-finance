'use client';

import React from 'react';
import Link from 'next/link';

import './RefinanceAndBuyHome.css';

const RefinanceAndBuyHome = () => {
  return (
    <div className="refinance-buy-home d-flex mt-5 mb-5">
      <Link
        href="refinance/loan-amount?type=refinance"
        className="btn btn-primary header-button refinance text-white"
      >
        I want to refinance
      </Link>
      <Link
        href="/buy-home/purchase-price?type=buy-home"
        className="btn btn-primary header-button buy-home text-white"
      >
        I want to buy a home
      </Link>{' '}
    </div>
  );
};

export default RefinanceAndBuyHome;
