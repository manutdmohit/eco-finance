'use client';

import React, { FormEvent, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const DepositAmountForm: React.FC = () => {
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
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-center mb-4">How much deposit do you have?</h2>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="mb-3">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="$ Deposit Amount"
              value={depositAmount}
              onChange={depositAmountValue}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DepositAmountForm;
