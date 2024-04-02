'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServicesSubMenuProps {
  showServicesSubMenu: boolean;
}

const ServicesSubMenu: React.FC<ServicesSubMenuProps> = ({
  showServicesSubMenu,
}) => {
  return (
    <div
      className={`services-submenu  ${showServicesSubMenu ? 'show' : ''}`}
      style={{ position: 'absolute' }}
    >
      <ul className="sub-menu">
        <li className="menu-item">
          <Link
            href="#"
            className="text-decoration-none text-black submenu-link"
          >
            Home Loans & Investment Loans
          </Link>
        </li>
        <li className="menu-item">
          <Link
            href="#"
            className="text-decoration-none text-black submenu-link"
          >
            Refinance & Construction Loans
          </Link>
        </li>
        <li className="menu-item">
          <Link
            href="#"
            className="text-decoration-none text-black submenu-link"
          >
            Business & Commercial Loans
          </Link>
        </li>
        <li className="menu-item">
          <Link
            href="#"
            className="text-decoration-none text-black submenu-link"
          >
            Personal & Car Loans
          </Link>
        </li>
        <li className="menu-item">
          <Link
            href="#"
            className="text-decoration-none text-black submenu-link"
          >
            SMSF Home Loans
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Header: React.FC = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
    setShowServicesSubMenu(false); // Close ServicesSubMenu when Services link is clicked
  };

  const toggleServicesSubMenu = () => {
    setShowServicesSubMenu(!showServicesSubMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="logo-toggler-container">
          <Link href="/" className="navbar-brand">
            <Image
              width={150}
              height={150}
              // src="https://res.cloudinary.com/manutdmohit/image/upload/ECO_FINANCE_LOGO_ryqruv.png"
              src="/assets/eco-removed.png"
              // src="/assets/ecologo.png"
              alt="logo"
              sizes="(max-width: 430px) 50vw, 430px"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSubMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className={`collapse navbar-collapse ${showSubMenu ? 'show' : ''}`}
        >
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{
              backgroundColor: ' #0a5466',
              marginTop: 'px',
            }}
          >
            <li className="nav-item">
              <Link href="/" className="nav-link px-4">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle px-4"
                href="#"
                onClick={toggleServicesSubMenu}
              >
                Services
              </Link>
              <ServicesSubMenu showServicesSubMenu={showServicesSubMenu} />
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4" href="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4" href="/calculators">
                Calculators
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4" href="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
