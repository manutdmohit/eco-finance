'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Disclaimer = () => {
  return (
    <div className="overflow-hidden">
      <Container
        className="disclaimer-container"
        style={{ marginTop: '160px', marginBottom: '100px' }}
      >
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Header>
                <h2>Disclaimer</h2>
              </Card.Header>
              <Card.Body>
                <p className="text-black">
                  The information provided on this site is on the understanding
                  that it is for illustrative and discussion purposes only.
                  Whilst all care and attention is taken in its preparation any
                  party seeking to rely on its content or otherwise should make
                  their own enquiries and research to ensure its relevance to
                  your specific personal and business requirements and
                  circumstances. Terms, conditions, fees and charges may apply.
                  Normal lending criteria apply. Rates subject to change.
                  Approved applicants only.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Disclaimer;
