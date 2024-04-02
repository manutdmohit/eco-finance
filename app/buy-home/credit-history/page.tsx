'use client';

import React, { Suspense } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { Row, Col, Button, Container } from 'react-bootstrap';

const CreditHistory = () => {
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
  const purchaseAmount = params.get('purchaseAmount');
  const depositAmount = params.get('depositAmount');
  const buyingSituation = params.get('buyingSituation');
  const firstHomeBuyer = params.get('firstHomeBuyer');
  const propertyStatus = params.get('propertyStatus');
  const propertyUse = params.get('propertyUse');
  const choosingALender = params.get('choosingALender');

  return (
    <div className="bg-white p-5 rounded shadow">
      <h1 className="text-center text-black mt-4">
        What's your credit history?
      </h1>
      <p className="text-center text-black">
        {' '}
        This helps us match the best loan for your scenario
      </p>

      <Row className="justify-content-center overflow-hidden mt-4">
        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/employment-type?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory=Excellent - No issues`
              )
            }
          >
            Excellent - No issues
          </Button>
        </Col>

        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(`/buy-home/employment-type?type=${type}
                &purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}
                &buyingSituation=${buyingSituation}&firstHomeBuyer=$
                {firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=$
                {propertyUse}&choosingALender=${choosingALender}
                &creditHistory=Average - Paid default`)
            }
          >
            Average - Paid default
          </Button>
        </Col>

        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(`/buy-home/employment-type?type=${type}
                &purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}
                &buyingSituation=${buyingSituation}&firstHomeBuyer=$
                {firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=$
                {propertyUse}&choosingALender=${choosingALender}&creditHistory=Fair - Let's talk`)
            }
          >
            Fair - Let's talk
          </Button>
        </Col>

        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(`/buy-home/employment-type?type=${type}
                &purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}
                &buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory=I don't know`)
            }
          >
            I don't know
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CreditHistory;
