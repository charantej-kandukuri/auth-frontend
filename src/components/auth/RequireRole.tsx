import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import type { Role } from "../../features/auth/auth.types";

type Props = {
  allowedRoles: Role[];
  children: React.ReactNode;
};

export const RequireRole = ({ allowedRoles, children }: Props) => {
  const { user, isInitialized, isAuthenticated } = useAppSelector(
    (state) => state.auth,
  );

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
