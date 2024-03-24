'use client';

import React, { FormEvent, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import '../../refinance/loan-amount/LoanAmount.css';
import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

const DepositAmountForm: React.FC = () => {
  return (
    <div className="">
      <TopBar />
      <Wrapper />
      <Suspense fallback={<div>Loading...</div>}>
        {/* Wrap useSearchParams in a Suspense boundary */}
        <SearchParamsProvider />
      </Suspense>
      <Footer />
    </div>
  );
};

const SearchParamsProvider: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();
  const process = params.get('type');
  const purchaseAmount = params.get('purchaseAmount');
  const [depositAmount, setDepositAmount] = useState('');

  const depositAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDepositAmount(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Construct the URL with query string:
    const url = `/buy-home/buying-situation?type=${process}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}`;
    // String data
    // Use router.push with the constructed URL:
    router.push(url);
  };

  return (
    <form
      className="bg-light py-4 px-3 px-md-5 mt-4 deposit-container"
      onSubmit={handleSubmit}
    >
      <div className="container">
        <div className="text-center mb-3">
          <h2 className="fw-bold text-black mb-4">
            How much deposit do you have?
          </h2>
        </div>
        <div className="mb-4">
          <input
            type="number"
            className="form-control loan-amount-placeholder fs-6 "
            placeholder="$ Deposit Amount"
            value={depositAmount}
            onChange={depositAmountValue}
            required
          />
        </div>
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-primary btn-loan-amount fs-4"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default DepositAmountForm;
