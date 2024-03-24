'use client';

import React, { Suspense } from 'react';

import { Button, Row, Col } from 'react-bootstrap';

import { useRouter, useSearchParams } from 'next/navigation';
import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

import './LoanPurpose.css';

const LoanPurpose = () => {
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
  const propertyValue = params.get('propertyValue');

  return (
    <>
      <h1 className="text-center text-black mt-4">Why are you refinancing? </h1>
      <Row className="justify-content-center overflow-hidden">
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
                `/refinance/property-use?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&propertyValue=${propertyValue}&purpose=Decrease repayments`
              )
            }
          >
            Decrease repayments
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
                `/refinance/property-use?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=$&propertyValue=${propertyValue}&purpose=Pay off loan faster`
              )
            }
          >
            Pay off loan faster
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
                `/refinance/property-use?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=$&propertyValue=${propertyValue}&purpose=Consolidate debt / get cash out`
              )
            }
          >
            Consolidate debt / get cash out
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
                `/refinance/property-use?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=$&propertyValue=${propertyValue}&purpose=Build on my land or property`
              )
            }
          >
            Build on my land or property
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default LoanPurpose;
