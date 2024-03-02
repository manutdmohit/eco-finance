import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Service.css';

interface ServiceItemProps {
  image: string; // Change the type to string
  title: string;
  description: string;
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
            />
            <ServiceItem
              image="./assets/investment-loans.jpg"
              title="Investment Loans"
              description="Discover investment opportunities and grow your wealth with our investment services."
            />
            <ServiceItem
              image="./assets/refinance-loans.jpg"
              title="Refinance Loans"
              description="Refinance your existing mortgage to lower your monthly payments or take advantage of lower interest rates."
            />
            <ServiceItem
              image="./assets/construction-loans.jpg
          "
              title="Construction Loans "
              description="Secure financing for your construction project and turn your dream home into a reality."
            />
            <ServiceItem
              image="./assets/business-loans.jpg"
              title="Business Loans"
              description="Explore financing options for your business and fuel its growth and expansion."
            />
            <ServiceItem
              image="./assets/commerical-loans.jpg"
              title="Commercial Loans"
              description="Obtain financing for commercial properties, real estate projects, and more."
            />
            <ServiceItem
              image="./assets/personal-loans.jpg"
              title="Personal Loans"
              description="Get personalized financial advice and solutions tailored to your individual needs and goals."
            />
            <ServiceItem
              image="./assets/car-loans.jpg"
              title="Car Loans"
              description="Finance your next car purchase with our competitive auto loan options."
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
}) => {
  return (
    <Col md={6}>
      <div className="service-item">
        <div className="row border-red-100">
          <div className="col-md-4">
            <div className="img-container">
              <img src={image} alt={title} className="service-icon" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="description-container">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Service;
