import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './WhyChooseUs.css';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <Container>
        <h2>&quot;Why Choose Us&quot;</h2>
        <Row>
          <Col md={6}>
            <div className="why-choose-us-image-container">
              <img
                src="/assets/why-choose-us-1.jpg"
                alt="Image 1"
                className="img-fluid equal-image"
              />
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column">
            <p>
              We are committed to ensuring that your home-buying experience is
              smooth and straightforward, turning your dreams into reality.
            </p>
            <p>
              From the initial stages of your property search, we simplify the
              complexities of finance options for you.
            </p>
            <p>
              When you are ready to purchase, we will expertly navigate you
              through the entire home loan application process.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="why-choose-us-image-container">
              <img
                src="/assets/why-choose-us-2.jpg"
                alt="Image 2"
                className="img-fluid equal-image"
              />
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column">
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} />{' '}
                <strong>Experienced Team:</strong> Our experts have extensive
                experience in mortgages.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />{' '}
                <strong>Tailored Solutions:</strong> We create personalized
                mortgage plans based on your needs.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />{' '}
                <strong>Outstanding Service:</strong> We provide top-notch
                support from start to finish, making your mortgage process
                smooth and stress-free.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="solution-container">
              <img
                src="/assets/why-choose-us-4.jpg"
                alt="Image 2"
                className="img-fluid equal-image"
              />
            </div>
            <div className="why-us-para">
              <p>
                At Eco-Finance & Home Loans, we understand the significance of
                purchasing a home as a pivotal milestone and investment in your
                life. Our dedicated experts are committed to providing tailored
                service, steadfast support, and expert guidance throughout every
                phase of your home-buying experience.
              </p>
              <p>
                When addressing your financial needs, we work closely to empower
                you to make well-informed and confident decisions. Our
                client-focused approach ensures a deep understanding of your
                requirements and objectives, offering a comprehensive overview
                of the lending landscape.
              </p>
              <p>
                Recognizing that your initial home loan may not be your last, we
                act as your trusted finance specialist, guiding you through the
                intricacies of borrowing options and property acquisition. By
                engaging our services, you benefit from access to a devoted
                specialist who prioritizes your interests. Through our
                expertise, mortgage brokers connect you with diverse lenders,
                ultimately saving you valuable time and resources.
              </p>
              <p>
                As your personal and financial circumstances evolve, such as
                changes in employment, interest rate fluctuations, shifts in
                lender offerings, or economic dynamics, the importance of
                reviewing your financial decisions remains paramount. We
                recommend regular financial assessments to ensure that your loan
                product aligns with your current situation. Moreover, leveraging
                the equity in your property for strategic investments and future
                financial planning can bolster your long-term financial
                stability.
              </p>
              <p>
                Our dedication to you extends beyond the initial home loan,
                considering you a lifelong client and addressing your immediate
                and future needs. Be assured that your best interests are always
                at the core of our services, now and in the years ahead.
              </p>
              <p>
                Before providing any personal information on this website,
                please check our credit guide{' '}
                <a href="/credit-guide" className="text-white">
                  link
                </a>{' '}
                and privacy policy{' '}
                <a href="/privacy-policy" className="text-white">
                  link
                </a>
                .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
