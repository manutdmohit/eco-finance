'use client';
'use strict'; // Use 'use strict' for better JavaScript error handling

import React, { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure the CSS is imported for toast styling

import Footer from '@/app/components/Footer/Footer';
import TopBar from '@/app/components/Top/top';
import Wrapper from '@/app/components/Wrapper/wrapper';

import './ApplicantContactDetails.css';

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form overflow-hidden">
      <ToastContainer />

      <TopBar />
      <Wrapper />

      <SearchParamsProvider />

      <Footer />
    </div>
  );
};

const SearchParamsProvider = () => {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');

    // Show success toast and wait for it to finish
    const toastId = toast.success('Your form has been submitted!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

    // Wait for the toast to finish
    await toast.done(toastId);

    // Navigate to the homepage
    router.push('/');
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center text-black">
          One last thing, please provide the following details
        </h2>
        <form onSubmit={handleSubmit} className="contact-form__form">
          <div className="form-group">
            <label htmlFor="name" className="form-label text-black">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label text-black">
              Phone:
            </label>
            <input
              type="tel" // Use 'tel' for phone numbers
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label text-black">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="form-label text-black">
              Address:
            </label>
            <input
              type="text" // Use 'text' for addresses
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary contact-form__submit-btn"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
