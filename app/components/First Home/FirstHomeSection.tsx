import React from 'react';
import Link from 'next/link';

import { Container, Row, Col, Button } from 'react-bootstrap';
import './FirstHomeSection.css'; // Ensure this path is correct

const FirstHomeSection = () => {
  return (
    <section className="first-home-section">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <img
              src="./assets/image.png"
              alt="First Home"
              className="img-fluid"
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h2 className="text-black question">
              Are You Ready to Purchase Your First Home?
            </h2>
            <p className="text-black">
              Purchasing your first home is a significant milestone. It's an
              opportunity to start a new chapter in your life. Whether you're a
              first-time home-buyer or looking to downsize, we're here to guide
              you through the process.
            </p>

            <Link href="/contact-us">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FirstHomeSection;
