import React, { createContext, useState, useRef, useEffect, useContext } from "react";
import { getCurrentUser } from "./auth";
import supabase from "./supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // UseRef to prevent redundant calls
  const isFetching = useRef(false);

  const fetchUserAndRole = async (currentUser) => {
    if (!currentUser || isFetching.current) return;
    isFetching.current = true;

    try {
      const { data, error } = await supabase
        .from("users")
        .select("role:role_id ( role_name )")
        .eq("uid", currentUser.id)
        .single();

      if (error) {
        console.error("Error fetching user role:", error);
        setUserRole(null);
      } else {
        setUserRole(data?.role?.role_name || null);
      }
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      await fetchUserAndRole(currentUser);
    };

    initializeAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
        fetchUserAndRole(session?.user);
      }
    );

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
