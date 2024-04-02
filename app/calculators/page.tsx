import React from 'react';
import Link from 'next/link';
import { FaHome, FaMoneyBillAlt, FaCalculator } from 'react-icons/fa';

const CalculatorPage = () => {
  return (
    <div className="bg-light py-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 text-indigo">Mortgage Options</h1>
            <p className="lead text-muted">
              Explore our range of mortgage services to find the best solution
              for your financial needs.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Link
              href="/refinance/loan-amount?type=refinance"
              className="text-decoration-none"
            >
              <div className="card bg-white rounded-lg shadow-lg hover-shadow-xl text-center cursor-pointer h-100">
                <div className="card-body">
                  <FaMoneyBillAlt className="text-green mb-3 display-4" />
                  <h3 className="card-title text-gray">Refinance</h3>
                  <p className="card-text text-muted">
                    Explore options to refinance your existing mortgage.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4 mb-4">
            <Link
              href="/buy-home/purchase-price?type=buy-home"
              className="text-decoration-none"
            >
              <div className="card bg-white rounded-lg shadow-lg hover-shadow-xl text-center cursor-pointer h-100">
                <div className="card-body">
                  <FaHome className="text-indigo mb-3 display-4" />
                  <h3 className="card-title text-gray">Buy Home</h3>
                  <p className="card-text text-muted">
                    Find the right mortgage for purchasing a new home.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4 mb-4">
            <Link
              href="/calculators/repayment-calculator"
              className="text-decoration-none"
            >
              <div className="card bg-white rounded-lg shadow-lg hover-shadow-xl text-center cursor-pointer h-100">
                <div className="card-body">
                  <FaCalculator className="text-orange mb-3 display-4" />
                  <h3 className="card-title text-gray">Repayment Calculator</h3>
                  <p className="card-text text-muted">
                    Calculate your monthly mortgage repayments.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
