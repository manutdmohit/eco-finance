'use client';
import React, { FormEvent, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const LoanAmountForm: React.FC = () => {
  return (
    <div className="d-flex vh-100 bg-light">
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
  const [loanAmount, setLoanAmount] = useState('');

  const loanAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoanAmount(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `/refinance/fix-interest-rate?type=${process}&loanAmount=${loanAmount}`;
    router.push(url);
  };

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-center mb-4">Enter Your Loan Amount</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="$ Loan Amount"
            value={loanAmount}
            onChange={loanAmountValue}
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

export default LoanAmountForm;
