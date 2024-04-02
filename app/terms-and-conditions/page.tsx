'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="overflow-hidden">
      <Container
        className="terms-container"
        style={{ marginTop: '120px', marginBottom: '50px' }}
      >
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Header>
                <h1>Terms and Conditions</h1>
              </Card.Header>
              <Card.Body>
                <p className="text-black">
                  Please read these terms and conditions carefully. By accessing
                  this website, you agree to be bound by the terms and
                  conditions below.
                </p>

                <h2>Copyright</h2>
                <p className="text-black">
                  Copyright in the information contained in this site subsists
                  under the Copyright Act 1968 (Cth) and, through international
                  treaties, the laws of many other countries. It is owned by us
                  unless otherwise stated. All rights reserved. You may download
                  a single copy of this document and, where necessary for its
                  use as a reference, make a single hard copy. Except as
                  permitted under the Copyright Act 1968 (Cth) or other
                  applicable laws, no part of this publication may be otherwise
                  reproduced, adapted, performed in public or transmitted in any
                  form by any process (graphic, electronic or mechanical,
                  including photocopying, recording, taping or by storage in an
                  information retrieval system) without our specific written
                  consent.
                </p>
                <h2>General Advice Warning</h2>
                <p className="text-black">
                  The advice contained on this site does not take into account
                  any persons particular objectives, needs or financial
                  situation. Before making a decision regarding the acquisition
                  of a Credit Product, persons should assess whether the advice
                  is appropriate to their objectives, requirements or financial
                  situation. We recommend you obtain advice before acting upon
                  any of the information on this site. No responsibility is
                  taken for persons acting on the information on this site.
                  Persons doing so, do so at their own risk.
                </p>
                <h2>Calculators and Assumptions</h2>
                <p className="text-black">
                  Any calculators available on the site are designed to give you
                  some examples of different financial scenarios, based on
                  stated assumptions and the figures you input. The calculations
                  are intended as estimates only and they are not meant to be
                  kept or used for any practical purpose, or as a substitute for
                  professional financial advice. Any calculators or information
                  provided on our websites are provided for your convenience
                  only and do not constitute either credit or financial advice.
                  Information on our websites has been prepared without
                  consideration of your particular circumstances and should be
                  viewed as generic information only and not as indicating that
                  you should follow a particular course of action.
                </p>
                <p className="text-black">
                  While we have based the information on sources that we believe
                  are reliable and accurate, your actual outcomes will depend on
                  a range of factors outside of our control. You should not rely
                  on these calculators when you are making decisions about
                  lending and/or financing. Instead, you should consider
                  obtaining credit advice from an Authorised Credit
                  Representative.
                </p>
                <h2>Links to Third Party Sites</h2>
                <p className="text-black">
                  Our website may contain links to external websites. While such
                  links are provided for your convenience, you should be aware
                  that the information handling practices of the linked web
                  sites might not be the same as ours. The links do not
                  constitute endorsement of material at those sites or any
                  associated organisation product or service. These external
                  information sources are outside our control. It is the
                  responsibility of users to make their own decisions about the
                  accuracy, currency, reliability and correctness of the
                  information at those sites. By accessing information at or
                  through this site each user waives and releases us to the full
                  extent permitted by law from any and all claims relating to
                  the usage of the material made available through the website.
                  In no event shall we be liable for any incident or
                  consequential damages resulting from use of the material. Each
                  website will have its own privacy policy and security
                  standards and you should check these as we cannot confirm what
                  standards these third party websites may adopt.
                </p>
                <h2>Terms of Use/Governing Law</h2>
                <p className="text-black">
                  The information in this site has been prepared in accordance
                  with Australian law for the supply of goods and services. This
                  notice and the information in this site and all matters
                  relating to either are governed by and are to be construed
                  according to the laws applicable in the State of Western
                  Australia and the Commonwealth of Australia (“Australian
                  law”). The information may not satisfy the laws of any other
                  country. It is not directed at people in any other country and
                  should not be relied on by people in any country other than
                  Australia. The information in this site is current at the date
                  of publication but may be subject to change.
                </p>
                <h2>Limitation of liability</h2>
                <p className="text-black">
                  We do not warrant or represent that the information in this
                  site is free from errors or omissions or is suitable for your
                  intended use. We recommend that you seek independent advice
                  before acting on any information in this site. Subject to any
                  terms implied by law and which cannot be excluded, we accept
                  no responsibility for any loss, damage, cost or expense
                  (whether direct or indirect) incurred by you as a result of
                  any error, omission or misrepresentation in any information on
                  this site.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
