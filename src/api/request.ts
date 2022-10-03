/* API REQUEST
   ========================================================================== */

import axios, { AxiosError } from "axios";

import { IBaseErrorResponse } from "./interfaces";
import { getFromSessionStorage } from "utils/functions";

/**
 * Authenticated Request Interceptors config
 */
export const requestWithJwt = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 10000,
  withCredentials: false,
});

requestWithJwt.interceptors.request.use(async (config) => {
  const refreshToken = getFromSessionStorage<string | null>("refresh-token");

  return {
    ...config,
    headers: {
      Authorization: `Bearer ${refreshToken || ""}`,
      ...config.headers,
    },
  };
});

requestWithJwt.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<IBaseErrorResponse>) => {
    if (!error.response || !error.response?.data) {
      return Promise.reject({
        code: "Unknown",
        status: 500,
        message: "Server error",
      });
    }
    return Promise.reject({
      ...error.response?.data,
    });
  },
);

/**
 * Non-authenticated Request Interceptors config
 */
export const requestWithoutJwt = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 10000,
  withCredentials: false,
});

requestWithoutJwt.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<IBaseErrorResponse>) => {
    return Promise.reject({
      ...error.response?.data,
    });
  },
);
