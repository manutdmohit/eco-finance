import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faHandsHelping,
  faChartLine,
  faCalculator,
  faHandshake,
  faSyncAlt,
  faHardHat,
  faBriefcase,
  faBuilding,
  faUser,
  faCar,
} from '@fortawesome/free-solid-svg-icons';

import './Introduction.css'; // Import custom CSS for additional styling

const Introduction = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="hero-heading">
              Welcome to Eco Finance &amp Home Loans
            </h1>
            <p className="hero-text">
              At Eco Finance &amp Home Loans, we understand that financial
              decisions can be overwhelming. Thats why we're here to simplify
              the process and empower you to achieve your goals with confidence.
            </p>
            <p className="hero-text">
              Whether you're dreaming of buying your first home, renovating your
              current one, or investing in real estate, we offer a wide range of
              mortgage options tailored to your unique needs.
            </p>
            <p className="hero-text">
              Our team of experienced professionals is dedicated to providing
              personalized guidance and support at every stage of your journey.
            </p>
            <Button variant="primary" size="lg" className="hero-button">
              Contact Us
            </Button>
          </Col>
          <Col md={6}>
            <img src="/money-3.jpg" alt="Home Loans" className="hero-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Introduction;
