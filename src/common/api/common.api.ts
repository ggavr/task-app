import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "e325fb0d-b1fb-4bf2-b34b-fc48f4c8f34f",
  },
});
