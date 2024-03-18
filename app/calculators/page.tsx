'use client';

import React, { useState, useEffect } from 'react';
import TopBar from '../components/Top/top';
import Wrapper from '../components/Wrapper/wrapper';
import Footer from '../components/Footer/Footer';
import styles from './MortgageCalculator.module.css';

const MortgageCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [loanTerm, setLoanTerm] = useState<string>('');
  const [paymentFrequency, setPaymentFrequency] = useState<string>('monthly');
  const [paymentFrequencyLabel, setPaymentFrequencyLabel] =
    useState<string>('Monthly');
  const [paymentResult, setPaymentResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null); // State for error message

  useEffect(() => {
    calculateMortgage();
  }, [principal, interestRate, loanTerm, paymentFrequency]);

  const calculateMortgage = () => {
    const p = parseFloat(principal);
    const r =
      parseFloat(interestRate) /
      100 /
      (paymentFrequency === 'monthly' ? 12 : 26);
    const n = parseFloat(loanTerm) * (paymentFrequency === 'monthly' ? 12 : 26);

    // Check for negative values
    if (p < 0 || r < 0 || n < 0) {
      setError('Input values cannot be negative');
      setPaymentResult(null);
      return;
    }

    if (!isNaN(p) && !isNaN(r) && !isNaN(n) && p > 0 && r > 0 && n > 0) {
      const monthlyPayment = (p * r) / (1 - Math.pow(1 + r, -n));
      setPaymentResult(monthlyPayment);
      setError(null); // Clear error if no negative values
    } else {
      setPaymentResult(null);
      setError('Please enter valid numbers');
    }
  };

  const handleFrequencyChange = (frequency: string, label: string) => {
    setPaymentFrequency(frequency);
    setPaymentFrequencyLabel(label);
  };

  return (
    <div>
      <TopBar />
      <Wrapper />

      <div className={styles.container}>
        <h2 className={styles.heading}>Mortgage Calculator</h2>
        <div className={styles.calculator}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="principal">
              Principal Amount ($)
            </label>
            <input
              type="number"
              className={styles.input}
              placeholder="Enter Principal Amount"
              id="principal"
              value={principal}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value) && value > 0) {
                  setPrincipal(value.toString());
                }
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="interestRate">
              Interest Rate (%)
            </label>
            <input
              type="number"
              className={styles.input}
              placeholder="Enter Interest Rate"
              id="interestRate"
              value={interestRate}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value) && value > 0) {
                  setInterestRate(value.toString());
                }
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="loanTerm">
              Loan Term (years)
            </label>
            <input
              type="number"
              className={styles.input}
              placeholder="Enter Loan Term"
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value) && value > 0) {
                  setLoanTerm(value.toString());
                }
              }}
            />
          </div>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>Payment Frequency</label>
            <div className={styles.radio}>
              <input
                type="radio"
                id="monthly"
                value="monthly"
                checked={paymentFrequency === 'monthly'}
                onChange={() => handleFrequencyChange('monthly', 'Monthly')}
              />
              <label className={styles.radioOption} htmlFor="monthly">
                Monthly
              </label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                id="fortnightly"
                value="fortnightly"
                checked={paymentFrequency === 'fortnightly'}
                onChange={() =>
                  handleFrequencyChange('fortnightly', 'Fortnightly')
                }
              />
              <label className={styles.radioOption} htmlFor="fortnightly">
                Fortnightly
              </label>
            </div>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          {paymentResult !== null && !isNaN(paymentResult) && (
            <div className={styles.result}>
              <h4 className={styles.resultText}>
                {paymentFrequencyLabel} Payment: ${paymentResult.toFixed(2)}
              </h4>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MortgageCalculator;
