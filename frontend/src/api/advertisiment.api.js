import axios from "axios";
import { apiUrl } from "../constants/constants";

export const getAdvertisiment = async (id) => {
  const response = await axios.get(`${apiUrl}/api/v1/advertisiment/${id}`);

  return response.data;
}

export const getAdvertisiments = async (payload) => {
  const query = `filters=${JSON.stringify(payload.filters)}&sort=${payload.sort}&skip=${payload.skip}&rows=${payload.rows}&limit=${payload.limit}`;

  const response = await axios.get(`${apiUrl}/api/v1/advertisiment?${query}`, {
    method: 'GET'
  });

  return response.data;
}

export const createAdvertisiment = async (payload) => {
  const advertisiment = {
    name: payload.name,
    description: payload.description,
    price: payload.price,
    mainPhoto: payload.mainPhoto,
    firstPhoto: payload.firstPhoto,
    createdAt: new Date()
  }

  const response = await axios.post(`${apiUrl}/api/v1/advertisiment`, advertisiment);

  return response.data
}

export const updateAdvertisiment = async (payload) => {
  const response = await axios.put(`${apiUrl}/api/v1/advertisiment/${payload.id}`, payload.newValues);

  return response.data;
}
