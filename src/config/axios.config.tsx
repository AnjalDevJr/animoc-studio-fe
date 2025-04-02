import axios, { AxiosError, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 30000,
  timeoutErrorMessage: "Server timed out",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface customAxiosResponse {
  detail?: any;
  data?: any;
  message: string;
  status: string;
  options: any;
}

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    throw error.response;
  }
);

export default axiosInstance;
