'use client';
import React, { FormEvent, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const PropertyWorthForm: React.FC = () => {
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

const SearchParamsProvider: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loanAmount = searchParams.get('loanAmount');
    if (Number(propertyValue) < Number(loanAmount)) {
      setSubmitted(true);
      return;
    }

    router.push(
      `/refinance/loan-purpose?type=${searchParams.get(
        'type'
      )}&loanAmount=${loanAmount}&rate=${searchParams.get(
        'rate'
      )}&selectedOption=${searchParams.get(
        'selectedOption'
      )}&expiryDate=${searchParams.get(
        'expiryDate'
      )}&propertyValue=${propertyValue}`
    );
  };

  const type = searchParams.get('type');
  const loanAmount = searchParams.get('loanAmount');
  const rate = searchParams.get('rate');
  const selectedOption = searchParams.get('selectedOption');
  const expiryDate = searchParams.get('expiryDate');

  const propertyAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyValue(e.target.value);
  };

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-center mb-4">
        Approximately how much is your property worth?
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="$ Amount"
            value={propertyValue}
            onChange={propertyAmountValue}
            required
          />
        </div>
        {Number(propertyValue) < Number(loanAmount) && (
          <div className="text-center text-danger mb-3">
            Property value should be greater than the loan amount
          </div>
        )}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyWorthForm;
