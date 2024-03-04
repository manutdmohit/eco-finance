import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaQuestion,
  FaCheck,
  FaMoneyCheckAlt,
  FaHome,
  FaHandHoldingUsd,
  FaSearch,
  FaUserFriends,
  FaRegBuilding,
  FaRegNewspaper,
} from 'react-icons/fa';

import './Assist.css';

interface AssistanceItemProps {
  icon: JSX.Element;
  title: string;
}

const AssistanceSection: React.FC = () => {
  return (
    <section className="assistance-section">
      <Container>
        <h2>How can we assist you?</h2>
        <p>
          Whether you are a first-time home-buyer, refinancing or an investor
          thinking to purchase a property in Australia, you may have questions
          or uncertainties regarding:
        </p>
        <Row>
          <Col md={6}>
            <AssistanceItem
              icon={<FaQuestion />}
              title="How much can I borrow based on my financial situation?"
            />
            <AssistanceItem
              icon={<FaMoneyCheckAlt />}
              title="Do I need to get a pre-approval?"
            />
            <AssistanceItem
              icon={<FaHome />}
              title="What type of loan is best for me?"
            />
            <AssistanceItem
              icon={<FaRegBuilding />}
              title="What features does the loan come with?"
            />
            <AssistanceItem
              icon={<FaRegNewspaper />}
              title="What fees does the loan have?"
            />
            <AssistanceItem
              icon={<FaSearch />}
              title="How much deposit do I need to buy a house?"
            />
          </Col>
          <Col md={6}>
            <AssistanceItem
              icon={<FaHandHoldingUsd />}
              title="What is the loan process?"
            />
            <AssistanceItem
              icon={<FaUserFriends />}
              title="What will the interest rate be?"
            />
            <AssistanceItem
              icon={<FaCheck />}
              title="What to consider when comparing interest rates?"
            />
            <AssistanceItem
              icon={<FaSearch />}
              title="What will the repayment amount be?"
            />
            <AssistanceItem
              icon={<FaMoneyCheckAlt />}
              title="Is there a fee to make additional repayments?"
            />
            <AssistanceItem
              icon={<FaHome />}
              title="Should I buy a unit or a house?"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <AssistanceItem
              icon={<FaRegBuilding />}
              title="Should I buy off the plan or established home?"
            />
            <AssistanceItem icon={<FaSearch />} title="Where should I buy?" />
            <AssistanceItem
              icon={<FaHandHoldingUsd />}
              title="How can I find the right property?"
            />
          </Col>
          <Col md={6}>
            <AssistanceItem
              icon={<FaRegNewspaper />}
              title="What factors should I consider when selecting an investment property?"
            />
            <AssistanceItem
              icon={<FaUserFriends />}
              title="We have enough deposit, but we are not permanent residents/citizens, Can we still purchase a house in Australia?"
            />
            <AssistanceItem
              icon={<FaHome />}
              title="Should I invest in an old or new house?"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <AssistanceItem
              icon={<FaRegBuilding />}
              title="What are the government grants and stamp duty exemptions?"
            />
          </Col>
          <Col md={6}>
            <AssistanceItem
              icon={<FaMoneyCheckAlt />}
              title="Why should I refinance my home loan and when is the right time to do so?"
            />
          </Col>
        </Row>
        <p>
          Our team of experienced mortgage professionals is dedicated to
          assisting you at every stage of the mortgage process.
        </p>
      </Container>
    </section>
  );
};

const AssistanceItem: React.FC<AssistanceItemProps> = ({ icon, title }) => {
  return (
    <div className="assistance-item">
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
    </div>
  );
};

export default AssistanceSection;
