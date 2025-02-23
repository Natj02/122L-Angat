import React, { useEffect, useState } from "react";
import supabase from "../helpers/supabaseClient";
import { Navigate } from "react-router-dom";

//wrap to a protected route
function Wrapper({children}) {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            //!! converts to boolean (if !!null -> false)
            //!! {*object*} -> true
            setAuthenticated(!!session);

            //done waiting for supabase
            setLoading(false)
        };

        getSession();
    }, [])

    if (loading){
        return <div>Loading...</div>
    }else{
        //returns the page (saved as child prop) if authenticated 
        if (authenticated){
            return <>{children}</>
        }
        return <Navigate to="/login"/>
    }
}

export default Wrapper;