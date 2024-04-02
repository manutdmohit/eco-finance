'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Switch } from 'antd';

const YourRateForm: React.FC = () => {
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

  const [loanAmount, setLoanAmount] = useState('');
  const params = useSearchParams();

  useEffect(() => {
    const initialLoanAmount = params.get('loanAmount');
    setLoanAmount(initialLoanAmount || '');
  }, []);

  const type = params.get('type');

  const [rate, setRate] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showExpiryDate, setShowExpiryDate] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [skip, setSkip] = useState(false);
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ((!skip && !rate) || !selectedOption) {
      setSubmitted(true);
      return;
    }

    router.push(
      `/refinance/property-value?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}`
    );
  };

  const handleRate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRate(event.target.value);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);

    if (e.target.value === 'FIXED_RATE') {
      setShowExpiryDate(true);
    } else {
      setShowExpiryDate(false);
    }
  };

  const onChange = (checked: boolean) => {
    setSkip(checked);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(e.target.value);
  };

  return (
    <div className="bg-white p-5 rounded shadow mt-5">
      <h2 className="text-center mb-4">Tell us more about your current rate</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="rate" className="form-label">
            Estimate interest rate
          </label>
          <div className="input-group">
            <input
              id="rate"
              type="number"
              className="form-control"
              placeholder="Rate"
              value={skip ? '' : rate}
              disabled={skip}
              onChange={handleRate}
              required
            />
            <div className="input-group-append d-flex align-items-center">
              <Switch onChange={onChange} className="ms-3" />
              <span>skip</span>
            </div>
          </div>
          {!skip && submitted && !rate && (
            <div className="text-danger">
              Estimate interest rate is required
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">
            Are you currently on a fixed rate?
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="FIXED_RATE"
              checked={selectedOption === 'FIXED_RATE'}
              onChange={handleOptionChange}
              required
            />
            <label className="form-check-label">Yes</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="VARIABLE"
              checked={selectedOption === 'VARIABLE'}
              onChange={handleOptionChange}
            />
            <label className="form-check-label">No</label>
          </div>
          {submitted && !selectedOption && (
            <div className="text-danger">Please select interest rate</div>
          )}
        </div>
        {showExpiryDate && (
          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">
              Expiry Date
            </label>
            <input
              id="expiryDate"
              type="date"
              className="form-control"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              required
            />
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

export default YourRateForm;
