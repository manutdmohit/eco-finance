'use client';
'use strict'; // Use 'use strict' for better JavaScript error handling

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { Container } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure the CSS is imported for toast styling

import './ApplicantContactDetails.css';

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form overflow-hidden">
      <ToastContainer />
      <Container style={{ marginTop: '7rem', marginBottom: '2rem' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchParamsProvider />
        </Suspense>
      </Container>
    </div>
  );
};

const SearchParamsProvider = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  // Get all query parameters as an object
  const params = Object.fromEntries(searchParams);

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      to: 'saudmohit@gmail.com',
      subject: 'Subject of the email',
      name,
      email,
      phone,
      address,
      ...params,
    };

    try {
      // Send POST request to the backend
      await axios.post('http://localhost:8000/api/send-email', data);

      // Show success message
      toast.success('Email sent successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');

      // Redirect to the homepage or any other page
      router.replace('/');
    } catch (error) {
      // Show error message if request fails
      toast.error('Failed to send email', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
    <div
      className="bg-white p-5 rounded shadow "
      style={{ marginTop: '100px', marginBottom: '50px' }}
    >
      <div className="container mt-2">
        <h2 className="text-center mb-4">
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
    </div>
  );
};

export default ContactForm;
