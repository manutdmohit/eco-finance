'use client';

import React, { useState } from 'react';

interface FormData {
  experience: string;
  situation: string;
  visaResidencyStatus: string;
  potentialPurchase: string;
  primaryOccupation: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  state: string;
  heardAboutUs: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    experience: '',
    situation: '',
    visaResidencyStatus: '',
    potentialPurchase: '',
    primaryOccupation: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    state: '',
    heardAboutUs: '',
    message: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* left side  */}
          <div className="col-md-6 mb-3">
            {/* Experience */}
            <div className="form-group">
              <label htmlFor="experience">
                What best describes your experience? (Required)
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleSelectChange}
                className="form-control"
                required
              >
                <option value="">Please Select</option>
                <option value="First Home Buyer">First Home Buyer</option>
                <option value="Upgrading to a second property">
                  Upgrading to a second property
                </option>
                <option value="Refinancing existing home loan">
                  Refinancing existing home loan
                </option>
                <option value="Investing in property">
                  Investing in property
                </option>
                <option value="Equity Release">Equity Release</option>
              </select>
            </div>

            {/* Residency Status */}
            <div className="form-group">
              <label htmlFor="visaResidencyStatus">
                What is your Visa/Residency status in Australia? (Required)
              </label>
              <select
                className="form-control"
                id="visaResidencyStatus"
                name="visaResidencyStatus"
                value={formData.visaResidencyStatus}
                onChange={handleSelectChange}
                required
              >
                <option value="">Please Select</option>
                <option value="Australian Citizen or Permanent Resident">
                  Australian Citizen or Permanent Resident
                </option>
                <option value="Applied for permanent residency (on bridging Visa now)">
                  Applied for permanent residency (on bridging Visa now)
                </option>
                <option value="Temporary Residency Visa (491, 482, 489 etc)">
                  Temporary Residency Visa (491, 482, 489 etc)
                </option>
                <option value="Non-resident or Living in overseas">
                  Non-resident or Living in overseas
                </option>
              </select>
            </div>

            {/* Occupation Type  */}
            <div className="form-group col-8">
              <label htmlFor="primaryOccupation">
                What is your primary occupation type? (Required)
              </label>
              <select
                className="form-control"
                id="primaryOccupation"
                name="primaryOccupation"
                value={formData.primaryOccupation}
                onChange={handleSelectChange}
                required
              >
                <option value="">Select Occupation Type</option>
                <option value="Medical Doctor or other specialist health professional">
                  Medical Doctor or other specialist health professional
                </option>
                <option value="Registered Nurses">Registered Nurses</option>
                <option value="Engineer or IT Professional">
                  Engineer or IT Professional
                </option>
                <option value="Health Service Workers (Aged Care, Diability Care support etc)">
                  Health Service Workers (Aged Care, Diability Care support etc)
                </option>
                <option value="Hospitality Professional">
                  Hospitality Professional
                </option>
                <option value="Self Employed (working as a Company Director, or Sole Trader)">
                  Self Employed (working as a Company Director, or Sole Trader)
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="firstName">
                First Name<span className="text-danger">*</span> (Required)
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email<span className="text-danger">*</span> (Required)
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">
                Please select the state you are living (Required)
              </label>
              <select
                className="form-control"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleSelectChange}
                required
              >
                <option value="">Please Select</option>
                <option value="New South Wales">New South Wales</option>
                <option value="Victoria">Victoria</option>
                <option value="Queensland">Queensland</option>
                <option value="Western Australia">Western Australia</option>
                <option value="South Australia">South Australia</option>
                <option value="Tasmania">Tasmania</option>
                <option value="Northern Territory">Northern Territory</option>
                <option value="Australian Capital Territory">
                  Australian Capital Territory
                </option>
              </select>
            </div>

            {/* Other select fields */}
          </div>

          {/* right side */}
          <div className="col-md-6 mb-3">
            {/* Situation */}
            <div className="form-group">
              <label htmlFor="situation">
                What is your situation? (Required)
              </label>
              <select
                className="form-control"
                id="situation"
                name="situation"
                value={formData.situation}
                onChange={handleSelectChange}
                required
              >
                <option value="">Please Select</option>
                <option value="Found a property or signed a contract already">
                  Found a property or signed a contract already
                </option>
                <option value="Actively in the market (Looking to buy in the next 3 months)">
                  Actively in the market (Looking to buy in the next 3 months)
                </option>
                <option value="Preparing and Planning to buy soon (Looking to buy in 3-6 months time) the market looking for property (buying in 0-3 months time)">
                  Preparing and Planning to buy soon (Looking to buy in 3-6
                  months time) the market looking for property (buying in 0-3
                  months time)
                </option>
                <option value="Just exploring options">
                  Just exploring options
                </option>
              </select>
            </div>

            {/* potential purchase/transaction */}
            <div className="form-group">
              <label htmlFor="potentialPurchase">
                What is your potential purchase/transaction?
              </label>
              <select
                className="form-control"
                id="potentialPurchase"
                name="potentialPurchase"
                value={formData.potentialPurchase}
                onChange={handleSelectChange}
                required
              >
                <option value="">Please Select</option>
                <option value="House (Established or Newly built)">
                  House (Established or Newly built)
                </option>
                <option value="Town house / Villa">Town house / Villa</option>
                <option value="Apartment / Unit">Apartment / Unit</option>
                <option value="House and Land packages">
                  House and Land packages
                </option>
                <option value="Off the plan property (unregistered vacant land, apartment etc)">
                  Off the plan property (unregistered vacant land, apartment
                  etc)
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                Last Name<span className="text-danger">*</span> (Required)
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">
                Phone Number<span className="text-danger">*</span> (Required)
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="heardAboutUs">
                How did you hear about us? (Required)
              </label>
              <select
                id="heardAboutUs"
                name="heardAboutUs"
                value={formData.heardAboutUs}
                onChange={handleSelectChange}
                className="form-control"
                required
              >
                <option value="">Please Select</option>
                <option value="Facebook">Facebook</option>
                <option value="Word-of-mouth">Word-of-mouth</option>
                <option value="Website">Website</option>
                <option value="TikTok">TikTok</option>
                <option value="Google">Google</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Webinar">Webinar</option>
                <option value="Existing Clients">Existing Clients</option>
                {/* Add other options as needed */}
              </select>
            </div>

            {/* Other select fields */}
          </div>
        </div>

        <div className="mb-3">
          <h2 className="h4">Your Message</h2>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Request a Call Back
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
