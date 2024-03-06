import React from 'react';

import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <div className="social-links mt-3">
                  <a
                    href="https://www.facebook.com/MustHomePtyLtd/"
                    className="facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>{' '}
                  <a
                    href="https://www.linkedin.com/company/must-home/"
                    className="facebook"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>{' '}
                </div>
              </div>
            </div> */}
            <div className="col-lg-3 col-md-6 footer-links">
              <section id="nav_menu-2" className="widget widget_nav_menu">
                <div className="menu-footer-one-container">
                  <ul id="menu-footer-one" className="menu">
                    <li id="menu-item-143" className="menu-item">
                      <a rel="privacy-policy" href="/privacy-policy/">
                        Privacy Policy
                      </a>
                    </li>
                    <li id="menu-item-144" className="menu-item ">
                      <a href="/complaints-and-concerns/">
                        Complaints and Concerns
                      </a>
                    </li>
                    <li id="menu-item-197" className="menu-item ">
                      <a href="/locations/">Locations</a>
                    </li>
                  </ul>
                </div>
              </section>{' '}
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <section id="nav_menu-3" className="widget widget_nav_menu">
                <div className="menu-footer-two-container">
                  <ul id="menu-footer-two" className="menu">
                    <li id="menu-item-153" className="menu-item">
                      <a href="/credit-guide">Credit Guide</a>
                    </li>
                    <li
                      id="menu-item-150"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-150"
                    >
                      <a href="/disclaimer/">Disclaimer</a>
                    </li>
                  </ul>
                </div>
              </section>{' '}
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <section id="nav_menu-4" className="widget widget_nav_menu">
                <div className="menu-footer-three-container">
                  <ul id="menu-footer-three" className="menu">
                    <li
                      id="menu-item-151"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-151"
                    >
                      <a href="/terms-and-conditions/">Terms and Conditions</a>
                    </li>
                    <li
                      id="menu-item-152"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-152"
                    >
                      <a href="/dispute-resolution/">Dispute Resolution</a>
                    </li>
                  </ul>
                </div>
              </section>{' '}
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <section id="nav_menu-4" className="widget widget_nav_menu">
                <div className="menu-footer-three-container">
                  <ul id="menu-footer-three" className="menu">
                    <li
                      id="menu-item-151"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-151 address"
                    >
                      <p>39 George Street, Rockdale NSW 2216</p>
                    </li>
                    <li
                      id="menu-item-152"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-152"
                    >
                      <p>
                        <a href="mailto:info@ecofinanceandhomeloans.com.au">
                          info@ecofinanceandhomeloans.com.au
                        </a>
                      </p>
                    </li>
                    <li
                      id="menu-item-152"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-152"
                    >
                      <p>
                        <a href="tel: 0421561785">0421561785</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </section>{' '}
            </div>
            <div className="col-lg-12 col-md-12">
              <p className="text-white" id="description">
                Anil Poudel (Credit Representative Number 555483) and Eco
                Finance & Home Loans Pty Ltd ABN 11673747334 (Credit
                Representative Number 555484) are credit representatives of
                Purple Circle Financial Services Pty Ltd ABN 21611305170
                Australian Credit License Number 486112.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-auto">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="col-auto">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter />
            </Link>
          </div>
          <div className="col-auto">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </Link>
          </div>
          <div className="col-auto">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          <strong>
            © {new Date().getFullYear()}{' '}
            <a href="">
              <span>Eco Finance and Home Loans</span>
            </a>{' '}
          </strong>
          <div className="credits">All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
