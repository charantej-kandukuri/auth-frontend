import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";

import AppRoutes from "./routes";
import { fetchMe } from "./features/auth/authSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
