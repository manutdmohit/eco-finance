'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { Row, Col, Button } from 'react-bootstrap';

import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

import '../loan-purpose/LoanPurpose.css';

const CreditHistory = () => {
  return (
    <div className="overflow-hidden">
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

  const params = useSearchParams();

  const type = params.get('type');
  const loanAmount = params.get('loanAmount');
  const rate = params.get('rate');
  const selectedOption = params.get('selectedOption');
  const expiryDate = params.get('expiryDate');
  const purpose = params.get('purpose');
  const propertyUse = params.get('propertyUse');
  const choosingALender = params.get('choosingALender');
  return (
    <>
      <h1 className="text-center text-black mt-4">
        What's your credit history?
      </h1>
      <p className="text-center text-black">
        {' '}
        This helps us match the best loan for your scenario
      </p>

      <Row className="justify-content-center overflow-hidden mt-4">
        <Col
          xs={12}
          md={12}
          lg={12}
          className="mb-3 d-flex align-items-stretch"
        >
          <Button
            variant="primary"
            className="btn-purpose"
            onClick={() =>
              router.push(
                `/refinance/employment-type?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&purpose=${purpose}&propertyUse=${propertyUse}&choosingALender=
                ${choosingALender}&creditHistory=Excellent - No issues`
              )
            }
          >
            Excellent - No issues
          </Button>
        </Col>

        <Col
          xs={12}
          md={12}
          lg={12}
          className="mb-3 d-flex align-items-stretch"
        >
          <Button
            variant="primary"
            className="btn-purpose"
            onClick={() =>
              router.push(
                `/refinance/employment-type?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&purpose=${purpose}&choosingALender=${choosingALender}&creditHistory=Average - Paid default`
              )
            }
          >
            Average - Paid default
          </Button>
        </Col>

        <Col
          xs={12}
          md={12}
          lg={12}
          className="mb-3 d-flex align-items-stretch"
        >
          <Button
            variant="primary"
            className="btn-purpose"
            onClick={() =>
              router.push(
                `/refinance/employment-type?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&purpose=${purpose}&choosingALender=${choosingALender}&creditHistory=Fair - Let's talk`
              )
            }
          >
            Fair - Let's talk
          </Button>
        </Col>

        <Col
          xs={12}
          md={12}
          lg={12}
          className="mb-3 d-flex align-items-stretch"
        >
          <Button
            variant="primary"
            className="btn-purpose"
            onClick={() =>
              router.push(
                `/refinance/employment-type?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&purpose=${purpose}&choosingALender=I don't know`
              )
            }
          >
            I don't know
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CreditHistory;
