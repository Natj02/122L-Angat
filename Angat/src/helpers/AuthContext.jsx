import React, { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "./supabaseClient";
import { getCurrentUser } from "./auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient();
  // List of paths where the query should be disabled
  //const DISABLED_PAGES = ["/about", "/success-page", "/create-pass", "/confirm-email", "/register", "/login", "/linkages"];

  // Check if the current path is in the disabled list
  //const isQueryDisabled = DISABLED_PAGES.includes(location.pathname);

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
    queryKey: ["userRole", user?.id],               // Cache based on user ID
    queryFn: () => fetchUserRole(user?.id),         // Yeah.
    enabled: !!user, //&& !isQueryDisabled,            // If  user exists
    staleTime: Infinity,                            //Never refetch
    refetchOnWindowFocus: false,                    // Disable refetch on window focus (the weird rerendering)
  });

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
