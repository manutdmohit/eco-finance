'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Row, Col, Button, Container } from 'react-bootstrap';

const PropertyUse = () => {
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

  return (
    <div className="bg-white p-5 rounded shadow">
      <h1 className="text-center  mb-4">How will this property be used?</h1>
      <Row className="justify-content-center overflow-hidden">
        <Col xs={12} md={10} lg={8} className="mb-3 d-flex align-items-stretch">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/lender-preferences?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=I will live there`
              )
            }
          >
            I will live there
          </Button>
        </Col>
        <Col xs={12} md={10} lg={8} className="mb-3 d-flex align-items-stretch">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/lender-preferences?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=It's an Investment`
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
