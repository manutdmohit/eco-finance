import React from 'react';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLinks}>
            <section className={styles.section}>
              <div>
                <ul>
                  <li>
                    <Link href="/home/" className={styles.footerLink}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/complaints-and-concerns/"
                      className={styles.footerLink}
                    >
                      Complaints and Concerns
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs/" className={styles.footerLink}>
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className={styles.footerLinks}>
            <section className={styles.section}>
              <div>
                <ul>
                  <li>
                    <Link
                      href="/terms-and-conditions/"
                      className={styles.footerLink}
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-guide-and-privacy-policy"
                      className={styles.footerLink}
                    >
                      Credit Guide and Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer/" className={styles.footerLink}>
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className={styles.footerLinks}>
            <section className={styles.section}>
              <div>
                <ul>
                  <li className={styles.address}>
                    39 George Street, Rockdale NSW 2216
                  </li>
                  <li>
                    <a
                      href="mailto:info@ecofinanceandhomeloans.com.au"
                      className={styles.footerLink}
                    >
                      info@ecofinanceandhomeloans.com.au
                    </a>
                  </li>
                  <li>
                    <a href="tel:0421561785" className={styles.footerLink}>
                      0421561785
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            Anil Poudel (Credit Representative Number 555483) and Eco Finance &
            Home Loans Pty Ltd ABN 11673747334 (Credit Representative Number
            555484) are credit representatives of Purple Circle Financial
            Services Pty Ltd ABN 21611305170 Australian Credit License Number
            486112.
          </p>
        </div>
      </div>

      <div className={styles.socialIcons}>
        <div className={styles.container}>
          <Link
            href="https://www.facebook.com/profile.php?id=61555013854956"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.socialIcon} />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.socialIcon} />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.socialIcon} />
          </Link>
          <Link
            href="https://www.tiktok.com/@ecofinanceandhomeloans"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className={styles.socialIcon} />
          </Link>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className={styles.container}>
          <strong>
            © {new Date().getFullYear()}{' '}
            <a href="" className={styles.copyrightLink}>
              <span>Eco Finance and Home Loans</span>
            </a>{' '}
          </strong>
          <div className={styles.copyrightText}>All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
