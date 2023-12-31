import axios from "axios";

export const API = axios.create({
  //   baseURL: "http://localhost:5000/api/v1",
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const setAuthToken = (token: string) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
