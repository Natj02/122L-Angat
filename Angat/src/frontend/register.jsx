import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../helpers/auth"; // Import the signup function
import angatLogo from "../assets/img/logo.png";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);
        localStorage.setItem("pending_email", email);
        const { error } = await signUp(email, password, username);
        if (error) {
            setError(error.message);
        } else {
            navigate("/confirm-email");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-300">
            {/* Back Button */}
            <button onClick={() => window.history.back()} className="absolute top-4 left-4 px-4 py-2 bg-primary text-gray-700 rounded-lg hover:bg-cyan-600 transition">
              ← Back
            </button>

            <div className="flex w-[80%] max-w-2/3 bg-primary shadow-2xl rounded-3xl overflow-hidden">
                {/* Left Section - Logo */}
                <div className="flex flex-col hidden lg:flex items-center justify-center w-1/2 bg-gradient-to-r from-gray-300 to-gray-100 p-8">
                    <img src={angatLogo} alt="Angat Logo"/> 
                </div>

                {/* Right Section - Register Form */}
                <div className="flex flex-col justify-center w-full lg:w-1/2 p-10 relative">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign up</h2>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <form className="space-y-5" onSubmit={handleSignUp}>
                        {/* Username Field */}
                        <label className="input w-full">
                            <input 
                                type="text" 
                                placeholder="Username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                                minLength="3" 
                                maxLength="30" 
                                pattern="[A-Za-z][A-Za-z0-9\-]*" 
                                title="Only letters, numbers, or dashes. Must start with a letter."
                            />
                        </label>

                        {/* Email Field */}
                        <label className="input w-full">
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
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                                minLength="8" 
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                title="At least 8 characters, including one uppercase letter, one lowercase letter, and one number."
                            />
                        </label>

                        {/* Register Button */}
                        <button type="submit" className="cursor-pointer w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-pink-800 transition">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
