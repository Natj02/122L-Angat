import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import angatLogo from "../assets/img/logo.svg";
import { getCurrentUser } from "../helpers/auth";

export default function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [secondary, setSecondary] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");

    if (type === "passwordChanged") {
      setMessage("Password Successfully Changed!");
      setSecondary("You can now log in using your new password.");
    } else if (type === "accountCreated") {
      setMessage("Account Successfully Created!");
      setSecondary("Please wait for an admin to approve your account.");
    }
  }, [location]);

  useEffect(() => {
    const fetchUser = async () => {
      console.log(await getCurrentUser());
    };
    fetchUser();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300 relative">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 text-gray-700 bg-primary hover:bg-cyan-600 rounded-lg transition"
      >
        ← Back
      </button>

      <div className="flex w-[80%] max-w-5xl bg-primary shadow-2xl rounded-3xl overflow-hidden">
        {/* Left Section - Logo */}
        <div className="flex-col hidden lg:flex items-center justify-center w-1/2 bg-gradient-to-r from-gray-300 to-gray-100 p-8">
          <img src={angatLogo} alt="Angat Logo" />
        </div>

        {/* Right Section - Success Message */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{message}</h2>
          <p className="text-gray-600 mb-6">{secondary}</p>
          <button
            className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-pink-800 transition"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
}
