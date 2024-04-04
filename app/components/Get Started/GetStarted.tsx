'use client';

import dotenv from 'dotenv';
dotenv.config();

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import styles from './GetStarted.module.css';

import { submitForm } from '@/api/submitForm';

interface FormData {
  type: string;
  email: string;
}

const GetStarted: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    type: 'join',
    email: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // const response = await axios.post(`${url}/send-email`, formData);

      const response = await submitForm(formData);

      console.log(response);

      console.log('Form submitted successfully');
      toast.success('Email submitted successfully!');
      setFormData({ type: 'join', email: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className={styles.getStartedSection}>
      <ToastContainer />
      <div className={styles.backgroundImageContainer}>
        <Image
          src="/assets/background.jpg"
          alt="Background Image"
          fill
          className={styles.backgroundImage}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Get started with Eco Finance and Home Loans
            </h2>
            <p className={styles.description}>
              Subscribe and find super attractive price quotes from us. <br />
              Find your loan deals
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
                <button type="submit" className={styles.joinButton}>
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
