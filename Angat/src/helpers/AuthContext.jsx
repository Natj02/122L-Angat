import React, { createContext, useState, useEffect, useContext } from "react";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "./supabaseClient";
import { getCurrentUser } from "./auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient(); // Query Client

  // Fetch user role from Supabase
  const fetchUserRole = async (userId) => {
    if (!userId) return null;
    const { data, error } = await supabase
      .from("users")
      .select("role:role_id ( role_name )")
      .eq("uid", userId)
      .single();

    if (error) {
      console.error("Error fetching user role:", error);
      return null;
    }
    return data?.role?.role_name || null;
  };

  // React Query to fetch role when user state changes
  const { data: userRole, isLoading } = useQuery({
    queryKey: ["userRole", user?.id], // Cache based on user ID
    queryFn: () => fetchUserRole(user?.id),
    enabled: !!user, // Only run when user exists
    staleTime: 3600000, //1 Hour
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    console.log("AuthProvider Mounted");
  }, []);

  // Initialize user on app load
  useEffect(() => {
    const initializeAuth = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };

    initializeAuth();

    // Listen for Supabase auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          queryClient.invalidateQueries(["userRole"]); // Refresh role
        } else {
          setUser(null);
          queryClient.removeQueries(["userRole"]); // Clear role if logged out
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [queryClient]);

  return (
    <AuthContext.Provider value={{ user, userRole, loading: isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
