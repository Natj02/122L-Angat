import angatLogo from '../assets/img/logo.svg';

export default function Register() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-base-300">
            <button onClick={() => window.history.back()} className="absolute top-4 left-4 px-4 py-2 bg-primary text-gray-700 rounded-lg hover:bg-gray-400 transition">
              ← Back
            </button>
        <div className="flex w-[80%] max-w-5xl bg-primary shadow-2xl rounded-3xl overflow-hidden">
          {/* Left Section - Logo & Join Us */}
          <div className="flex flex-col items-center justify-center w-1/2 bg-gradient-to-r from-gray-300 to-gray-100 p-8">
            <img src={angatLogo} alt="Angat Logo"/> 
          </div>

          {/* Right Section - Register Form */}
          <div className="flex flex-col justify-center w-1/2 p-10 relative">
            

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register Here</h2>
            
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
              <button className="w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
