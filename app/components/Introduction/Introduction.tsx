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
          <Col md={6}>
            <p className="hero-text fs-4 mt-4 text-white">
              At Eco Finance &amp; Home Loans, we understand that financial
              decisions can be overwhelming. Our aim is to simplify the process
              and help you achieve your goals confidently.{' '}
            </p>
            {/* {/* <p className="hero-text fs-4">
              We strive to make home financing easier to understand so you can
              make informed decisions about your financial future. Our services
              are tailored to meet your needs, offering various home loan
              options such as residential, first home buyer, refinancing,
              property investment, house and land packages, commercial loans,
              and vehicle financing. We also provide advice on self-managed
              super funds invested in properties. Additionally, we provide
              complimentary services like property research, inspections, and
              negotiation assistance to our clients.
            </p> */}
            <p className="hero-text fs-4 text-white">
              Our experienced team provides personalized support and guidance at
              every step of your journey.{' '}
              <Link href="/about-us">
                <button className="btn btn-primary fs-5">READ MORE</button>
              </Link>
            </p>
            <RefinanceAndBuyHome />
          </Col>
          {/* <Col md={5} className="m-auto">
            <BackgroundAnimation />
          </Col> */}

          <Col lg={6} md={6} sm={12} xs={12}>
            <img
              src="./assets/image.png"
              alt="First Home"
              className="img-fluid mt-4 mb-4"
            />
            {/* <h2 className="question text-black mt-4">
              Are You Ready to Purchase Your First Home?
            </h2>
            <p className="text-black fs-4">
              Purchasing your first home is a significant milestone. It's an
              opportunity to start a new chapter in your life. Whether you're a
              first-time home-buyer or looking to downsize, we're here to guide
              you through the process.
            </p> */}

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

export default Introduction;
