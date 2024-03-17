'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { Row, Col, Button } from 'react-bootstrap';

import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

import '../../refinance/loan-purpose/LoanPurpose.css';

const EmploymentType = () => {
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

  return (
    <div className="overflow-hidden">
      <TopBar />
      <Wrapper />
      <h1 className="text-center text-black mt-4">
        What is your employment type?
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
                `/buy-home/applicant-contact-details?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory=${creditHistory}&employmentType=Employee`
              )
            }
          >
            Employee
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
                `/buy-home/applicant-contact-details?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory=${creditHistory}&employment_type=Self-employed`
              )
            }
          >
            Self-employed
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
                `/buy-home/applicant-contact-details?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory=${creditHistory}&employmentType=Other`
              )
            }
          >
            Other
          </Button>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default EmploymentType;
