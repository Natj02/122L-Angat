import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ allowedRoles }) => {
  const { user, loading, userRole } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user || (allowedRoles && !allowedRoles.includes(userRole))) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
