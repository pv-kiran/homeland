import axios, { AxiosInstance } from "axios";

export const axiosRapidAPIInstance: AxiosInstance = axios.create({
  baseURL: `https://bayut.p.rapidapi.com`,
});

axiosRapidAPIInstance.interceptors.request.use(
  (request) => {
    request.headers["X-RapidAPI-Key"] =
      "f8685c8d8cmsh14b744eb92d18adp16b28djsn9c51006ac44";
    request.headers["X-RapidAPI-Host"] = `bayut.p.rapidapi.com`;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
