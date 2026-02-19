import React from "react";
import { useAppSelector } from "../app/hooks";
import type { RootState } from "../app/store";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: Props) => {
  const { isAuthenticated, isLoading } = useAppSelector(
    (state: RootState) => state.auth,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <div>{children}</div>;
};

export default PublicRoute;
