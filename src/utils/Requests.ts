import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 360000,
});

export default service;
