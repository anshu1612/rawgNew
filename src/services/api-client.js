import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2f4e95dd16c345b08c88a45442b64381",
  },
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = (config) =>
    axiosInstance.get(this.endpoint,config).then((res) => res.data);
}

export default APIClient;
