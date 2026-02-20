import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { logout } from "./features/auth/authSlice.ts";
import { setupInterceptors } from "./app/api/axios.ts";

setupInterceptors(() => {
  // store.dispatch(logout());
  globalThis.location.href = "/login";
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
