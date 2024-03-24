'use client';

import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

const PropertyUse = () => {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-center text-black mt-4">
        How will this property be used?
      </h1>
      <ul>
        <li className="text-center">
          <Link
            href={'/refinance/lender-preferences'}
            className="text-decoration-none"
          >
            I will live there
          </Link>
        </li>
        <li className="text-center">
          <Link
            href={'/refinance/lender-preferences'}
            className="text-decoration-none"
          >
            {' '}
            It's an investment
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PropertyUse;
