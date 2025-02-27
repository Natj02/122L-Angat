import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import supabase from "./supabaseClient"; // Import supabase

const PrivateRoute = ({ allowedRoles }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null); // New state for user's role

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setUser(session.user);
        // Fetch user's role from database
        const { data, error } = await supabase
          .from("users") // Your user table
          .select("role_id")
          .eq("uid", session.user.id)
          .single();

        if (!error && data) {
          const { data: roleData } = await supabase
            .from("role")
            .select("role_name")
            .eq("role_id", data.role_id)
            .single();
          if (roleData) setUserRole(roleData.role_name);
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  // If no user is logged in, redirect to login
  // If there are allowed roles and the user's role is not in the list, redirect to unauthorized
  if (!user || (allowedRoles && !allowedRoles.includes(userRole))) return <Navigate to="/" />;


  // User is logged in and has the required role, render the protected content
  return <Outlet />;
};

export default PrivateRoute;
