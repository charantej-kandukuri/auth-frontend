import Login from "../pages/Login";
import { Route } from "react-router-dom";
import Unauthorized from "../pages/Unauthorized";

const PublicRoutes = () => (
  <>
    <Route path="/login" element={<Login />} />;
    <Route path="/unauthorized" element={<Unauthorized />} />;
  </>
);

export default PublicRoutes;
