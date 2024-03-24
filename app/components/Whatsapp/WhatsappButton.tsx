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
        src="https://res.cloudinary.com/drtm8uqcp/image/upload/whatsapp_l9ulbp.png"
        alt="whatsapp"
        className="img-fluid whatsapp-button"
      />
    </Link>
  );
};

export default WhatsappButton;
