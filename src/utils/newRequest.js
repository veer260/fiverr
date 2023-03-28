import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverrapp.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
