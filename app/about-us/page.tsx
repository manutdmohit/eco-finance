'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './AboutUsSection.module.css';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AboutUsSection = () => {
  return (
    <>
      <section className={styles.aboutUsSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className={`${styles.sectionTitle} + mt-4`}>About Us</h2>
              <p className={styles.sectionDescription}>
                At Eco Finance & Home Loans, we understand that financial
                decisions can be overwhelming. Our aim is to simplify the
                process and help you achieve your goals confidently.
              </p>
              <p className={styles.sectionDescription}>
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
              <p className={styles.sectionDescription}>
                Our experienced team provides personalized support and guidance
                at every step of your journey.
              </p>
            </Col>
          </Row>

          <Row className={styles.cardsRow}>
            <Col lg={6} md={6} sm={12} className={styles.cardColumn}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image
                    src="/assets/image4.png"
                    alt="First Image"
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Our Services</h3>
                  <p className={styles.cardText}>
                    We offer a wide range of financial services to help you
                    achieve your financial goals.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12} className={styles.cardColumn}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image
                    src="/assets/image3.png"
                    alt="Second Image"
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Expert Team</h3>
                  <p className={styles.cardText}>
                    Our experienced team is here to provide personalized support
                    and guidance.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUsSection;
