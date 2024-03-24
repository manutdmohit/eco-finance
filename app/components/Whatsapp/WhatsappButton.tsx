import React from 'react';
import Link from 'next/link';

import './WhatsAppButton.css';

const number = '+610421561785';

const WhatsappButton = () => {
  const waLink = `https://wa.me/${number}`; // Replace with your number

  return (
    <Link
      href={waLink}
      className="whatsapp-button text-decoration-none font-bold"
    >
      <img
        src="./whatsapp.png"
        alt="whatsapp"
        className="img-fluid whatsapp-button"
      />
    </Link>
  );
};

export default WhatsappButton;
