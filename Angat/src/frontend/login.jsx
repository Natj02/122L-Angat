import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../helpers/auth";
import angatLogo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import supabase from "../helpers/supabaseClient";
import { getCurrentUser } from "../helpers/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { error } = await signIn(email, password);
    if (error) {
      setError(error.message);
    } else {
      navigate("/");
    }
  };

  const resetRedirect = async (email) => {
    const userData = await getCurrentUser();

    if (userData.email !== email) {
      setError("Invalid email address");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/create-pass",
    });
    if (error) {
      setError(error.message);
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
