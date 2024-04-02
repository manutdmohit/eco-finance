'use client';

import React, { useState, FormEvent, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';

// import '../loan-purpose/LoanPurpose.css';
// import './LenderPreferences.css';

const LenderPreferences: React.FC = () => {
  return (
    <div className="d-flex vh-100 bg-light">
      <Container
        style={{
          marginTop: '140px',
        }}
      >
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
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-center mb-4">
        Are any of the following important to you when choosing a lender?
      </h2>
      <p className="text-center mb-4">
        You can choose one or more options or can skip
      </p>

      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          {['Offset/Redraw', 'Fixed rate', 'Major lender', 'Mobile app'].map(
            (option, index) => (
              <Col key={index} xs={12} md={6} className="mb-3">
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

          <Col xs={12} className="text-center">
            {selectedOptions.length > 0 ? (
              <Button
                variant="primary"
                className="mt-3 px-4 py-3 fs-5 rounded-pill btn-lg"
                onClick={handleSubmit}
              >
                NEXT
              </Button>
            ) : (
              <Button
                variant="primary"
                className="mt-3 px-4 py-3 fs-5 rounded-pill"
                onClick={handleSubmit}
              >
                No Thanks, NEXT
              </Button>
            )}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default LenderPreferences;
