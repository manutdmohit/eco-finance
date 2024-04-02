'use client';

import React, { Suspense } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { Row, Col, Button, Container } from 'react-bootstrap';

const EmploymentType = () => {
  return (
    <div className="d-flex bg-light">
      <Container style={{ marginTop: '7rem', marginBottom: '2rem' }}>
        <Suspense fallback={<div>Loading ...</div>}>
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
  const creditHistory = params.get('creditHistory');

  console.log({ propertyUse });

  return (
    <div className="bg-white p-5 rounded shadow">
      <h1 className="text-center text-black mt-4">
        What is your employment type?
      </h1>

      <Row className="justify-content-center overflow-hidden mt-4">
        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/applicant-contact-details?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory=${creditHistory}&employmentType=Employee`
              )
            }
          >
            Employee
          </Button>
        </Col>

        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/applicant-contact-details?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory=${creditHistory}&employment_type=Self-employed`
              )
            }
          >
            Self-employed
          </Button>
        </Col>

        <Col xs={12} md={10} lg={8} className="mb-3">
          <Button
            variant="primary"
            className="w-100 py-3 fs-5 rounded-pill"
            onClick={() =>
              router.push(
                `/buy-home/applicant-contact-details?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory=${creditHistory}&employmentType=Other`
              )
            }
          >
            Other
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default EmploymentType;
