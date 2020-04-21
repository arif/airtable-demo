// import Vue from 'vue';
import axios from 'axios';
// import httpStatus from '@/utils/http-status';

// eslint-disable-next-line
export const airtable = axios.create({
  baseURL: process.env.VUE_APP_API_AIRTABLE_URI,
});

function getConfig(config) {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${process.env.VUE_APP_AIRTABLE_API_KEY}`;
  return config;
}

// Add a request interceptor.
airtable.interceptors.request.use(
  (config) => getConfig(config),
  (error) => Promise.reject(error),
);

// Add a response interceptor.
airtable.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
