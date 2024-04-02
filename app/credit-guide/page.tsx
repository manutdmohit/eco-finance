'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import './CreditGuide.css';

import Lenders from './Lender';

const CreateGuidePage = () => {
  return (
    <div>
      <div className="credit-guide-container">
        <Container>
          <Row>
            <Col>
              <h1>About</h1>
              <h4>Licensee:</h4>
              <p>
                Purple Circle Financial Services Pty Ltd holds an Australian
                Credit Licence issued by the Australian Securities and
                Investment Commission (ASIC). We conduct business through a
                network of finance brokers who are appointed as Credit
                Representatives under our Licence.Purple Circle Financial
                Services Pty Ltd is responsible for the advice and conduct of
                your finance broker as set out in this Credit Guide and will
                ensure they always act within your best interests.
              </p>
              <h4>Broker Group:</h4>
              <p>
                Purple Circle Financial Services Pty Ltd has a broker
                arrangement in place with Mortgage Specialists Pty Ltd (“broker
                group”), ACN 050 601 093, Australian Credit Licence No. 387025.
                We obtain mortgage aggregation services from the broker group.
              </p>
              <h4>Credit Representative:</h4>
              <p>
                A “Credit Representative” is a person who has been authorized by
                a credit licensee to engage in specified credit activities on
                our behalf.
              </p>
            </Col>
          </Row>
          <Row className="border-top border-bottom border-black d-flex justify-content-center align-items-center">
            <Col>
              <p className="my-auto">AUTHORIZED CREDIT REPRESENTATIVE</p>
            </Col>
          </Row>
          <Row className="border-top border-bottom border-black d-flex justify-content-center align-items-center">
            <Col>
              <p className="my-auto">Advisor Name</p>
            </Col>
            <Col>
              <p className="my-auto">Anil Poudel</p>
            </Col>
          </Row>
          <Row className="border-top border-bottom border-black d-flex justify-content-center align-items-center">
            <Col>
              <p className="my-auto">Authorized Credit Representative Number</p>
            </Col>
            <Col>
              <p className="my-auto">555483</p>
            </Col>
          </Row>
          <Row className="border-top border-bottom border-black d-flex justify-content-center align-items-center">
            <Col>
              <p className="my-auto">Email</p>
            </Col>
            <Col>
              <p className="my-auto">ecofinance23@gmail.com</p>
            </Col>
          </Row>
          <Row className="border-top border-bottom border-black d-flex justify-content-center align-items-center">
            <Col>
              <p className="my-auto">Phone</p>
            </Col>
            <Col>
              <p className="my-auto">+61 421 561 785</p>
            </Col>
          </Row>
          <Row className="border-top border-bottom border-black mb-4 d-flex justify-content-center align-items-center">
            <Col>
              <p className="my-auto">Address</p>
            </Col>
            <Col>
              <p className="my-auto">
                Unit 203 39-45 George St, ROCKDALE NSW 2216
              </p>
            </Col>
          </Row>
          <Row className="border-top border-bottom border-black d-flex justify-content-center align-items-center">
            <Col>
              <h4 className="my-auto">CREDIT LICENSE DETAILS</h4>
            </Col>
          </Row>
          <Row className="border-top border-bottom border-black d-flex justify-content-center align-items-center">
            <Col>
              <p className="my-auto">Licensee Name</p>
            </Col>
            <Col>
              <p className="my-auto">
                Purple Circle Financial Services Pty Ltd “Us”
              </p>
            </Col>
          </Row>
          <Row className="border-top border-bottom border-black d-flex justify-content-center align-items-center ">
            <Col>
              <p className="my-auto">Australian Credit License Number (ACL)</p>
            </Col>

            <Col>
              <p className="my-auto">486112</p>
            </Col>
          </Row>
          <Row className="border-top border-bottom border-black d-flex justify-content-center align-items-center">
            <Col>
              <p className="my-auto">Licensee ABN</p>
            </Col>
            <Col>
              <p className="my-auto">21 611 305 170</p>
            </Col>
          </Row>
          <h1 className="mt-4">CREDIT GUIDE</h1>
          <p>
            This Credit Guide (CG) provides you with important information about
            us and our Credit Representatives, who may provide you with credit
            services described in the CG.
          </p>
          <p>
            As well as giving you important information that will help you
            decide if you want to use any of these services, it provides
            important information about:
          </p>
          <ul>
            <li>who we (Licensee and our Representatives) are;</li>
            <li>
              the credit services we offer to help you evaluate and make an
              informed decision about whether to use the services described in
              this CG;
            </li>
            <li>
              the remuneration that we and relevant persons receive for the
              services;
            </li>
            <li>any arrangements which may influence our services to you;</li>
            <li>our Privacy Statement and </li>
            <li>
              how we handle your complaints if you are not satisfied with the
              services provided.
            </li>
          </ul>
          <h4>Credit Assistance</h4>
          <p>
            Our Credit Representatives are authorised to engage in credit
            activities including providing credit assistance on behalf of
            Licensee. They can provide you with the following Credit Assistance:
          </p>
          <ul>
            <li>
              Give you information about loan/lease products or related services
            </li>
            <li>
              Consider whether you are eligible for a loan or lease or any
              related service you requested
            </li>
            <li>
              Suggest a suitable credit contract, an increase to your credit
              limit and/or that you retain your existing credit contract
            </li>
            <li>
              Assist you to apply for a credit contract or an increase in your
              credit limit Recommend a suitable consumer lease or to retain your
              existing consumer lease Assist you to apply for a consumer lease.
            </li>
          </ul>
          <h5>Our Responsible Lending obligations to you</h5>
          <p>
            We are obliged to ensure that any loan or increase to a loan we help
            you to obtain or any lease we help you enter is not unsuitable for
            you. To decide this, we will need to ask you some questions in order
            to assess whether the loan or lease is not unsuitable, and within
            your best interests.{' '}
          </p>{' '}
          <p>
            {' '}
            To make this assessment, we must make reasonable enquiries about
            your objectives and requirements and for the credit contract or
            credit limit increase. We must also make reasonable enquiries about
            your financial situation and take reasonable steps to verify this
            information.{' '}
          </p>
          <p>
            It is important that the information you provide us is accurate,
            complete and up to date, as if we proceed on incomplete or incorrect
            information, you may be in breach of your legal obligations to the
            lender.
          </p>
          <p>
            We will not be able to give you Credit Assistance if our assessment
            shows that:
          </p>
          <ul>
            <li>
              you will not be able to meet the proposed repayments without
              substantial hardship, or the loan or lease will not meet your
              objectives and/or requirements.
            </li>
          </ul>
          <p>
            We will prepare a written Statement of Credit Assistance. You can
            ask us for a copy of this Statement any time up to seven years after
            we provide you with Credit Assistance. To request a copy please
            contact us.
          </p>
          <p>We will provide you with a copy:</p>
          <ul>
            <li>
              within seven business days after the day we receive your request,
              provided you make the request within seven years of the date of
              the Preliminary Assessment, or otherwise? within 21 business days
              after the day we receive your request{' '}
            </li>
          </ul>
          <p>
            We have an obligation under the Anti-Money Laundering and Counter
            Terrorism Finance Act 2006 to verify your identity and the source of
            any funds. This means that we will ask you to present identification
            documents such as passport and driver license. We will also retain
            copies of this information. We cannot provide you with Credit
            Assistance if you are unwilling to provide this information.
          </p>
          <h4>Conflicts of Interest / Related Companies</h4>
          <p>
            As a client, you may also be referred to any related or other
            company of which your broker may be a director or representative of,
            such as Accounting, Financial Planning, Real Estate, Insurance or
            Property Development. These industries operate under a different
            authorization structure and the services provided are distinct from
            the services provided under mortgage broking. There is no obligation
            to utilize the referred services offered by your broker and you are
            welcome to compare services to those in the market prior to making
            any commitment.
          </p>
          <p>
            Additionally, we may access various reports via our lenders such as
            credit or property reports. These services are offered free to
            brokers and we believe it does not influence our recommendations.
          </p>
          <p>
            If any potential conflicts are noted during the assessment of the
            information you provided, these will be outlined on the Statement of
            Credit Assistance that will be provided to you prior to lodgement of
            your application to a lender.
          </p>
          <h5>Lenders and Lessons</h5>
          <p>
            Subject to meeting credit criteria, we will be able to assist you to
            obtain loans and leases from a broad range of lenders and lessors
            through our broker group.
          </p>
          <p>
            The following are the lenders or lessors with which our licensee
            conducted the most business during 2022/2023: ANZ, NAB, ST George,
            Macquarie, Westpac, Bankwest.
          </p>
          <p>
            The following are the lenders or lessors with which I conducted the
            most business during 2022/2023:The credit representative commenced
            with Purple Circle Financial Services during this financial year,
            the broker is unable to provide information in respect to the
            previous year's top 6 lenders.
          </p>
          <Row className="border-top border-bottom  border-black ">
            <Col>
              <h5 className="text-center mb-0">LENDERS</h5>
            </Col>
          </Row>
          <Lenders />
          <h5 className="mt-4">Our Fees</h5>
          <p>
            We may charge a fee for providing Credit Assistance. More detail
            about those fees will be set out in a Credit Quote we will give to
            you before we provide you with Credit Assistance.
          </p>
          <h5 className="mt-4">Other Fees and Charges</h5>
          <p>
            You may be charged a lender’s application fee, valuation fees and
            other fees associated with the loan or lease. These fees are not
            charged byPurple Circle Financial Services Pty Ltd or our Credit
            Representative. You should review the disclosure documents and your
            loan contract or lease for further details of any such fees and
            charges
          </p>
          <h5 className="mt-4">Commissions</h5>
          <p>
            Purple Circle Financial Services Pty Ltd has appointed a broker
            group as our agent to receive commissions from lenders and lessors
            and to pay Purple Circle Financial Services Pty Ltd commission in
            relation to loan contracts or leases for which we act as a Credit
            Representative and provide Credit Assistance. The total amount of
            commissionPurple Circle Financial Services Pty Ltd may receive in
            relation to your loan or lease may vary depending on the lender or
            lessor, the term, the features, the amount of the loan or lease you
            ultimately choose and the amount and timing of the repayments that
            you make. Some or all of a commission payment received byPurple
            Circle Financial Services Pty Ltd may be paid to our Credit
            Representatives.
          </p>
          <p>Loan Contracts such as home loans, investment property loans.</p>
          <p>
            Upfront commission payable by lenders in relation to loans is
            calculated as a percentage of the loan amount and is generally in
            the range of 0.5% and 1% of the loan amount. It is usually paid
            after settlement of the loan.
          </p>
          <p>
            Trail commission payable by lenders in relation to loans is
            generally calculated regularly (monthly, quarterly, bimonthly or
            annually) on the outstanding loan balance and is paid in arrears.
            The trail commission payable by lenders is generally in the range of
            0% per annum and 0.30% per annum of the outstanding loan amount.
          </p>
          <h4>Personal Loans</h4>
          <p>
            Upfront commission payable by lenders in relation to personal loans
            is calculated as a percentage of the loan amount and is generally in
            the range of between 1.65% and 2.75% of the loan amount. It is
            usually paid after settlement of the loan.
          </p>
          <p>
            No trail commission is payable by lenders in relation to personal
            loans.
          </p>
          <h4>Leases</h4>
          <p>
            Upfront commission payable by lessors in relation to leases is
            calculated as a percentage of the lease amount and is generally in
            the range of 0.5% and 4% of the lease amount. It is usually paid
            after settlement of the lease. Trail commission is generally not
            payable in relation to leases.
          </p>
          <p>
            Further details of the commission earned by us will be included in
            the Statement of Credit Assistance disclosure document we will
            provide to you at the same time as we provide you with Credit
            Assistance.
          </p>
          <p>
            You can request information from us about the fees or commission
            that we are likely to receive, how they are calculated, and our
            reasonable estimate of the fees or commissions that will be payable.
          </p>
          <h4>Volume Bonus Arrangements</h4>
          <p>
            From time to timePurple Circle Financial Services Pty Ltd, our
            Credit Representatives (or our broker group) may receive a benefit,
            directly by way of cash bonus or additional commissions or
            indirectly by way of training, professional development days or
            sponsorship, if we or our broker group write a particular volume of
            loans offered by those lenders.
          </p>
          <h4>Referral Fees</h4>
          <p>
            We may pay a referral fee (i.e. commission) for third party
            referrals. An example of a referrer would be a real estate agent,
            financial planner, accountant or solicitor. This fee is not payable
            by you.
          </p>
          <p>
            Further information about referral fees, including our reasonable
            estimate of the amount of any fees payable and how it is calculated
            is available from us on request and will be included in the
            Statement of Credit Assistance document we will supply to you when
            we provide you with Credit Assistance.
          </p>
          <p>
            Purple Circle Financial Services Pty Ltd and our Credit
            Representatives may also receive a benefit for referring you to
            other specialist service providers. We will disclose this to you at
            the time we make the referral.
          </p>
          <h4>Ownership</h4>
          <p>
            The broker group provides arm’s-length services to our business
            which include IT systems, loan information and lodgement systems,
            training and development, commission processing, conferences and
            professional development events, and assistance with regulatory and
            compliance obligations. In consideration of the services the broker
            group gives us, we pay fees to the broker group or the broker group
            retains some of the commission our panel lenders pay on loans we
            arrange.{' '}
          </p>
        </Container>
      </div>
    </div>
  );
};

export default CreateGuidePage;
