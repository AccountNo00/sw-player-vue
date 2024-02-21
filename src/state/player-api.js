import axios from "axios";

// MAIN API
const player_api = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API_PLAYER + "/api/",
});

player_api.defaults.headers.common["Accept"] = "application/json";

export default player_api;
