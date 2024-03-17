'use client';

import React, { Suspense } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useRouter, useSearchParams } from 'next/navigation';
import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';
import '../../refinance/loan-purpose/LoanPurpose.css';

const BuyingPurpose = () => {
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

  return (
    <>
      <h1 className="text-center text-black mt-4">
        What best describes your home buying situation?{' '}
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
                `/buy-home/first-home-buyer?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=Just exploring options`
              )
            }
          >
            Just exploring options
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
                `/buy-home/first-home-buyer?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=Plan to buy in the next 6 months`
              )
            }
          >
            Plan to buy in the next 6 months
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
                `/buy-home/first-home-buyer?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation= Plan to buy in the next 6 months`
              )
            }
          >
            Plan to buy in the next 6 months
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
                `/buy-home/first-home-buyer?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=Exchanged contracts`
              )
            }
          >
            Exchanged contracts
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default BuyingPurpose;
