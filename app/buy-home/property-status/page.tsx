'use client';

import React, { Suspense } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useRouter, useSearchParams } from 'next/navigation';

import { Container } from 'react-bootstrap';

const PropertyStatus = () => {
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

  return (
    <div className="bg-white p-5 rounded shadow ">
      <h1 className="text-center text-black mt-4">
        What kind of property are you looking to buy?
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
                `/buy-home/property-use?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=Newly built / off the plan`
              )
            }
          >
            Newly built / off the plan
          </Button>
        </Col>

        <Col xs={12} md={10} lg={8} className="mb-3 d-flex align-items-stretch">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/property-use?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=Established Home`
              )
            }
          >
            Established Home
          </Button>
        </Col>

        <Col xs={12} md={10} lg={8} className="mb-3 d-flex align-items-stretch">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/property-use?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=Vacant land to build on`
              )
            }
          >
            Vacant land to build on
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PropertyStatus;
