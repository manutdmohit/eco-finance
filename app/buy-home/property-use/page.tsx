'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { Row, Col, Button } from 'react-bootstrap';

import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

import '../../refinance/loan-purpose/LoanPurpose.css';

const PropertyUse = () => {
  const router = useRouter();

  const params = useSearchParams();

  const type = params.get('type');
  const purchaseAmount = params.get('purchaseAmount');
  const depositAmount = params.get('depositAmount');
  const buyingSituation = params.get('buyingSituation');
  const firstHomeBuyer = params.get('firstHomeBuyer');
  const propertyStatus = params.get('propertyStatus');

  return (
    <div className="overflow-hidden">
      <TopBar />
      <Wrapper />
      <h1 className="text-center text-black">
        How will this property be used?
      </h1>

      <Row className="justify-content-center overflow-hidden">
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
                `/buy-home/lender-preferences?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=I will live there`
              )
            }
          >
            I will live there
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
                `/buy-home/lender-preferences?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=It's an Investment`
              )
            }
          >
            It's an investment
          </Button>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default PropertyUse;
