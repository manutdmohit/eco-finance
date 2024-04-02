'use client';

import React, { FormEvent, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// import '../../refinance/loan-amount/LoanAmount.css';

const PurchaseAmountForm: React.FC = () => {
  return (
    <div className="d-flex vh-100 bg-light overflow-hidden">
      <div className="container my-auto">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <Suspense fallback={<div>Loading...</div>}>
              <SearchParamsProvider />
            </Suspense>
          </div>
        </div>
      </div>
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
    <div className="bg-white p-5 rounded shadow">
      <h2
        className="text-center mb-4
      "
      >
        What is your expected purchase price?
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="$ Purchase Amount"
            value={purchaseAmount}
            onChange={purchaseAmountValue}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseAmountForm;
