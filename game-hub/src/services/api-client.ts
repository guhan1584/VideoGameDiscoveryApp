import axios, { AxiosRequestConfig } from "axios";

export interface FetchingResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f160a4ae347d454d973b4d259df00e96",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchingResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
