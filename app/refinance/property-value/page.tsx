'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import './PropertyValue.css';

import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

const PropertyWorthForm: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const router = useRouter();

  const params = useSearchParams();

  const type = params.get('type');
  const loanAmount = params.get('loanAmount');
  const rate = params.get('rate');
  const selectedOption = params.get('selectedOption');
  const expiryDate = params.get('expiryDate');

  const propertyAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Number(propertyValue) < Number(loanAmount)) {
      setSubmitted(true);

      return;
    }

    router.push(
      `/refinance/loan-purpose?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&propertyValue=${propertyValue}`
    );
  };

  return (
    <div>
      <TopBar />
      <Wrapper />
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
            <button
              type="submit"
              className="btn btn-primary btn-property-amount"
            >
              Next
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default PropertyWorthForm;
