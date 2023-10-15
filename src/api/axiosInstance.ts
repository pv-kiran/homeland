import axios, { AxiosInstance } from "axios";

export const axiosRapidAPIInstance: AxiosInstance = axios.create({
  baseURL: `https://bayut.p.rapidapi.com`,
});

axiosRapidAPIInstance.interceptors.request.use(
  (request) => {
    request.headers["X-RapidAPI-Key"] = import.meta.env.VITE_REACT_APP_API_KEY;
    request.headers["X-RapidAPI-Host"] = `bayut.p.rapidapi.com`;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
