import { Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import RequireAuth from "../components/auth/RequireAuth";
import AppLayout from "../layout/AppLayout";
import { RequireRole } from "../components/auth/RequireRole";
import Users from "../pages/Users";

const ProtectedRoutes = () => {
  return (
    <Route
      element={
        <RequireAuth>
          <AppLayout />
        </RequireAuth>
      }
    >
      <Route
        path="/"
        element={
          <RequireRole allowedRoles={["admin", "user"]}>
            <Dashboard />
          </RequireRole>
        }
      />
      <Route
        path="/users"
        element={
          <RequireRole allowedRoles={["admin"]}>
            <Users />
          </RequireRole>
        }
      />

      {/* <Route
        path="/settings"
        element={<Settings />} // maybe all logged-in users can access
      /> */}
    </Route>
  );
};

export default ProtectedRoutes;
