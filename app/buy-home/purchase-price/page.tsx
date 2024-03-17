'use client';

import React, { FormEvent, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import '../../refinance/loan-amount/LoanAmount.css';

import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

const PurchaseAmountForm: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Wrapper />

      <Suspense fallback={<div>Loading ...</div>}>
        <SearchParamsProvider />
      </Suspense>

      <Footer />
    </div>
  );
};

const SearchParamsProvider = () => {
  const router = useRouter();

  const params = useSearchParams();

  const process = params.get('type');

  const [purchaseAmount, setPurchaseAmount] = useState('');

  const purchaseAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setPurchaseAmount(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct the URL with query string:
    const url = `/buy-home/deposit?type=${process}&purchaseAmount=${purchaseAmount}`; // String data

    // Use router.push with the constructed URL:
    router.push(url);
  };
  return (
    <>
      <form className="bg-light py-4 px-3 px-md-5" onSubmit={handleSubmit}>
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="fw-bold text-black">
              What is your expected purchase price?
            </h2>
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control loan-amount-placeholder "
              placeholder="$ Purchase Amount"
              value={purchaseAmount}
              onChange={purchaseAmountValue}
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
    </>
  );
};

export default PurchaseAmountForm;
