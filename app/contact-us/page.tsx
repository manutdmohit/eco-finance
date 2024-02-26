'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

import './contact.css';
import { TopBar } from '../components/Top/top';
import { Wrapper } from '../components/Wrapper/wrapper';
import Footer from '../components/Footer/Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
    // Reset form fields
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      <TopBar />
      <Wrapper />
      {/* Contact Page */}
      <div className="contact-page">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
