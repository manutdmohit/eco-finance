'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AboutUsSection.css'; // Ensure this path is correct
import TopBar from '../components/Top/top';
import Wrapper from '../components/Wrapper/wrapper';
import Footer from '../components/Footer/Footer';

const AboutUsSection = () => {
  return (
    <div>
      <TopBar />
      <Wrapper />
      <section className="about-us-section">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="section-title">About Us</h2>
              <p className="section-description">
                At Eco Finance & Home Loans, we understand that financial
                decisions can be overwhelming. Our aim is to simplify the
                process and help you achieve your goals confidently.
              </p>
              <p className="section-description">
                We strive to make home financing easier to understand so you can
                make informed decisions about your financial future. Our
                services are tailored to meet your needs, offering various home
                loan options such as residential, first home buyer, refinancing,
                property investment, house and land packages, commercial loans,
                and vehicle financing. We also provide advice on self-managed
                super funds invested in properties. Additionally, we provide
                complimentary services like property research, inspections, and
                negotiation assistance to our clients.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={6} md={6} sm={12}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src="./assets/image4.png"
                  alt="First Image"
                />
                <Card.Body>
                  <Card.Title>Our Services</Card.Title>
                  <Card.Text>
                    We offer a wide range of financial services to help you
                    achieve your financial goals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src="./assets/image3.png"
                  alt="Second Image"
                />
                <Card.Body>
                  <Card.Title>Expert Team</Card.Title>
                  <Card.Text>
                    Our experienced team is here to provide personalized support
                    and guidance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUsSection;
