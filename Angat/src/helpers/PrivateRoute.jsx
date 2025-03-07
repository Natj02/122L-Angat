import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
export const PrivateRoleRoute = ({ allowedRoles }) => {
  const { user, loading, userRole } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user || (allowedRoles && !allowedRoles.includes(userRole))) {
    return <Navigate to="/NotFound" />;
  }

  return <Outlet />;
};

export const PrivateRedirectRoute = ({ children, allowedFrom }) => {
    const location = useLocation();
    
    const fromState = location.state?.from;
    const fromStorage = sessionStorage.getItem("fromPage");
    
    const isAllowed = fromState === allowedFrom || fromStorage === allowedFrom;

    return isAllowed ? children : <Navigate to="/NotFound" />;
};
