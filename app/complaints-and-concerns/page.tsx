'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './ComplaintsAndConcerns.css';
import Footer from '../components/Footer/Footer';
import TopBar from '../components/Top/top';
import Wrapper from '../components/Wrapper/wrapper';

const ComplaintsAndConcerns = () => {
  return (
    <div>
      <TopBar />
      <Wrapper />
      <Container className="complaints-container">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Header>
                <h2>Complaints and Concerns</h2>
              </Card.Header>
              <Card.Body>
                <p className="text-black">
                  At Eco-Finance & Home Loans, we always work hard to build
                  strong and lasting relationships with our valued customers. By
                  listening to your feedback, not only can we address any
                  immediate concerns you may have, we will also continually
                  improve our products and services.
                </p>
                <p className="text-black">
                  We know there are times when you may wish to compliment us on
                  something we have done well and other times when you may wish
                  to tell us we have not met your expectations.
                </p>
                <h3>Compliments</h3>
                <p className="text-black">
                  Our representatives are always delighted to know that they
                  have succeeded in making your experience a pleasant and
                  successful one. If one of our representatives has provided you
                  with exceptional service in any way, please let us know using
                  the details below, so that we can further encourage them via
                  this feedback process.
                </p>
                <p className="text-black">
                  You can email feedback to us at{' '}
                  <a href="mailto:info@ecofinanceandhomeloans.com.au">
                    info@ecofinanceandhomeloans.com.au
                  </a>{' '}
                  and we would be delighted to hear from you.
                </p>
                <h3>Concerns</h3>
                <p className="text-black">
                  If, for any reason, you do not feel that you have received the
                  highest standard of care from us, we likewise encourage you to
                  share this with us. We have in place a process that we believe
                  makes it easy for you to tell us your concerns and for them to
                  be addressed quickly and fairly.
                </p>
                <p className="text-black">
                  You can contact us by whichever of the following means best
                  suits you:
                </p>
                <ul className="text-black">
                  <li
                    className="text-black
                 text-decoration-none "
                  >
                    Complaints Handling Officer
                  </li>
                  <li className="text-black">Mobile: 0421561785</li>
                  <li className="text-black">
                    Email:{' '}
                    <a href="mailto:info@ecofinanceandhomeloans.com.au">
                      info@ecofinanceandhomeloans.com.au
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ComplaintsAndConcerns;
