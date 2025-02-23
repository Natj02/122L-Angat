import React from "react";
import supabase from "../helpers/supabaseClient";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const nav = useNavigate()
    const signOut = async () => {
        //use supabase client to sign out
        const { error } = await supabase.auth.signOut();

        if (error) throw error;
        nav("/login")
    }
    return (
        <>
            <h1>Logged In</h1>
            <button onClick={signOut}>Sign Out</button>
        </>
    )
}

export default Dashboard;