'use client';

import React, { Suspense } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useRouter, useSearchParams } from 'next/navigation';

import { Container } from 'react-bootstrap';

const BuyingPurpose = () => {
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

  return (
    <div className="bg-white p-5 rounded shadow ">
      <h1 className="text-center text-black mt-4">
        Are you a first home buyer?
      </h1>
      <Row className="justify-content-center overflow-hidden">
        <Col
          xs={12}
          md={10}
          lg={8}
          className="mb-3 d-flex align-items-stretch mt-4"
        >
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/property-status?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=Yes`
              )
            }
          >
            Yes
          </Button>
        </Col>

        <Col xs={12} md={10} lg={8} className="mb-3 d-flex align-items-stretch">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/property-status?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=No`
              )
            }
          >
            No
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default BuyingPurpose;
