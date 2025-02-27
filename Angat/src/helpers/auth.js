import supabase from "./supabaseClient";

// Sign Up
export const signUp = async (email, password, username) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { username }, // This ensures username is stored in metadata
        },
    });

    if (error) {
        console.error("Signup error:", error.message);
    }

    return { user: data?.user, error };
};


// Sign In
export const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    return { user: data?.user, error };
};

// Sign Out
export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return error;
};

// Get Current User
export const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
};

// Update User Password
export const updatePassword = async (pass) => {
    const { data, error } = await supabase.auth.updateUser({
        password: pass
    })
    return { error };
}