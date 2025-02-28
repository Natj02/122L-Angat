import React, { createContext, useState, useEffect, useContext } from "react";
import { getCurrentUser } from "./auth";
import supabase from "./supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAndRole = async () => {
      setLoading(true);
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser);

        // Fetch user's role based on user ID
        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("role_id")
          .eq("uid", currentUser.id)
          .single();

        if (userError) {
          console.error("Error fetching user data:", userError);
        } else if (userData) {
          const { data: roleData, error: roleError } = await supabase
            .from("role")
            .select("role_name")
            .eq("role_id", userData.role_id)
            .single();

          if (roleError) {
            console.error("Error fetching role data:", roleError);
          } else if (roleData) {
            setUserRole(roleData.role_name);
          }
        }
      } else {
        setUser(null);
        setUserRole(null);
      }
      setLoading(false);
    };

    fetchUserAndRole();

    // Listen for authentication changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          fetchUserAndRole();
        } else {
          setUser(null);
          setUserRole(null);
        }
      }
    );

    // Cleanup listener on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, userRole, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
