import React from 'react';
import Link from 'next/link';

import './Top.css';

import {
  FaPhoneAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="container-fluid top-bar d-flex justify-content-center align-items-center">
      {/* <!-- top-bar --> */}
      <div className="container">
        <div className="row">
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

          {/* Spacer column */}
          <div className="col-md-1 d-none d-lg-none"></div>
          <div className="col-lg-12 text-center d-lg-none social-icons">
            {/* Show on devices below lg breakpoint */}
            <div className="social-icons-container">
              <Link
                href="https://www.facebook.com/profile.php?id=61555013854956"
                target="_blank"
                className="text-decoration-none"
              >
                <FaFacebook className="social-icon" />
              </Link>
              <FaInstagram className="social-icon" />
              <FaTwitter className="social-icon" />
              <Link
                href="https://www.tiktok.com/@ecofinanceandhomeloans"
                target="_blank"
                className="text-decoration-none"
              >
                <FaTiktok className="social-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
