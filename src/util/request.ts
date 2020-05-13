import axios from 'axios';


const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://localhost:8001' : 'http://localhost:8001';
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

service.interceptors.request.use((config: any) => {
  config.headers['Content-Type'] = 'application/json; charset=UTF-8';
  let token = localStorage.getItem('token');
  if(token){
    config.headers['token'] = token;
  }
  return config;
}, (error: any) => {
  Promise.reject(error);
});

service.interceptors.response.use((response: any) => {
  const res = response.data;
  if (res.code === -2) {
    localStorage.removeItem('token');
    return false;
  }
  return res;
}, (error: any) => {
  console.log(error);
  return Promise.reject(error)
});

export default service;
