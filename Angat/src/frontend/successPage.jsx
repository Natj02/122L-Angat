import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import angatLogo from "../assets/img/logo.svg";

export default function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [secondary, setSecondary] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    setMessage("Password Successfully Changed!");
    setSecondary("You can now log in using your new password.");
  }, []); // Ensure this only runs ONCE

  /*
  useEffect(() => {
    const fetchUser = async () => {
      console.log(await getCurrentUser());
    };
    fetchUser();
  }, []);
*/
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300 relative">
      {/* Back Button */}
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
            className="px-6 cursor-pointer py-2 bg-secondary text-white rounded-lg hover:bg-pink-800 transition"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
}
