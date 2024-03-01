import './Top.css';

import {
  FaPhoneAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="container-fluid top-bar d-flex justify-content-center align-items-center">
      {/* <!-- top-bar --> */}
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-none d-lg-block">
            <p className="mail-text">
              <a href="https://www.rba.gov.au/" target="_blank" rel="noopener">
                <strong>RBA Cash Rate:</strong> 4.35%{' '}
                <strong>Inflation:</strong> 4.1%
              </a>
            </p>
          </div>
          <div className="col-md-3 d-none d-lg-block">
            <p className="mail-text text-center">
              <a href="tel:0421561785">
                <FaPhoneAlt id="phone" /> Call us at 0421561785
              </a>
            </p>
          </div>
          <div className="col-md-3 d-none d-lg-block">
            <p className="mail-text text-center">
              <FaClock id="clock" /> Mon to Fri 10:00 am - 06:00 pm
            </p>
          </div>
          <div className="col-md-2 d-none d-lg-block">
            <p className="mail-text text-center">MFAA&nbsp; 673747334</p>
          </div>
          {/* Spacer column */}
          <div className="col-md-1 d-none d-lg-none"></div>
          <div className="col-lg-12 text-center d-lg-none social-icons">
            {/* Show on devices below lg breakpoint */}
            <div className="social-icons-container">
              <FaFacebook className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaLinkedin className="social-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
