import React, { use, useState } from "react";
import supabase from "../helpers/supabaseClient";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      clearInputs()
      nav("/dashboard");
      return null;
    }

    clearInputs();
  };

  return (
    <>
      <div>
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
        <span>Don't have an account? </span>
        <Link to="/register">Register</Link>
      </div>
    </>
  );
}

export default Login;
