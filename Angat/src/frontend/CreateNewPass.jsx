import angatLogo from '../assets/img/logo.svg';

export default function Login() {
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

        <div className="flex w-[80%] max-w-5xl bg-primary shadow-2xl rounded-3xl overflow-hidden">
          {/* Left Section - Logo */}
          <div className="flex flex-col items-center justify-center w-1/2 bg-gradient-to-r from-gray-300 to-gray-100 p-8">
                      <img src={angatLogo} alt="Angat Logo"/> 
            </div>

          {/* Right Section - Create New Password */}
          <div className="flex flex-col justify-center w-1/2 p-10 relative">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create New Password</h2>

            <div className="space-y-5">
              {/* Email */}
              <input
                type="password"
                placeholder="New password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition bg-white"
              />

              {/* Confirm */}
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition bg-white"
              />


              {/* Reset Pass */}
              <button className="w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-pink-800 transition">
                Reset Password
              </button>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
