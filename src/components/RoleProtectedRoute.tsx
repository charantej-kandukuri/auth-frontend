import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAuth } from "../features/auth/authSlice";
import type { Role } from "../features/auth/auth.types";

interface Props {
  children: React.ReactNode;
  allowedRoles: Role[];
}
const RoleProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { user, isInitialized, isAuthenticated } = useAppSelector(selectAuth);

  // Wait for auth check
  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  // Not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  //Role check
  if (user && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <div>{children}</div>;
};

export default RoleProtectedRoute;
