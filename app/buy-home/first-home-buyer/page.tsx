'use client';

import React, { Suspense } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useRouter, useSearchParams } from 'next/navigation';
import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';
import '../../refinance/loan-purpose/LoanPurpose.css';

const BuyingPurpose = () => {
  const router = useRouter();

  return (
    <div className="overflow-hidden">
      <TopBar />
      <Wrapper />
      <Suspense fallback={<div>Loading...</div>}>
        {/* Wrap useSearchParams in a Suspense boundary */}
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
  const purchaseAmount = params.get('purchaseAmount');
  const depositAmount = params.get('depositAmount');
  const buyingSituation = params.get('buyingSituation');

  return (
    <>
      <h1 className="text-center text-black mt-4">
        Are you a first home buyer?
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
                `/buy-home/property-status?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=Yes`
              )
            }
          >
            Yes
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
                `/buy-home/property-status?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=No`
              )
            }
          >
            No
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default BuyingPurpose;
