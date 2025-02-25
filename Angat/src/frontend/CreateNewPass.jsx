import angatLogo from '../assets/img/logo.png';

export default function CreateNewPass() {
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
          <div className="flex flex-col items-center justify-center w-1/2 bg-gradient-to-r from-gray-300 to-gray-100 p-8">
                      <img src={angatLogo} alt="Angat Logo"/> 
            </div>

          {/* Right Section - Create New Password */}
          <div className="flex flex-col justify-center w-1/2 p-10 relative">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create New Password</h2>

            <div className="space-y-5">
              {/* Email */}
              <label className="input w-full validator">
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <input type="password" required placeholder="New Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
              </label>
              <p class="validator-hint hidden">
                Must be more than 8 characters, including
                <br/>At least one number
                <br/>At least one lowercase letter
                <br/>At least one uppercase letter
              </p>

              {/* Confirm */}
              <label className="input w-full validator">
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <input type="password" required placeholder="Confirm New Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be same as New Password" />
              </label>
              <p class="validator-hint hidden">
                Must be same as New Password
              </p>


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
