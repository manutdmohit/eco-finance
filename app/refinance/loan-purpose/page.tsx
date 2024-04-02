'use client';
import React, { Suspense } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useRouter, useSearchParams } from 'next/navigation';

const LoanPurpose = () => {
  return (
    <div className="d-flex bg-light">
      <Container style={{ marginTop: '7rem', marginBottom: '2rem' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchParamsProvider />
        </Suspense>
      </Container>
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
    <div className="bg-white p-5 rounded shadow">
      <h1 className="text-center mb-4">Why are you refinancing?</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/refinance/property-use?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&propertyValue=${propertyValue}&purpose=Decrease repayments`
              )
            }
          >
            Decrease repayments
          </Button>
        </Col>
        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/refinance/property-use?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=$&propertyValue=${propertyValue}&purpose=Pay off loan faster`
              )
            }
          >
            Pay off loan faster
          </Button>
        </Col>
        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/refinance/property-use?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=$&propertyValue=${propertyValue}&purpose=Consolidate debt / get cash out`
              )
            }
          >
            Consolidate debt / get cash out
          </Button>
        </Col>
        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
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
    </div>
  );
};

export default LoanPurpose;
