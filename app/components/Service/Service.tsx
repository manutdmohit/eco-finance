'use server';

import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

import './Service.css';
import { link } from 'fs';

interface ServiceItemProps {
  image: string; // Change the type to string
  title: string;
  description: string;
  link: string;
}

const Service: React.FC = () => {
  return (
    <div>
      {/* Services Section */}
      <section id="services" className="services-section">
        <Container>
          <h2>Our Services</h2>
          <Row>
            <ServiceItem
              image="./assets/home-loans.jpg"
              title="Home Loans"
              description="Explore our range of mortgage options to find the perfect solution for your home financing needs."
              link="/contact-us"
            />
            <ServiceItem
              image="./assets/investment-loans.jpg"
              title="Investment Loans"
              description="Discover investment opportunities and grow your wealth with our investment services."
              link="/contact-us"
            />
            <ServiceItem
              image="./assets/refinance-loans.jpg"
              title="Refinance Loans"
              description="Refinance your existing mortgage to lower your monthly payments or take advantage of lower interest rates."
              link="/contact-us"
            />
          </Row>

          <Row>
            <ServiceItem
              image="./assets/construction-loans.jpg
          "
              title="Construction Loans "
              description="Secure financing for your construction project and turn your dream home into a reality."
              link="/contact-us"
            />
            <ServiceItem
              image="./assets/business-loans.jpg"
              title="Business Loans"
              description="Explore financing options for your business and fuel its growth and expansion."
              link="/contact-us"
            />
            <ServiceItem
              image="./assets/commerical-loans.jpg"
              title="Commercial Loans"
              description="Obtain financing for commercial properties, real estate projects, and more."
              link="/contact-us"
            />
          </Row>

          <Row>
            <ServiceItem
              image="./assets/personal-loans.jpg"
              title="Personal Loans"
              description="Get personalized financial advice and solutions tailored to your individual needs and goals."
              link="/contact-us"
            />
            <ServiceItem
              image="./assets/car-loans.jpg"
              title="Car Loans"
              description="Finance your next car purchase with our competitive auto loan options."
              link="/contact-us"
            />
            <ServiceItem
              image="./assets/smsf-home-loans.jpg"
              title="SMSF Home Loans"
              description="Finance your next car purchase with our competitive auto loan options."
              link="/contact-us"
            />
          </Row>
        </Container>
      </section>
    </div>
  );
};

const ServiceItem: React.FC<ServiceItemProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <Col xs={12} md={12} xl={4} className="mb-5 services">
      <Link href={link} className="text-decoration-none">
        <div className="service-item">
          <div className="">
            <div className="">
              <div className="img-container">
                <img src={image} alt={title} className="service-icon w-1" />
              </div>
            </div>
            <div className="">
              <div className="description-container">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default Service;
