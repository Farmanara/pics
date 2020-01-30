import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 246aa4c338c30d1a13833dfee7d9b664662ab5d63ab5163b6105e7a426bc028c "
  }
});
