import { BrowserRouter, Routes } from "react-router-dom";
import PublicRoutes from "./publicRoutes";
import ProtectedRoutes from "./protectedRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes()}
        {ProtectedRoutes()}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
