import axios from "axios";
import { getAuthHeader } from "../utils/auth";

const API_USERNAME = process.env.REACT_APP_API_USERNAME;
const API_PASSWORD = process.env.REACT_APP_API_PASSWORD;

if (!API_USERNAME || !API_PASSWORD) {
  console.error("API credentials are missing.");
}

const authHeader = getAuthHeader(API_USERNAME, API_PASSWORD);

const axiosInstance = axios.create({
  baseURL: "https://api.cloud251.com",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = authHeader;
  console.log(config);
  return config;
});

export default axiosInstance;
