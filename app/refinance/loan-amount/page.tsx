'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import './LoanAmount.css';

import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

const LoanAmountForm: React.FC = () => {
  const router = useRouter();

  const params = useSearchParams();

  const process = params.get('type');

  const [loanAmount, setLoanAmount] = useState('');

  const loanAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setLoanAmount(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct the URL with query string:
    const url = `/refinance/fix-interest-rate?type=${process}&loanAmount=${loanAmount}`; // String data

    // Use router.push with the constructed URL:
    router.push(url);
  };

  return (
    <div className="">
      <TopBar />
      <Wrapper />
      <form className="bg-light py-4 px-3 px-md-5" onSubmit={handleSubmit}>
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="fw-bold text-black">Enter Your Loan Amount</h2>
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control loan-amount-placeholder "
              placeholder="$ Loan Amount"
              value={loanAmount}
              onChange={loanAmountValue}
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-loan-amount">
              Next
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default LoanAmountForm;
