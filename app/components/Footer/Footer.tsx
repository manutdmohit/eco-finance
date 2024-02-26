import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { facebook } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer section-space80 mb-0">
      <div className="container">
        {/* Footer Top */}
        {/* <div className="row align-items-center p-4">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="footer-logo my-auto">
              <img src="" alt="Footer Logo" />
            </div>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="row align-items-center">
              <div className="col-md-5 d-flex align-items-center">
                <h3 className="newsletter-title align-items-center my-auto">
                  Subscribe To Us
                </h3>
              </div>
              <div className="col-md-7">
                <div className="newsletter-form my-auto">
                  <form
                    action="/"
                    method="post"
                    className="d-flex align-items-center"
                  >
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="newsletter"
                        placeholder="Your email address"
                        required
                        name="ne"
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                          Join
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* End Footer Top */}

        {/* Divider Line */}
        <hr className="dark-line" />

        {/* Footer Bottom */}
        <section className="wpb_row vc_row-fluid">
          <div className="container">
            <div className="row">
              {/* Left Section */}
              <div className="col-md-6">
                <div className="widget-text mt40">
                  <p className="mt-auto">
                    Our goal at Eco Finance and Home Loans is to find you the
                    best possible mortgage rates, loan interest and terms in the
                    market. Whether you’re a buyer or business owner looking to
                    purchase, loan or refinance in Australia, contact us to find
                    out about our fixed and variable rate offers today!
                  </p>
                  <p className="address-text">
                    39 George Street, Rockdale NSW 2216
                  </p>
                  <p className="call-text">
                    <a href="tel:0421561785">
                      <i className="icon-phone-call icon-1x"></i>0421561785
                    </a>
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-md-6">
                <div className="widget-footer mt40">
                  <div className="row">
                    <div className="col-sm-4">
                      <ul className="listnone">
                        <li>
                          <a href="/">
                            <MdKeyboardArrowRight /> Home
                          </a>
                        </li>
                        <li>
                          <a href="/loan-products/">
                            <MdKeyboardArrowRight /> Services
                          </a>
                        </li>
                        <li>
                          <a href="/about-us/">
                            <MdKeyboardArrowRight /> About Us
                          </a>
                        </li>
                        <li>
                          <a href="/blog/">
                            <MdKeyboardArrowRight /> Blog
                          </a>
                        </li>
                        <li>
                          <a href="/resources/">
                            <MdKeyboardArrowRight /> Resources
                          </a>
                        </li>
                        <li>
                          <a href="/contact-us/">
                            <MdKeyboardArrowRight /> Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4">
                      <ul className="listnone">
                        <li>
                          <a href="/loan/car-loan/">
                            <MdKeyboardArrowRight /> Car Loan
                          </a>
                        </li>
                        <li>
                          <a href="/loan/personal-loan/">
                            <MdKeyboardArrowRight /> Personal Loan
                          </a>
                        </li>
                        <li>
                          <a href="/loan/business-loan-2/">
                            <MdKeyboardArrowRight /> Business Loan
                          </a>
                        </li>
                        <li>
                          <a href="/loan/home-loan/">
                            <MdKeyboardArrowRight /> Home Loan
                          </a>
                        </li>
                        <li>
                          <a href="/loan/equipment-finance/"></a>
                          <MdKeyboardArrowRight /> Equipment{' '}
                          <span className="finance">Finance</span>
                        </li>
                        <li>
                          <a href="/loan/low-doc-loan/">
                            <MdKeyboardArrowRight /> Low Doc Loan
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4">
                      <ul className="listnone">
                        <li>
                          <a
                            href="https://www.facebook.com/finconnexloans"
                            target="_blank"
                            rel="noopener"
                          >
                            <FaFacebook /> Facebook
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/finconnex/"
                            target="_blank"
                            rel="noopener"
                          >
                            <FaLinkedin /> Linkedin
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/Finconnex1"
                            target="_blank"
                            rel="noopener"
                          >
                            <FaTwitter /> Twitter
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/finconnex/"
                            target="_blank"
                            rel="noopener"
                          >
                            <FaInstagram /> Instagram
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Footer Bottom */}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
