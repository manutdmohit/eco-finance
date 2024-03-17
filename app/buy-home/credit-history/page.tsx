'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { Row, Col, Button } from 'react-bootstrap';

import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

import '../../refinance/loan-purpose/LoanPurpose.css';

const CreditHistory = () => {
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
    <Suspense>
      <div className="overflow-hidden">
        <TopBar />
        <Wrapper />
        <h1 className="text-center text-black mt-4">
          What's your credit history?
        </h1>
        <p className="text-center text-black">
          {' '}
          This helps us match the best loan for your scenario
        </p>

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
                  `/buy-home/employment-type?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory=  Excellent - No issues`
                )
              }
            >
              Excellent - No issues
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
                  `/buy-home/employment-type?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory=Average - Paid default`
                )
              }
            >
              Average - Paid default
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
                  `/buy-home/employment-type?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory= Fair - Let's talk`
                )
              }
            >
              Fair - Let's talk
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
                  `/buy-home/employment-type?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${choosingALender}&creditHistory=I don't know`
                )
              }
            >
              I don't know
            </Button>
          </Col>
        </Row>

        <Footer />
      </div>
    </Suspense>
  );
};

export default CreditHistory;
