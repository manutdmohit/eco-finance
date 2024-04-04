'use server';

import axios from 'axios';

const url = process.env.BACKEND_URL;

export const submitForm = async (formData: any) => {
  const response = await axios.post(`${url}/send-email`, formData);

  return response;
};
