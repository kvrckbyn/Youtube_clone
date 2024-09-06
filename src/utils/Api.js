import axios from "axios";

const api = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': ''
      }
    });
    export default api;
