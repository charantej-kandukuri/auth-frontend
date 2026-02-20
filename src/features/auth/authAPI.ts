import api from "../../app/api/axios";

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data.data;
};

export const getMe = async () => {
  const response = await api.get("/auth/me");
  return response.data.user;
};

export const logout = async () => {
  await api.post("/auth/logout");
};
