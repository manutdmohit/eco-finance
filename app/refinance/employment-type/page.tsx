'use client';

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Row, Col, Button } from 'react-bootstrap';

import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

import '../loan-purpose/LoanPurpose.css';

const EmploymentType = () => {
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
  const purpose = params.get('purpose');
  const propertyUse = params.get('propertyUse');
  const choosingALender = params.get('choosingALender');
  const creditHistory = params.get('creditHistory');

  console.log(choosingALender);

  return (
    <>
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
                `/refinance/applicant-contact-details?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&propertyValue=${propertyValue}&purpose=${purpose}&propertyUse=${propertyUse}&choosingALender=
                ${choosingALender}&creditHistory=${creditHistory}&employmentType=Employee`
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
                `/refinance/applicant-contact-details?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&propertyValue=${propertyValue}&purpose=Pay off loan faster&choosingALender=${choosingALender}&creditHistory=${creditHistory}&employment_type=Self-employed`
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
                `/refinance/applicant-contact-details?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&propertyValue=${propertyValue}&purpose=${purpose}&choosingALender=${choosingALender}&creditHistory=${creditHistory}&employmentType=Other`
              )
            }
          >
            Other
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default EmploymentType;
