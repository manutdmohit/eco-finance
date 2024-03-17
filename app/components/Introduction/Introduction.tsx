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
import BackgroundAnimation from '../BackgroundAnimation';
import RefinanceAndBuyHome from '../RefinanceAndBuyHome/RefinanceAndBuyHome';

const Introduction = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row>
          <Col md={7}>
            <h1 className="hero-heading">
              Welcome to Eco Finance &amp; Home Loans
            </h1>
            <p className="hero-text">
              At Eco Finance &amp; Home Loans, we understand that financial
              decisions can be overwhelming. Our aim is to simplify the process
              and help you achieve your goals confidently.
            </p>
            <p className="hero-text">
              We strive to make home financing easier to understand so you can
              make informed decisions about your financial future. Our services
              are tailored to meet your needs, offering various home loan
              options such as residential, first home buyer, refinancing,
              property investment, house and land packages, commercial loans,
              and vehicle financing. We also provide advice on self-managed
              super funds invested in properties. Additionally, we provide
              complimentary services like property research, inspections, and
              negotiation assistance to our clients.
            </p>
            <p className="hero-text">
              Our experienced team provides personalized support and guidance at
              every step of your journey.
            </p>
            <RefinanceAndBuyHome />
          </Col>
          <Col md={5} className="m-auto">
            <BackgroundAnimation />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Introduction;
