'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { Row, Col, Button } from 'react-bootstrap';

import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

import '../loan-purpose/LoanPurpose.css';

const PropertyUse = () => {
  return (
    <div className="overflow-hidden">
      <TopBar />
      <Wrapper />
      <Suspense fallback={<div>Loading...</div>}>
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
  const propertyValue = params.get('propertyValue');

  return (
    <>
      <h1 className="text-center text-black mt-4">
        How will this property be used?
      </h1>

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
                `/refinance/lender-preferences?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&propertyValue=${propertyValue}&purpose=Decrease repayments&propertyUse=I will live there`
              )
            }
          >
            I will live there
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
                `/refinance/lender-preferences?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&propertyValue=${propertyValue}&purpose=Decrease repayments&propertyUse=It's an investment`
              )
            }
          >
            It's an investment
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default PropertyUse;
