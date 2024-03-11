// Services.tsx

import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

import './Service.css';
import TopBar from '../components/Top/top';
import Wrapper from '../components/Wrapper/wrapper';
import Footer from '../components/Footer/Footer';

interface ServiceItemProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Service: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Wrapper />

      <section id="services" className="services-section">
        <Container>
          <h2 className="text-black">Our Services</h2>
          <p className="services-description">
            At our financial institution, we pride ourselves on offering a wide
            array of services tailored to meet the unique financial needs of
            individuals and businesses alike. Our comprehensive range of
            financial services is designed to support you at every stage of your
            financial journey, from securing your dream home to expanding your
            business, and from planning for your retirement to managing your
            investments.
          </p>
          <p className="services-description">
            Whether you're looking for a home loan to finance your dream home,
            an investment loan to explore new opportunities, or a refinance loan
            to lower your monthly payments, we have the expertise and resources
            to help you find the perfect solution. Our team of financial
            advisors is committed to providing personalized advice and
            solutions, ensuring that you have the tools and information you need
            to make informed decisions about your financial future.
          </p>
          <p className="services-description">
            Beyond home and investment loans, we also offer a variety of other
            services to cater to different needs. From construction loans to
            business loans, commercial loans to personal loans, and car loans to
            SMSF home loans, our services are designed to support a wide range
            of financial goals. We believe in empowering our clients with the
            knowledge and tools they need to achieve their financial objectives,
            whether they're short-term or long-term.
          </p>
          <p className="services-description">
            At our financial institution, we're not just about providing loans;
            we're about building relationships. We understand that financial
            decisions are personal, and we're here to support you every step of
            the way. Our goal is to make the financial process as smooth and
            stress-free as possible, so you can focus on what's important to
            you. Whether you're a first-time homebuyer, a small business owner,
            or someone looking to secure a loan for a major purchase, we're here
            to help.
          </p>

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
      <Footer />
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
