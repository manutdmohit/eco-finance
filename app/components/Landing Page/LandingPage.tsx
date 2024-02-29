'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

import './LandingPage.css';

const LandingPage = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header-section">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="#">
              <img
                src="logo.png"
                alt="Eco Finance & Home Loans"
                height={'100vw'}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" onClick={toggleNav}>
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarNav" className={showNav ? 'show' : ''}>
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container>
          <h1>Welcome to Eco Finance & Home Loans</h1>
          <p>
            At Eco Finance & Home Loans, we understand that financial decisions
            can be overwhelming. That's why we're here to simplify the process
            and empower you to achieve your goals with confidence. Whether
            you're dreaming of buying your first home, renovating your current
            one, or investing in real estate, we offer a wide range of mortgage
            options tailored to your unique needs.
          </p>
          <p>
            Our team of experienced professionals is dedicated to providing
            personalized guidance and support at every stage of your journey.
            From pre-approval to closing, we'll be by your side, ensuring a
            smooth and stress-free experience. With our commitment to
            transparency, integrity, and customer satisfaction, you can trust us
            to help you navigate the complexities of the mortgage market and
            make informed decisions that align with your financial objectives.
          </p>
          <p>
            Discover the difference of working with a mortgage company that puts
            your needs first. Contact us today to learn more about our services
            and how we can help you achieve your homeownership and financial
            goals.
          </p>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <Container>
          <h2>Our Services</h2>
          <Row>
            <Col md={4}>
              <div className="service-item">
                <FontAwesomeIcon icon={faHome} className="service-icon" />
                <h3>Home Loans</h3>
                <p>
                  Explore our range of mortgage options to find the perfect
                  solution for your home financing needs.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-item">
                <FontAwesomeIcon icon={faChartLine} className="service-icon" />
                <h3>Investment</h3>
                <p>
                  Discover investment opportunities and grow your wealth with
                  our investment services.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-item">
                <FontAwesomeIcon icon={faSyncAlt} className="service-icon" />
                <h3>Refinance</h3>
                <p>
                  Refinance your existing mortgage to lower your monthly
                  payments or take advantage of lower interest rates.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-item">
                <FontAwesomeIcon icon={faHardHat} className="service-icon" />
                <h3>Construction</h3>
                <p>
                  Secure financing for your construction project and turn your
                  dream home into a reality.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-item">
                <FontAwesomeIcon icon={faBriefcase} className="service-icon" />
                <h3>Business</h3>
                <p>
                  Explore financing options for your business and fuel its
                  growth and expansion.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-item">
                <FontAwesomeIcon icon={faBuilding} className="service-icon" />
                <h3>Commercial</h3>
                <p>
                  Obtain financing for commercial properties, real estate
                  projects, and more.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-item">
                <FontAwesomeIcon icon={faUser} className="service-icon" />
                <h3>Personal</h3>
                <p>
                  Get personalized financial advice and solutions tailored to
                  your individual needs and goals.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-item">
                <FontAwesomeIcon icon={faCar} className="service-icon" />
                <h3>Car</h3>
                <p>
                  Finance your next car purchase with our competitive auto loan
                  options.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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
                Whether you're a first-time homebuyer, an investor, or a
                business owner, we're here to assist you every step of the way.
                Contact us today to learn more about our services and how we can
                help you achieve your financial goals.
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
