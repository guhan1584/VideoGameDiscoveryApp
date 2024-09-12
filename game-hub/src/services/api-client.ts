import axios from "axios";

export interface FetchingResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f160a4ae347d454d973b4d259df00e96",
  },
});
