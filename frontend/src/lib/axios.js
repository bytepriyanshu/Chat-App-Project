import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://13.127.129.7:5000/api",
  withCredentials: true,
});