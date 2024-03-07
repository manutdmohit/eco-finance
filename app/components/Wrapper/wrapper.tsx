'use client';

import React, { useState } from 'react';

import { CiMenuBurger } from 'react-icons/ci';
import { MdOutlineArrowDropDown, MdArrowDropUp } from 'react-icons/md';

import './wrapper.css';

const ulElements = (
  handleClick: any,
  isClicked: Boolean,
  handleAboutUsOpen: any,
  aboutUsopen: Boolean
) => {
  return (
    <ul className="d-sm-block d-lg-none">
      <li>Home</li>
      <li>
        Services
        {isClicked ? (
          <MdArrowDropUp onClick={handleClick} />
        ) : (
          <MdOutlineArrowDropDown onClick={handleClick} />
        )}
        {isClicked && (
          <ul>
            <li>Home Loans & Investment Loans</li>
            <li> Refinance & Construction Loans</li>
            <li> Business & Commercial Loans</li>
            <li> Personal & Car Loans</li>
          </ul>
        )}
      </li>
      <li>
        About Us{' '}
        {aboutUsopen ? (
          <MdArrowDropUp onClick={handleAboutUsOpen} />
        ) : (
          <MdOutlineArrowDropDown onClick={handleAboutUsOpen} />
        )}
        {aboutUsopen && (
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Testinomials</li>
          </ul>
        )}
      </li>
      <li>Contact Us</li>
    </ul>
  );
};

export const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState); // Toggle isClicked
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState); // Toggle isClicked
  };

  const [aboutUsOpen, setAboutUsOpen] = useState(false);

  const handleAboutUsOpen = () => {
    setAboutUsOpen((prevState) => !prevState);
  };

  return (
    <div className="navigation-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div id="navigation" className="">
              <div id="menu-button"></div>
              <div id="mega-menu-wrap-primary" className="mega-menu-wrap">
                <div className="mega-menu-toggle">
                  <div className="mega-toggle-blocks-right">
                    <div
                      className="mega-toggle-block mega-menu-toggle-block mega-toggle-block-1 "
                      id="mega-toggle-block-1"
                    >
                      <span
                        className="mega-toggle-label"
                        role="button"
                        aria-expanded="false"
                      >
                        <span className="mega-toggle-label-closed">MENU</span>
                        <span
                          className="mega-toggle-label-open "
                          onClick={handleClick}
                        >
                          <CiMenuBurger />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <ul
                  id="mega-menu-primary"
                  className="mega-menu max-mega-menu mega-menu-horizontal d-none d-lg-block"
                  data-event="hover_intent"
                  data-effect="fade_up"
                  data-effect-speed="200"
                  data-effect-mobile="slide"
                  data-effect-speed-mobile="200"
                  data-mobile-force-width="false"
                  data-second-click="go"
                  data-document-click="collapse"
                  data-vertical-behaviour="accordion"
                  data-breakpoint="600"
                  data-unbind="true"
                  data-mobile-state="collapse_all"
                  data-hover-intent-timeout="300"
                  data-hover-intent-interval="100"
                >
                  <li
                    className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-home mega-current-menu-item mega-page_item mega-page-item-1611 mega-current_page_item mega-align-bottom-left mega-menu-grid mega-menu-item-1626"
                    id="mega-menu-item-1626"
                  >
                    <a
                      className="mega-menu-link animsition-link"
                      href="/home"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-align-bottom-left mega-menu-flyout mega-menu-item-6603 has-sub"
                    id="mega-menu-item-6603"
                  >
                    <span className="submenu-button"></span>
                    <a
                      className="mega-menu-link animsition-link"
                      href="/smsf-property-investment/"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Services
                      <span
                        className="mega-indicator"
                        data-has-click-event="true"
                      ></span>
                    </a>
                    <ul className="mega-sub-menu">
                      <li
                        className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6604"
                        id="mega-menu-item-6604"
                      >
                        <a
                          className="mega-menu-link animsition-link"
                          href="/smsf-property-investment/"
                        >
                          Home Loans & Investment Loans
                        </a>
                      </li>
                      <li
                        className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6604"
                        id="mega-menu-item-6604"
                      >
                        <a
                          className="mega-menu-link animsition-link"
                          href="/smsf-property-investment/"
                        >
                          Refinance & Construction Loans
                        </a>
                      </li>
                      <li
                        className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6604"
                        id="mega-menu-item-6604"
                      >
                        <a
                          className="mega-menu-link animsition-link"
                          href="/smsf-property-investment/"
                        >
                          Business & Commercial Loans
                        </a>
                      </li>
                      <li
                        className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6604"
                        id="mega-menu-item-6604"
                      >
                        <a
                          className="mega-menu-link animsition-link"
                          href="/smsf-property-investment/"
                        >
                          Personal & Car Loans
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <li
                    className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-align-bottom-left mega-menu-flyout mega-menu-item-6603 has-sub"
                    id="mega-menu-item-6603"
                  >
                    <span className="submenu-button"></span>
                    <a
                      className="mega-menu-link animsition-link"
                      href="/smsf-property-investment/"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      SMSF
                      <span
                        className="mega-indicator"
                        data-has-click-event="true"
                      ></span>
                    </a>
                    <ul className="mega-sub-menu">
                      <li
                        className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6604"
                        id="mega-menu-item-6604"
                      >
                        <a
                          className="mega-menu-link animsition-link"
                          href="/smsf-property-investment/"
                        >
                          SMSF Property Investment
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-1792"
                    id="mega-menu-item-1792"
                  >
                    <a
                      className="mega-menu-link animsition-link"
                      href="/resources/"
                    >
                      Resources
                    </a>
                  </li>
                  <li
                    className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-align-bottom-left mega-menu-flyout mega-menu-item-1653 has-sub"
                    id="mega-menu-item-1653"
                  >
                    <span className="submenu-button"></span>
                    <a
                      className="mega-menu-link animsition-link"
                      href="/loancalculator/"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Loan Calculators
                      <span
                        className="mega-indicator"
                        data-has-click-event="true"
                      ></span>
                    </a>
                    <ul className="mega-sub-menu">
                      <li
                        className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-1479"
                        id="mega-menu-item-1479"
                      >
                        <a
                          className="mega-menu-link animsition-link"
                          href="/monthly-repayment-calculator/"
                        >
                          EMI Calculator
                        </a>
                      </li>
                      <li
                        className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-1506"
                        id="mega-menu-item-1506"
                      >
                        <a
                          className="mega-menu-link animsition-link"
                          href="/loan-eligibility-calculator/"
                        >
                          Borrowing Power Calculator
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li
                    className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-1483"
                    id="mega-menu-item-1483"
                  >
                    <a className="mega-menu-link animsition-link" href="/blog/">
                      Blog
                    </a>
                  </li> */}
                  <li
                    className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-align-bottom-left mega-menu-flyout mega-menu-item-6603 has-sub"
                    id="mega-menu-item-6603"
                  >
                    <span className="submenu-button"></span>
                    <a
                      className="mega-menu-link animsition-link"
                      href="/about-us/"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      About Us
                      <span
                        className="mega-indicator"
                        data-has-click-event="true"
                      ></span>
                    </a>
                    <ul className="mega-sub-menu">
                      <li
                        className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6604"
                        id="mega-menu-item-6604"
                      >
                        <a
                          className="mega-menu-link animsition-link"
                          href="/smsf-property-investment/"
                        >
                          About Us
                        </a>
                      </li>
                      <li
                        className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6604"
                        id="mega-menu-item-6604"
                      >
                        <a
                          className="mega-menu-link animsition-link"
                          href="/our-team/"
                        >
                          Our Team
                        </a>
                      </li>
                      <li
                        className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6604"
                        id="mega-menu-item-6604"
                      >
                        <a
                          className="mega-menu-link animsition-link"
                          href="/testimonials/"
                        >
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-1486"
                    id="mega-menu-item-1486"
                  >
                    <a
                      className="mega-menu-link animsition-link"
                      href="/contact-us/"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>{' '}
            </div>
            {isClicked &&
              ulElements(
                handleOpen,
                isOpen,
                handleAboutUsOpen,
                aboutUsOpen
              )}{' '}
            {/* Conditionally render ulElements */}
            {/* <!-- /.navigation start--> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Wrapper = () => {
  return (
    <div id="sticky-wrapper" className="sticky-wrapper">
      <div className="header-2 sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-xs-6">
              {/* <!-- logo --> */}
              <div className="logo">
                <a href="/">
                  <img src="./logo.png" alt="Eco Finance And Home Loans" />
                </a>
              </div>
            </div>
            {/* <!-- logo --> */}
            <div className="col-md-9 text-right d-flex justify-content-end align-items-center">
              <div className="header-action ">
                <a
                  href="/loan-calculator/"
                  className="btn btn-default header-button loan-calc"
                >
                  Loan Calculators
                </a>
                <a
                  href="/contact-us/"
                  className="btn btn-default header-button call-now"
                >
                  Get A Callback
                </a>{' '}
              </div>
              <div className="test"></div>
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default Wrapper;
