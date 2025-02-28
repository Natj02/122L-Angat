import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ allowedRoles }) => {
  const { user, loading: authLoading, userRole } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If authentication loading is complete and user is not authenticated, redirect to landing page
    if (!authLoading && !user) {
      setLoading(false);
    } else if (!authLoading && user && userRole !== null) {
      // If user is authenticated and userRole is determined, stop loading
      setLoading(false);
    }
  }, [authLoading, user, userRole]);
  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    // Redirect unauthenticated users to the landing page
    return <Navigate to="/" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Redirect users with unauthorized roles to a "Not Authorized" page or home
    return <Navigate to="/not-authorized" />;
  }

  // User is authenticated and authorized, render the protected content
  return <Outlet />;
};

export default PrivateRoute;
