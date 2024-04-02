'use client';

import React, { Suspense } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { Button, Container, Row, Col } from 'react-bootstrap';

const BuyingPurpose = () => {
  return (
    <div className="d-flex bg-light overflow-hidden">
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

  return (
    <div className="bg-white p-5 rounded shadow">
      <h1 className="text-center mb-4">
        What best describes your home buying situation?{' '}
      </h1>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/first-home-buyer?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=Just exploring options`
              )
            }
          >
            Just exploring options
          </Button>
        </Col>

        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/first-home-buyer?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=Plan to buy in the next 6 months`
              )
            }
          >
            Plan to buy in the next 6 months
          </Button>
        </Col>

        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/first-home-buyer?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation= Plan to buy in the next 6 months`
              )
            }
          >
            Plan to buy in the next 6 months
          </Button>
        </Col>

        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/first-home-buyer?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=Exchanged contracts`
              )
            }
          >
            Exchanged contracts
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default BuyingPurpose;
