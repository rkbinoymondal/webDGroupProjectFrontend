import axios from 'axios';

const api = axios.create({
  baseURL: 'https://webdgroupprojectbackend-1.onrender.com',
});

export default api;
