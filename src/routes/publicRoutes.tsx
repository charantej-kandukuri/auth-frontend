import { Route } from "react-router-dom";
import Unauthorized from "../pages/Unauthorized";
import Login from "../features/auth/Pages/Login";

const PublicRoutes = () => (
  <>
    <Route path="/login" element={<Login />} />;
    <Route path="/unauthorized" element={<Unauthorized />} />;
  </>
);

export default PublicRoutes;
