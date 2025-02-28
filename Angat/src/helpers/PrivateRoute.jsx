import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import supabase from "./supabaseClient";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ allowedRoles }) => {
const { user, userRole, loading } = useAuth();

if (loading || userRole === null) return <p>Loading...</p>;

if (!user) return <Navigate to="/login" />;
if (allowedRoles && !allowedRoles.includes(userRole)) return <Navigate to="/" />;

return <Outlet />;
};

export default PrivateRoute;
