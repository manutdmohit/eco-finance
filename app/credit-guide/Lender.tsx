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
          className="border-top border-bottom border-black d-flex justify-content-center align-items-center row"
        >
          <Col className="text-center lenders-list-text">{item.company}</Col>
          <Col className="text-center lenders-list-text">{item.bank}</Col>
          <Col className="text-center lenders-list-text">
            {item.direct_bank}
          </Col>
          <Col className="text-center lenders-list-text">{item.assistance}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default Lenders;
