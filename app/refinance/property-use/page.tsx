'use client';
import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PropertyUse = () => {
  return (
    <div className="d-flex vh-100 bg-light">
      <Container style={{ marginTop: '11rem' }}>
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
      <h1 className="text-center mb-4">How will this property be used?</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/refinance/lender-preferences?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&propertyValue=${propertyValue}&purpose=Decrease repayments&propertyUse=I will live there`
              )
            }
          >
            I will live there
          </Button>
        </Col>
        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
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
    </div>
  );
};

export default PropertyUse;
