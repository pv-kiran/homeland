import axios, { AxiosInstance } from "axios";

export const axiosRapidAPIInstance: AxiosInstance = axios.create({
  baseURL: `https://bayut.p.rapidapi.com`,
});

axiosRapidAPIInstance.interceptors.request.use(
  (request) => {
    request.headers["X-RapidAPI-Key"] =
      "14b276b135msh0515a60d3d224e8p16c478jsnadaf53717d99";
    request.headers["X-RapidAPI-Host"] = `bayut.p.rapidapi.com`;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
