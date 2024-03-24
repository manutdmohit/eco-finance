'use client';

import React from 'react';
import Link from 'next/link';

import TopBar from '../components/Top/top';
import Wrapper from '../components/Wrapper/wrapper';
import Footer from '../components/Footer/Footer';

const CalculatorPage = () => {
  return (
    <>
      {/* Top navigation bar */}
      <TopBar />
      {/* Main content wrapper */}
      <Wrapper />
      {/* Calculator options */}
      <div className="container mt-5">
        {/* Heading */}
        <h2 className="text-center mb-4 text-black">Mortgage Options</h2>
        {/* Description */}
        <p className="text-left mb-4 text-black fs-4">
          Welcome to our mortgage options page! Whether you're considering
          refinancing your existing mortgage, purchasing a new home, or simply
          exploring repayment options, we've got you covered. Take a moment to
          review the choices below and select the option that best fits your
          needs. Our goal is to provide you with the information and tools
          necessary to make informed decisions about your mortgage.
        </p>
        <div className="row">
          {/* Refinance button */}
          <div className="col-sm-4 col-md-4 mb-4">
            <Link
              href="/refinance/loan-amount?type=refinance"
              className="text-decoration-none"
            >
              {/* Button for refinancing */}
              <button className="btn btn-default btn-lg btn-block text-white fs-4 d-flex justify-content-center align-items-center m-auto">
                I Want To Refinance
              </button>
            </Link>
          </div>
          {/* Buy Home button */}
          <div className="col-sm-4 col-md-4 mb-4">
            <Link
              href="/buy-home/purchase-price?type=buy-home"
              className="text-decoration-none"
            >
              {/* Button for buying a home */}
              <button className="btn btn-default btn-lg btn-block text-white fs-4 d-flex justify-content-center align-items-center m-auto">
                I Want To Buy Home
              </button>
            </Link>
          </div>
          {/* Repayment calculator button */}
          <div className="col-sm-4 col-md-4 mb-4">
            {/* Button for accessing repayment calculator */}
            <Link
              href="/calculators/repayment-calculator"
              className="text-decoration-none"
            >
              <button className="btn btn-default btn-lg btn-block text-white fs-4 d-flex justify-content-center align-items-center m-auto">
                Repayment Calculator
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default CalculatorPage;
