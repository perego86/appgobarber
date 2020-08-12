import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarberapi.peregoapps.com',
});

export default api;
