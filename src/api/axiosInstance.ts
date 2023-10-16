import axios, { AxiosInstance } from "axios";

export const axiosRapidAPIInstance: AxiosInstance = axios.create({
  baseURL: `https://bayut.p.rapidapi.com`,
});

// for globally handling the loading
let setLoadingFunction: React.Dispatch<React.SetStateAction<boolean>>;
// function that accept the function that set up the loading state
export const globalLoadingConfig = (
  loadingFn: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoadingFunction = loadingFn;
};

axiosRapidAPIInstance.interceptors.request.use(
  (request) => {
    request.headers["X-RapidAPI-Key"] = import.meta.env.VITE_REACT_APP_API_KEY;
    request.headers["X-RapidAPI-Host"] = `bayut.p.rapidapi.com`;
    // initiate loading
    if (setLoadingFunction) {
      setLoadingFunction(true);
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosRapidAPIInstance.interceptors.response.use(
  (response) => {
    // stop the loading
    if (setLoadingFunction) {
      setLoadingFunction(false);
    }
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
    return Promise.reject(error);
  }
);
