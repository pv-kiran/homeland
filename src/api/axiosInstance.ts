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

axiosRapidAPIInstance.interceptors.response.use(
  (response) => {
    // there is no detials found for a selected property
    if (response?.data === "") {
      throw new Error("No data found");
    }
    // there is no property found for a selected location
    else if (response?.data != "" && response?.data?.hits?.length === 0) {
      throw new Error("No data found");
    }
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
