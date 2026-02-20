import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";

import AppRoutes from "./routes";
import { fetchMe } from "./features/auth/authSlice";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
