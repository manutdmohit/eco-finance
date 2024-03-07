'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import './CreditGuide.css';

import { data } from './Data';

const Lenders = () => {
  return (
    <Container>
      {data.map((item, index) => (
        <Row
          key={index}
          className="border-top border-bottom border-white d-flex justify-content-center align-items-center row"
        >
          <Col className="text-center">{item.company}</Col>
          <Col className="text-center">{item.bank}</Col>
          <Col className="text-center">{item.direct_bank}</Col>
          <Col className="text-center">{item.assistance}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default Lenders;
