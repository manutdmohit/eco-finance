'use client';

import React, { FormEvent, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import './PropertyValue.css';
import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

const PropertyWorthForm: React.FC = () => {
  return (
    <div>
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

    // Perform redirect
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

  // Access search parameters from searchParams
  const type = searchParams.get('type');
  const loanAmount = searchParams.get('loanAmount');
  const rate = searchParams.get('rate');
  const selectedOption = searchParams.get('selectedOption');
  const expiryDate = searchParams.get('expiryDate');

  const propertyAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyValue(e.target.value);
  };

  return (
    <form className="bg-light py-4 px-3 px-md-5" onSubmit={handleSubmit}>
      <div className="container">
        <div className="text-center mb-3">
          <h2 className="fw-bold text-black">
            Approximately how much is your property worth?
          </h2>
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control property-amount-placeholder "
            placeholder="$ Amount"
            value={propertyValue}
            onChange={propertyAmountValue}
            required
          />
        </div>
        {Number(propertyValue) < Number(loanAmount) && (
          <p className="text-center message">
            property value should be greater than the loan amount
          </p>
        )}
        <p className="text-black text-center">Why do we ask this?</p>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-property-amount">
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default PropertyWorthForm;
