import React, { createContext, useState, useEffect, useContext } from "react";
import { getCurrentUser, signOut } from "./auth";
import supabase from "./supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch current user on mount
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const currentUser = await getCurrentUser();
            setUser(currentUser);
            setLoading(false);
        };

        fetchUser();

        // Listen for authentication changes
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        // Cleanup listener on unmount
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
