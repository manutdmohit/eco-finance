// import React from 'react';
// import Link from 'next/link';

// import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';

// import './WhyChooseUs.css';

// import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// const WhyChooseUsSection: React.FC = () => {
//   return (
//     <section className="why-choose-us-section">
//       <Container>
//         <h2 className="fs-1">
//           <FaQuoteLeft /> Why Choose Us <FaQuoteRight />
//         </h2>
//         <Row>
//           <Col md={6}>
//             <div className="why-choose-us-image-container">
//               <img
//                 src="/assets/why-choose-us-main.jpg"
//                 alt="Image 2"
//                 className="img-fluid equal-image"
//               />
//             </div>
//           </Col>
//           <Col md={6} className="d-flex flex-column">
//             <ul>
//               <li>
//                 <FontAwesomeIcon icon={faCheck} />{' '}
//                 <strong>Experienced Team:</strong>{' '}
//                 <span className="fs-4">
//                   Our experts have extensive experience in mortgages.
//                 </span>
//               </li>
//               <li>
//                 <FontAwesomeIcon icon={faCheck} />{' '}
//                 <strong>Tailored Solutions:</strong>{' '}
//                 <span className="fs-4">
//                   We create personalized mortgage plans based on your needs.
//                 </span>
//               </li>
//               <li>
//                 <FontAwesomeIcon icon={faCheck} />{' '}
//                 <strong>Outstanding Service:</strong>
//                 <span className="fs-4">
//                   We provide top-notch support from start to finish, making your
//                   mortgage process smooth and stress-free.
//                 </span>
//               </li>
//             </ul>
//             <Link href="/why-choose-us">
//               <button
//                 className="btn btn-primary text-white"
//                 style={{
//                   padding: '10px 20px',
//                 }}
//               >
//                 READ MORE
//               </button>
//             </Link>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default WhyChooseUsSection;

// WhyChooseUs.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './WhyChooseUs.module.css';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className={styles.whyChooseUsSection}>
      <Container>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <Row>
          <Col md={6} className={styles.imageContainer}>
            <Image
              src="/assets/why-choose-us-main.jpg"
              alt="Image 2"
              width={500}
              height={500}
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <ul>
              <li className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <strong>Experienced Team:</strong>{' '}
                  <span>
                    Our experts have extensive experience in mortgages.
                  </span>
                </div>
              </li>
              <li className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <strong>Tailored Solutions:</strong>{' '}
                  <span>
                    We create personalized mortgage plans based on your needs.
                  </span>
                </div>
              </li>
              <li className={styles.listItem}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <strong>Outstanding Service:</strong>{' '}
                  <span>
                    We provide top-notch support from start to finish, making
                    your mortgage process smooth and stress-free.
                  </span>
                </div>
              </li>
            </ul>
            <Link href="/why-choose-us">
              <button className={`btn btn-primary ${styles.readMoreBtn}`}>
                READ MORE
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
