import Link from 'next/link';

import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="text-light py-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <section className="footer-column mb-4">
              <h3>About Us</h3>
              <p id="about-us-desc">
                Our goal at Eco Finance and Home Loans is to find you the best
                possible mortgage rates, loan interest and terms in the market.
                Whether you’re a buyer or business owner looking to purchase,
                loan or refinance in Australia, contact us to find out about our
                fixed and variable rate offers today!
              </p>
            </section>
          </div>
          <div className="col-lg-3 col-md-6">
            <section className="footer-column mb-4">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link href="/" style={{ textDecoration: 'none' }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-lg-3 col-md-6">
            <section className="footer-column mb-4">
              <h3>Loans</h3>
              <ul>
                <li>
                  <Link href="/home-loans">Home</Link>
                </li>
                <li>
                  <Link href="/investment-loans">Investment</Link>
                </li>
                <li>
                  <Link href="/refinance-loans">Refinance</Link>
                </li>
                <li>
                  <Link href="/construction-loans">Construction</Link>
                </li>
                <li>
                  <Link href="/business-loans">Business</Link>
                </li>
                <li>
                  <Link href="/commerical-loans">Commerical</Link>
                </li>
                <li>
                  <Link href="/personal-loans">Personal</Link>
                </li>
                <li>
                  <Link href="/car-loans">Car</Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-lg-3 col-md-6">
            <section className="footer-column mb-4" id="contact">
              <h3>Contact Us</h3>
              <p>Address: 39 George Street, Rockdale NSW 2216l</p>
              <p>
                <a href="mailto:ecofinance23@gmail.com">
                  Email: ecofinance23@gmail.com
                </a>
              </p>
              <p>
                <a href="tel: 0421561785">Phone: 0421561785</a>
              </p>
            </section>
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

      <p className="text-center mt-5">
        © {new Date().getFullYear()} Eco Finance and Home Loans. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
