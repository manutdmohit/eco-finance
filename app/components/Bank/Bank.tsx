// import React from 'react';
// import './Bank.css'; // Import your CSS file for styling

// const Bank = () => {
//   1;
//   // Define an array of image URLs
//   const imageUrls = [
//     'https://finconnex.com.au/wp-content/uploads/2020/05/Westpac.png',
//     'https://finconnex.com.au/wp-content/uploads/2020/05/Suncorp.png',
//     'https://finconnex.com.au/wp-content/uploads/2020/05/Pepper.png',
//     'https://finconnex.com.au/wp-content/uploads/2020/05/St-George.png',
//     'https://finconnex.com.au/wp-content/uploads/2020/05/Resimac.png',
//     'https://finconnex.com.au/wp-content/uploads/2020/05/ING.png',
//     'https://finconnex.com.au/wp-content/uploads/2020/05/Macquarie.png',
//     'https://finconnex.com.au/wp-content/uploads/2020/05/NAB.png',
//     'https://finconnex.com.au/wp-content/uploads/2020/05/BOQ.png',
//     'https://finconnex.com.au/wp-content/uploads/2020/05/CBA.png',
//     'https://finconnex.com.au/wp-content/uploads/2020/05/ANZ-1.png',
//     'https://finconnex.com.au/wp-content/uploads/2020/05/Bankwest.png',
//   ];

//   return (
//     <div className="logos-container">
//       <h2 className="text-center p-4">
//         Let us find a suitable loan product from out 40+ Lenders Panel that
//         aligns with your requirements
//       </h2>
//       <div className="container">
//         <div className="image-container pb-5">
//           {imageUrls.map((imageUrl, index) => (
//             <div className="image-wrapper" key={index}>
//               <img
//                 src={imageUrl}
//                 alt={`Image ${index}`}
//                 className="img-fluid"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bank;

import React from 'react';
import Image from 'next/image';
import styles from './Bank.module.css';

const Bank = () => {
  const imageUrls = [
    '/assets/westpac.png',
    '/assets/suncorp.png',
    '/assets/pepper.png',
    '/assets/st-george.png',
    '/assets/resimac.png',
    '/assets/ing.png',
    '/assets/macquarie.png',
    '/assets/nab.png',
    '/assets/boq.png',
    '/assets/cba.png',
    '/assets/anz.png',
    '/assets/bankwest.png',
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Let us find a suitable loan product from out 40+ Lenders Panel that
        aligns with your requirements
      </h2>
      <div className={styles.imageGrid}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={imageUrl}
              alt={`Image ${index}`}
              width={150}
              height={100}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bank;
