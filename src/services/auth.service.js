import api from "./api";
const API_URL = import.meta.env.VITE_BASE_URL + "/auth";

const register = async (username, password) => {
  return await api.pose(API_URL + "/register", { username, password });
};

cons;
