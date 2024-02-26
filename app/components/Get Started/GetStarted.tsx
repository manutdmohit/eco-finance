import React from 'react';

import './GetStarted.css';

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">
            Get started with Eco Finance & Home Loans
          </span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your loan deal soon
          </span>
          <div className="email-field">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className="join-button">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
