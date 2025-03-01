import angatLogo from '../assets/img/logo.png';
import { updatePassword } from "../helpers/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateNewPass() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUpdatePass = async () => {
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    const { error } = await updatePassword(password);
    if (error) {
      setError(error.message);
    } else {
      navigate("/success-page");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-base-300">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 left-4 px-4 py-2 bg-primary text-gray-700 rounded-lg hover:bg-cyan-600 transition"
        >
          ← Back
        </button>

        <div className="flex w-[80%] max-w-2/3 bg-primary shadow-2xl rounded-3xl overflow-hidden">
          {/* Left Section - Logo */}
          <div className="flex flex-col hidden lg:flex items-center justify-center w-1/2 bg-gradient-to-r from-gray-300 to-gray-100 p-8">
            <img src={angatLogo} alt="Angat Logo" />
          </div>

          {/* Right Section - Create New Password */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 p-10 relative">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Create New Password
            </h2>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="space-y-5">
              {/* New Password */}
              <label className="input w-full">
                <input
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must include at least one number, one lowercase letter, and one uppercase letter."
                />
              </label>

              {/* Confirm New Password */}
              <label className="input w-full">
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>

              {/* Reset Password Button */}
              <button
                onClick={handleUpdatePass}
                className="w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-pink-800 transition"
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
