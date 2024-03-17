'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Switch } from 'antd';

import './FixInterestRate.css';
import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

const YourRateForm: React.FC = () => {
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

  const [loanAmount, setLoanAmount] = useState<string>('');
  const params = useSearchParams();

  useEffect(() => {
    const initialLoanAmount = params.get('loanAmount');
    setLoanAmount(initialLoanAmount || ''); // Set default empty string if not found
  }, []); // Empty dependency array runs once on component

  const type = params.get('type');

  const [rate, setRate] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [showExpiryDate, setShowExpiryDate] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [skip, setSkip] = useState<boolean>(false);
  const [expiryDate, setExpiryDate] = useState<string>('');

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

  const handleRate = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  // Function to handle changes in the expiry date input
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(e.target.value); // Update the expiryDate state with the new value
  };

  return (
    <>
      <div className="main-container">
        <form onSubmit={handleSubmit} className="refinance-fix-interest-rate">
          <div className="container py-16 mx-auto max-w-[50%] sm:max-w-[66.6667%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[50%]">
            <div className="flex flex-col justify-center mb-10 gap-y-8">
              <h3 className="text-center text-black">
                Tell us more about your current rate.
              </h3>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <div className="mb-2.5 flex-col">
                  <div className="flex items-center justify-between">
                    <p className="text-black">Estimate interest rate</p>
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rate"
                    value={skip === true ? '' : rate}
                    disabled={skip === true}
                    onChange={handleRate}
                  />

                  <div className="d-flex align-items-center">
                    <Switch onChange={onChange} />

                    <p className="text-black skip">skip</p>
                  </div>
                  {!skip && submitted && !rate && (
                    <p className="provide-rate">
                      Estimate interest rate is required
                    </p>
                  )}
                </div>
              </div>
              <div className="col-span-12">
                <div className="mb-2.5 flex-col">
                  <div className="flex items-center justify-between">
                    <p className="text-black">
                      Are you currently on a fixed rate?
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <label className="mr-2 text-black">
                    <input
                      type="radio"
                      value="FIXED_RATE"
                      checked={selectedOption === 'FIXED_RATE'}
                      onChange={handleOptionChange}
                      required
                    />{' '}
                    Yes
                  </label>
                  <label className="text-black variable">
                    <input
                      type="radio"
                      value="VARIABLE"
                      checked={selectedOption === 'VARIABLE'}
                      onChange={handleOptionChange}
                    />{' '}
                    No
                  </label>
                </div>
                <button
                  type="button"
                  className="flex items-center mt-2 mb-4 text-[#00c0a5]"
                >
                  <div className="ml-1 text-sm font-bold text-black">
                    Why do we ask this?
                  </div>
                </button>

                {submitted && !selectedOption && (
                  <p className="provide-rate">Please select interest rate</p>
                )}
              </div>
              {showExpiryDate && (
                <div className="col-span-12">
                  <div className="mb-2.5 flex-col">
                    <div className="flex items-center justify-between">
                      <p className="text-black">Expiry Date</p>
                    </div>
                  </div>
                  <input
                    type="date"
                    className="form-control"
                    required
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                  />
                </div>
              )}
            </div>
            <div className="mt-16 flex flex-col items-center gap-y-6">
              <button
                type="submit"
                className="w-full sm:w-[66%] btn btn-primary submit-button"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default YourRateForm;
