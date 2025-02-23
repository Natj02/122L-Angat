import React, { useState } from "react";
import supabase from "../helpers/supabaseClient";
import { Link } from "react-router-dom";

let min_pass = 6

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
    if (password.length < min_pass){
        alert("Password must be 6 or more characters!")
        clearInputs()
        return
    }

    setMessage("")
    const {data, err} = await supabase.auth.signUp({
        email: email,
        password: password
    });
    
    if (err) {
        setMessage(err.message)
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
