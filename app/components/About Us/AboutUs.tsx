'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import './AboutUs.css';

import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Form,
} from 'react-bootstrap';
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

import './AboutUs.css';

const LandingPage = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      {/* About Section */}
      <section id="about" className="about-section">
        <Container>
          <h2>About Us</h2>
          <Row>
            <Col md={6}>
              <p>
                Eco Finance & Home Loans is a company dedicated to providing
                mortgage and financial services that empower individuals and
                families to achieve their homeownership and financial goals.
              </p>
              <p>
                Our mission is to offer transparent, personalized guidance and
                innovative solutions to our clients. We believe in making
                affordable and sustainable housing accessible to everyone, and
                we are committed to helping our clients succeed on their journey
                towards financial prosperity.
              </p>
            </Col>
            <Col md={6}>
              <p>
                At Eco Finance & Home Loans, integrity, transparency, and
                customer satisfaction are our core values. We aim to build
                trusting relationships with our clients, providing them with the
                support and expertise they need to make informed decisions about
                their financial future.
              </p>
              <p>
                Whether your&apos;e a first-time homebuyer, an investor, or a
                business owner, wer&apos;e here to assist you every step of the
                way. Contact us today to learn more about our services and how
                we can help you achieve your financial goals.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <Container>
          <Row>
            <Col>
              <h2>Contact Us</h2>
              <p>
                Have questions or need assistance? Feel free to reach out to us.
                Our team is here to help you.
              </p>
              <Link href="/contact-us">
                <Button variant="primary">Contact Us</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">{/* Content */}</footer>
    </div>
  );
};

export default LandingPage;
