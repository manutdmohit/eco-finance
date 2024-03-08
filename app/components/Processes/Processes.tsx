import React from 'react';
import './Processes.css'; // Ensure this CSS file exists and contains your styles

const Process = () => {
  return (
    <section className="process-section">
      <div className="container">
        <h2 className="section-title text-white mb-2">
          How Eco Finance & Home Loans Work?
        </h2>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3 className="step-title text-white mb-2">Initial Conversation</h3>
            <ul className="step-details">
              <li className="text-white mb-2">
                Phone or face-to-face conversation with our expert broker.
              </li>
              <li className="text-white mb-2">
                Discuss your situation, needs, and objectives behind getting a
                home loan.
              </li>
              <li className="text-white mb-2">
                Analyse your information to provide you with the best plans and
                get your work done quickly.
              </li>
            </ul>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3 className="step-title">Collecting Information and Documents</h3>
            <ul className="step-details">
              <li className="text-white mb-2">
                Require supporting documents such as your ID, pay slips, and
                bank statements.
              </li>
              <li className="text-white mb-2">
                By giving us all supporting documents in one go, it allows us to
                give you a quick and accurate assessment.
              </li>
            </ul>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3 className="step-title">Preliminary Assessment</h3>
            <ul className="step-details">
              <li className="text-white mb-2">
                Complete a preliminary assessment of your situation after
                receiving your application and supporting documents.
              </li>
              <li className="text-white mb-2">
                Identify any possible problems from a lending point of view.
              </li>
            </ul>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3 className="step-title">Submit To A Lender</h3>
            <ul className="step-details">
              <li className="text-white mb-2">
                Prepare your application and upload it into the lender’s system
                or application portal.
              </li>
              <li className="text-white mb-2">
                Submit your application on the lender’s system and email your
                supporting documents to the lender.
              </li>
            </ul>
          </div>
        </div>
        <div className="section-footer">
          <a href="/loan-products" className="view-loans-btn">
            View Our Loans
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
