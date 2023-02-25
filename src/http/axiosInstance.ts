import Axios, { AxiosRequestConfig } from "axios";
import { getRefreshAndGetAuthenticationTokenQueryKey } from "../api/auth-controller/auth-controller";

export const AXIOS_INSTANCE = Axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

AXIOS_INSTANCE.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const token = getRefreshAndGetAuthenticationTokenQueryKey();
      return AXIOS_INSTANCE(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const axiosInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  return AXIOS_INSTANCE({ ...config }).then(({ data }) => data);
};

export default axiosInstance;
