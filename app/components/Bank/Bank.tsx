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
        Let us find a suitable loan product from our 40+ Lenders Panel that
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
