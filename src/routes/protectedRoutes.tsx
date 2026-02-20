import { Route } from "react-router-dom";

// guard components
import RequireAuth from "../components/auth/RequireAuth";
import { RequireRole } from "../components/auth/RequireRole";
// pages
import AppLayout from "../layout/AppLayout";
import Dashboard from "../features/dashboard/pages/Dashboard";
import Users from "../features/users/Pages/Users";

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
