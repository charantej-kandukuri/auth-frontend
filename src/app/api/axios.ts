import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  withCredentials: true,
});

let isRefreshing = false;

api.interceptors.request.use((config) => {
  return config;
});

export const setupInterceptors = (onLogout: () => void) => {
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      console.log("originalRequest :", originalRequest);

      // ❌ If no response → network error
      if (!error.response) {
        throw error;
      }

      // ❌ If refresh itself fails → logout
      if (originalRequest.url === "/refresh") {
        // onLogout();
        throw error;
      }

      // ✅ Handle 401
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          if (!isRefreshing) {
            isRefreshing = true;

            await api.post("/auth/refresh");

            isRefreshing = false;
          }

          return api(originalRequest); // retry original request
        } catch (err) {
          isRefreshing = false;
          // onLogout(); // session expired
          console.error(err);
          throw error;
        }
      }

      throw error;
    },
  );
};

export default api;
