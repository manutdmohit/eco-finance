import React from 'react';
import Link from 'next/link';

interface ServicesSubMenuProps {
  showServicesSubMenu: boolean;
}

const ServicesSubMenu: React.FC<ServicesSubMenuProps> = ({
  showServicesSubMenu,
}) => {
  return (
    <div
      className={`services-submenu ${showServicesSubMenu ? 'show' : ''}`}
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

export default ServicesSubMenu;
