import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import supabase from "./supabaseClient";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ allowedRoles }) => {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        if (!user) {
          setLoading(false);
          return;
        }
        // Fetch user's role_id from the 'users' table
        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("role_id")
          .eq("uid", user.id)
          .single();

        if (userError) {
          console.error("Error fetching user data:", userError);
          setLoading(false);
          return;
        }

        if (userData) {
          // Fetch role_name based on the role_id
          const { data: roleData, error: roleError } = await supabase
            .from("role")
            .select("role_name")
            .eq("role_id", userData.role_id)
            .single();

          if (roleError) {
            console.error("Error fetching role data:", roleError);
            setLoading(false);
            return;
          }

          if (roleData) {
            setUserRole(roleData.role_name);
          }
        }
      } catch (error) {
        console.error("An unexpected error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, [user]);
  if (loading || userRole === null) return <p>Loading...</p>;

  // If there's no user or if allowedRoles is defined and the user's role isn't included, redirect to home
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  // User is logged in and has the required role, render the protected content
  return <Outlet />;
};

export default PrivateRoute;
