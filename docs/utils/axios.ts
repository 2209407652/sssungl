import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const service = axios.create({
  baseURL: "",
  timeout: 5000,
});

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
    return response;
  },
  (error: any) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    return Promise.reject(error);
  }
);

export default service;
