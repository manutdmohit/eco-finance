import './wrapper.css';

export const Navigation = () => {
  return (
    <div className="navigation-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div id="navigation" className="">
              <div id="menu-button"></div>
              <div id="mega-menu-wrap-primary" className="mega-menu-wrap">
                <div className="mega-menu-toggle">
                  <div className="mega-toggle-blocks-left"></div>
                  <div className="mega-toggle-blocks-center"></div>
                  <div className="mega-toggle-blocks-right">
                    <div
                      className="mega-toggle-block mega-menu-toggle-block mega-toggle-block-1"
                      id="mega-toggle-block-1"
                    >
                      {/* <span
                            className="mega-toggle-label"
                            role="button"
                            aria-expanded="false"
                          >
                            <span className="mega-toggle-label-closed">
                              MENU
                            </span>
                            <span className="mega-toggle-label-open">MENU</span>
                          </span> */}
                    </div>
                  </div>
                </div>
                <ul
                  id="mega-menu-primary"
                  className="mega-menu max-mega-menu mega-menu-horizontal"
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
                      href="/"
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
            {/* <!-- /.navigation start--> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Wrapper = () => {
  return (
    <div id="sticky-wrapper" className="sticky-wrapper">
      <div className="header-2 sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-xs-6">
              {/* <!-- logo --> */}
              <div className="logo">
                <a href="/">
                  <img
                    src="https://res.cloudinary.com/drtm8uqcp/image/upload/v1708865040/ECO_FINANCE_LOGO_1_tede1x.png"
                    alt="Eco Finance And Home Loans"
                  />
                </a>
              </div>
            </div>
            {/* <!-- logo --> */}
            <div className="col-md-9 text-right d-flex justify-content-end align-items-center">
              <div className="header-action ">
                <a
                  href="/loancalculator/"
                  className="btn btn-primary header-button loan-calc"
                >
                  Loan Calculators
                </a>{' '}
                <a
                  href="/contact-us/"
                  className="btn btn-default header-button call-now"
                >
                  Get A Callback Now
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
