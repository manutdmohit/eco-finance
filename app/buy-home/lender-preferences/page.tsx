'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Row, Col, Button, Form } from 'react-bootstrap';

import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';
import Footer from '@/app/components/Footer/Footer';

// import '../loan-purpose/LoanPurpose.css';
import './LenderPreferences.css';

const LenderPreferences: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();

  const type = params.get('type');
  const purchaseAmount = params.get('purchaseAmount');
  const depositAmount = params.get('depositAmount');
  const buyingSituation = params.get('buyingSituation');
  const firstHomeBuyer = params.get('firstHomeBuyer');
  const propertyStatus = params.get('propertyStatus');
  const propertyUse = params.get('propertyUse');

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((opt) => opt !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    router.push(
      `/buy-home/credit-history?type=${type}&purchaseAmount=${purchaseAmount}&depositAmount=${depositAmount}&buyingSituation=${buyingSituation}&firstHomeBuyer=${firstHomeBuyer}&propertyStatus=${propertyStatus}&propertyUse=${propertyUse}&choosingALender=${selectedOptions.join(
        ', '
      )}`
    );
  };

  return (
    <div className="overflow-hidden ">
      <TopBar />
      <Wrapper />
      <h2 className="text-center text-black mt-4">
        Are any of the following important to you when choosing a lender?
      </h2>
      <p className="text-black text-center">
        You can choose one or more options or can skip
      </p>

      <div className="loan-preference-form-container d-flex flex-row justify-content-center ">
        <Form onSubmit={handleSubmit}>
          <Row className=" mt-4 lender-preference">
            {['Offset/Redraw', 'Fixed rate', 'Major lender', 'Mobile app'].map(
              (option, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className="mb-3 options"
                >
                  <Form.Check
                    type="checkbox"
                    id={`option-${index}`}
                    label={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                  />
                </Col>
              )
            )}
            {selectedOptions.length > 0 ? (
              <Button
                variant="primary"
                className="mt-3 mb-4 p-3 fs-4 w-2"
                onClick={handleSubmit}
              >
                NEXT
              </Button>
            ) : (
              <Button
                variant="primary"
                className="mt-3 mb-4 p-3 fs-4"
                onClick={handleSubmit}
              >
                No Thanks, NEXT
              </Button>
            )}
          </Row>
        </Form>
      </div>

      <Footer />
    </div>
  );
};

export default LenderPreferences;
