import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import angatLogo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import supabase from "../helpers/supabaseClient";
import { getCurrentUser, signIn } from "../helpers/auth";

export default function Login() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isLoggingIn = useRef(false); // Track if login is in progress
  // Caching last reset request to avoid duplicate calls
  const [lastResetRequest, setLastResetRequest] = useState(null);

  // Handle login without unnecessary API calls
  const handleLogin = async (e) => {
    e.preventDefault();

    if (isLoggingIn.current) return; // Prevent multiple requests
    isLoggingIn.current = true; // Mark as logging in
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/");
    }

    isLoggingIn.current = false; // Allow future logins
  };

  // Handle password reset with request limit
  const resetRedirect = async () => {
    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }

    // Prevent duplicate reset requests
    if (lastResetRequest && Date.now() - lastResetRequest < 60000) {
      setError("A reset request was already sent. Please check your email.");
      return;
    }

    setError(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/create-pass",
    });

    if (error) {
      setError(error.message);
    } else {
      alert("Password reset link has been sent to your email.");
      setLastResetRequest(Date.now()); // Store timestamp of last request
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-base-300">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 left-4 px-4 py-2 bg-primary text-base-100 rounded-lg hover:bg-cyan-600 transition"
        >
          ← Back
        </button>

        <div className="flex w-[80%] max-w-2/3 bg-primary shadow-2xl rounded-3xl overflow-hidden">
          {/* Left Section - Logo */}
          <div className="flex flex-col hidden lg:flex items-center justify-center w-1/2 bg-gradient-to-r from-gray-300 to-gray-100 p-8">
            <img src={angatLogo} alt="Angat Logo" />
          </div>

          {/* Right Section - Login Form */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 p-10 relative">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Sign In
            </h2>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <form className="space-y-5" onSubmit={handleLogin}>
              {/* Email Field */}
              <label className="input w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              {/* Password Field */}
              <label className="input w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>

                <a
                  onClick={() => resetRedirect(email)}
                  className="text-white hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-pink-800 transition"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
