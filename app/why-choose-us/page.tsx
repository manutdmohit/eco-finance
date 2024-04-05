// import React from 'react';
// import TopBar from '../components/Top/top';
// import Wrapper from '../components/Wrapper/wrapper';
// import WhyChooseUsSection from '../components/WhyChooseUs/WhyChooseUs';
// import Footer from '../components/Footer/Footer';
// import Header from '../components/Header';

// const WhyChooseUsPage = () => {
//   return (
//     <>
//       <Header />
//       <WhyChooseUsSection />
//       <Footer />
//     </>
//   );
// };

// export default WhyChooseUsPage;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

import styles from './WhyChooseUs.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const WhyChooseUsSection: React.FC = () => {
  return (
    <div>
      <Header />
      <section className={styles.whyChooseUsSection}>
        <Container>
          <h2 className={styles.sectionHeading}>Why Choose Us</h2>
          <Row className={styles.featureRow}>
            <Col md={6} className={styles.featureCol}>
              <div className={styles.imageContainer}>
                <Image
                  src="/assets/why-choose-us-1.jpg"
                  alt="Image 1"
                  layout="responsive"
                  width={800}
                  height={600}
                  className={styles.image}
                />
              </div>
            </Col>
            <Col
              md={6}
              className={`${styles.featureCol} d-flex flex-column justify-content-center`}
            >
              <p className={styles.sectionParagraph}>
                We are committed to ensuring that your home-buying experience is
                smooth and straightforward, turning your dreams into reality.
              </p>
              <p className={styles.sectionParagraph}>
                From the initial stages of your property search, we simplify the
                complexities of finance options for you.
              </p>
              <p className={styles.sectionParagraph}>
                When you are ready to purchase, we will expertly navigate you
                through the entire home loan application process.
              </p>
            </Col>
          </Row>
          <Row className={styles.featureRow}>
            <Col md={6} className={`${styles.featureCol} order-md-2`}>
              <div className={styles.imageContainer}>
                <Image
                  src="/assets/why-choose-us-2.jpg"
                  alt="Image 2"
                  layout="responsive"
                  width={800}
                  height={600}
                  className={styles.image}
                />
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              className={`${styles.featureCol} order-md-1 d-flex flex-column justify-content-center`}
            >
              <ul className={`${styles.featureList} d-flex flex-column`}>
                <li className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`${styles.checkIcon} me-2`}
                  />
                  <strong>Experienced Team:</strong> Our experts have extensive
                  experience in mortgages.
                </li>
                <li className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`${styles.checkIcon} me-2`}
                  />
                  <strong>Tailored Solutions:</strong> We create personalized
                  mortgage plans based on your needs.
                </li>
                <li className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`${styles.checkIcon} me-2`}
                  />
                  <strong>Outstanding Service:</strong> We provide top-notch
                  support from start to finish, making your mortgage process
                  smooth and stress-free.
                </li>
              </ul>
            </Col>
          </Row>
          <Row className={styles.solutionRow}>
            <Col md={12}>
              <div className={styles.solutionContainer}>
                <Image
                  src="/assets/why-choose-us-4.jpg"
                  alt="Image 2"
                  layout="responsive"
                  width={1200}
                  height={800}
                  className={styles.image}
                />
              </div>
              <div className={styles.whyUsContent}>
                <p className={styles.sectionParagraph}>
                  At Eco-Finance & Home Loans, we understand the significance of
                  purchasing a home as a pivotal milestone and investment in
                  your life. Our dedicated experts are committed to providing
                  tailored service, steadfast support, and expert guidance
                  throughout every phase of your home-buying experience.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default WhyChooseUsSection;
