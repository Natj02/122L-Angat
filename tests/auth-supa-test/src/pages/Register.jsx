import React, { useState } from "react";
import supabase from "../helpers/supabaseClient";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const clearInputs = () => {
    setEmail("")
    setPassword("")
  }
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setMessage("")
    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password
    });
    
    if (error) {
        setMessage(error.message)
        return
    }

    if (data) {
        setMessage("User account created!")
    }

    clearInputs()
  };

  return (
    <>
      <div>
        <h2>Register Here</h2>
        <br />
        {message && <span>{message}</span>}
        <form onSubmit={handleSubmit}>
          <input
            required
            onChange={(em) => setEmail(em.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
          />
          <input
            required
            onChange={(ps) => setPassword(ps.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
          />
          <button type="submit">Create Account</button>
        </form>
        <span>Already have an account? </span>
        <Link to="/login">Log in</Link>
      </div>
    </>
  );
}

export default Register;
