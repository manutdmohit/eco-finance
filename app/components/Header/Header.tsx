'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesSubMenu from './ServicesSubMenu';

const Header: React.FC = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const toggleServicesSubMenu = () => {
    setShowServicesSubMenu(!showServicesSubMenu);
  };

  const closeServicesSubMenu = () => {
    setShowServicesSubMenu(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="logo-toggler-container">
          <Link href="/" className="navbar-brand">
            <Image
              width={150}
              height={150}
              src="/assets/eco-removed.png"
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
            style={{ backgroundColor: '#0a5466' }}
          >
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link px-4"
                onClick={() => {
                  setShowSubMenu(false);
                  closeServicesSubMenu();
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-4"
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  toggleServicesSubMenu();
                }}
              >
                Services
              </a>
              {showServicesSubMenu && (
                <ServicesSubMenu showServicesSubMenu={showServicesSubMenu} />
              )}
            </li>
            <li className="nav-item">
              <Link
                href="/about-us"
                className="nav-link px-4"
                onClick={() => {
                  setShowSubMenu(false);
                  closeServicesSubMenu();
                }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/calculators"
                className="nav-link px-4"
                onClick={() => {
                  setShowSubMenu(false);
                  closeServicesSubMenu();
                }}
              >
                Calculators
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact-us"
                className="nav-link px-4"
                onClick={() => {
                  setShowSubMenu(false);
                  closeServicesSubMenu();
                }}
              >
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
