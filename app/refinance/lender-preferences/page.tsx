'use client';

import React, { useState, FormEvent, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import './LenderPreferences.css';

const LenderPreferences: React.FC = () => {
  return (
    <div className="d-flex vh-100 bg-light lender-container">
      <Container>
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
  const loanAmount = params.get('loanAmount');
  const rate = params.get('rate');
  const selectedOption = params.get('selectedOption');
  const expiryDate = params.get('expiryDate');
  const propertyValue = params.get('propertyValue');
  const purpose = params.get('purpose');
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
      `/refinance/credit-history?type=${type}&loanAmount=${loanAmount}&rate=${rate}&selectedOption=${selectedOption}&expiryDate=${expiryDate}&propertyValue=${propertyValue}&purpose=${purpose}&propertyUse=${propertyUse}&choosingALender=${selectedOptions.join(
        ', '
      )}`
    );
  };

  return (
    <div className="bg-white p-5 rounded shadow" style={{ marginTop: '9rem' }}>
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
