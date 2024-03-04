'use client';

import React, { useState, useEffect } from 'react';
import people from './Data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

import './Review.css';

interface Person {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
}

const Review: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, 5000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []); // Empty dependency array to run once when mounted

  const { name, job, image, text }: Person = people[index];

  const nextPerson = (): void => {
    setIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const prevPerson = (): void => {
    setIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
  };

  return (
    <article className="review">
      <h2>Our Reviews</h2>
      <div className="underline"></div>
      <div className="images-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
