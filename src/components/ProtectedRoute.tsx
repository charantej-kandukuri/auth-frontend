import React from "react";
import { useAppSelector } from "../app/hooks";
import type { RootState } from "../app/store";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated, isInitialized } = useAppSelector(
    (state: RootState) => state.auth,
  );

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
