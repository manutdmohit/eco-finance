import React from 'react';
import './Bank.css'; // Import your CSS file for styling

const HomePage = () => {
  // Define an array of image URLs
  const imageUrls = [
    'https://finconnex.com.au/wp-content/uploads/2020/05/Westpac.png',
    'https://finconnex.com.au/wp-content/uploads/2020/05/Suncorp.png',
    'https://finconnex.com.au/wp-content/uploads/2020/05/Pepper.png',
    'https://finconnex.com.au/wp-content/uploads/2020/05/St-George.png',
    'https://finconnex.com.au/wp-content/uploads/2020/05/Resimac.png',
    'https://finconnex.com.au/wp-content/uploads/2020/05/ING.png',
    'https://finconnex.com.au/wp-content/uploads/2020/05/Macquarie.png',
    'https://finconnex.com.au/wp-content/uploads/2020/05/NAB.png',
    'https://finconnex.com.au/wp-content/uploads/2020/05/BOQ.png',
    'https://finconnex.com.au/wp-content/uploads/2020/05/CBA.png',
    'https://finconnex.com.au/wp-content/uploads/2020/05/ANZ-1.png',
    'https://finconnex.com.au/wp-content/uploads/2020/05/Bankwest.png',
  ];

  return (
    <div className="container">
      <div className="image-container">
        {imageUrls.map((imageUrl, index) => (
          <div className="image-wrapper" key={index}>
            <img src={imageUrl} alt={`Image ${index}`} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
