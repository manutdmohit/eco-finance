'use client';

import React from 'react';

import { Button, Row, Col } from 'react-bootstrap';

import { useRouter, useSearchParams } from 'next/navigation';
import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

import '../../refinance/loan-purpose/LoanPurpose.css';

const PropertyStatus = () => {
  const router = useRouter();

  const params = useSearchParams();

  const type = params.get('type');
  const purchaseAmount = params.get('purchaseAmount');
  const depositAmount = params.get('depositAmount');
  const buyingSituation = params.get('buyingSituation');
  const firstHomeBuyer = params.get('firstHomeBuyer');

  return (
    <div className="overflow-hidden">
      <TopBar />
      <Wrapper />

      <h1 className="text-center text-black mt-4">
        What kind of property are you looking to buy?
      </h1>
      <Row className="justify-content-center overflow-hidden">
        <Col
          xs={12}
          md={12}
          lg={12}
          className="mb-3 d-flex align-items-stretch mt-4"
        >
          <Button
            variant="primary"
            className="btn-purpose"
            onClick={() =>
              router.push(
                `/buy-home/property-use?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=Newly built / off the plan`
              )
            }
          >
            Newly built / off the plan
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
                `/buy-home/property-use?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}
                propertyStatus=Established Home
                `
              )
            }
          >
            Established Home
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
                `/buy-home/property-use?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}
                propertyStatus=Vacant land to build on
                `
              )
            }
          >
            Vacant land to build on
          </Button>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default PropertyStatus;
