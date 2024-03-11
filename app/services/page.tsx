// Services.tsx

import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

import './Service.css';

interface ServiceItemProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Service: React.FC = () => {
  return (
    <div>
      <section id="services" className="services-section">
        <Container>
          <h2>Our Services</h2>
          <Row>
            <ServiceItem
              image="/assets/home-loans.jpg"
              title="Home Loans"
              description="Explore our range of mortgage options to find the perfect solution for your home financing needs."
              link="/contact-us"
            />
            <ServiceItem
              image="/assets/investment-loans.jpg"
              title="Investment Loans"
              description="Discover investment opportunities and grow your wealth with our investment services."
              link="/contact-us"
            />
            <ServiceItem
              image="/assets/refinance-loans.jpg"
              title="Refinance Loans"
              description="Refinance your existing mortgage to lower your monthly payments or take advantage of lower interest rates."
              link="/contact-us"
            />
          </Row>
          <Row>
            <ServiceItem
              image="/assets/construction-loans.jpg"
              title="Construction Loans"
              description="Secure financing for your construction project and turn your dream home into a reality."
              link="/contact-us"
            />
            <ServiceItem
              image="/assets/business-loans.jpg"
              title="Business Loans"
              description="Explore financing options for your business and fuel its growth and expansion."
              link="/contact-us"
            />
            <ServiceItem
              image="/assets/refinance-loans.jpg"
              title="Commercial Loans"
              description="Obtain financing for commercial properties, real estate projects, and more."
              link="/contact-us"
            />
          </Row>
          <Row>
            <ServiceItem
              image="/assets/personal-loans.jpg"
              title="Personal Loans"
              description="Get personalized financial advice and solutions tailored to your individual needs and goals."
              link="/contact-us"
            />
            <ServiceItem
              image="/assets/car-loans.jpg"
              title="Car Loans"
              description="Finance your next car purchase with our competitive auto loan options."
              link="/contact-us"
            />
            <ServiceItem
              image="/assets/smsf-home-loans.jpg"
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

// Updated ServiceItem component
const ServiceItem: React.FC<ServiceItemProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <Col xs={12} md={4} lg={4} className="mb-5">
      <Link href={link} passHref className="text-decoration-none">
        <div className="service-item text-decoration-none">
          <div className="img-container img-fluid">
            <img src={image} alt={title} className="service-icon" />
          </div>
          <div className="description-container text-decoration-none">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default Service;
