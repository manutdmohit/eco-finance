import React from 'react';
import Link from 'next/link';

import {
  FaPhone,
  FaFileAlt,
  FaCheckCircle,
  FaPaperPlane,
} from 'react-icons/fa';

import './Processes.css';

const Process = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center text-black mb-4">
        How Eco Finance & Home Loans Works?
      </h2>

      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <FaPhone className="mb-3" fill="blue" />
              <h5 className="card-title">Initial Conversation</h5>
              <ul className="list-unstyled">
                <li className="text-black">
                  Phone or face-to-face conversation with our expert broker.
                </li>
                <li className="text-black">
                  Discuss your situation, needs, and objectives behind getting a
                  home loan.
                </li>
                <li className="text-black">
                  Analyse your information to provide you with the best plans
                  and get your work done quickly.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <FaFileAlt className="mb-3" fill="blue" />
              <h5 className="card-title">
                Collecting Information and Documents
              </h5>
              <ul className="list-unstyled">
                <li className="text-black">
                  Require supporting documents such as your ID, pay slips, and
                  bank statements.
                </li>
                <li className="text-black">
                  By giving us all supporting documents in one go, it allows us
                  to give you a quick and accurate assessment.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <FaCheckCircle className="mb-3" fill="blue" />
              <h5 className="card-title">Preliminary Assessment</h5>
              <ul className="list-unstyled">
                <li className="text-black">
                  Complete a preliminary assessment of your situation after
                  receiving your application and supporting documents.
                </li>
                <li className="text-black">
                  Identify any possible problems from a lending point of view.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 mb-4
        "
        >
          <div className="card">
            <div className="card-body text-center">
              <FaPaperPlane className="mb-3" fill="blue" />
              <h5 className="card-title">Submit To A Lender</h5>
              <ul className="list-unstyled">
                <li className="text-black">
                  Prepare your application and upload it into the lender’s
                  system or application portal.
                </li>
                <li className="text-black">
                  Submit your application on the lender’s system and email your
                  supporting documents to the lender.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link href="./services" className="btn btn-primary">
          View Our Loans
        </Link>
      </div>
    </section>
  );
};

export default Process;
