import angatLogo from '../assets/img/logo.png';

export default function forgotPass() {
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

          {/* Right Section - Forgot Pass */}
          <div className="flex flex-col justify-center w-1/2 p-10 relative">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>

            <div className="space-y-5">
              {/* Email */}
              <label className="input w-full validator">
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <input type="email" placeholder="Email" required/>
              </label>
              <div class="validator-hint hidden">Enter valid email address</div>

              {/* 6-digit number */}
              <label className="input w-full">
                <input type="input" placeholder="6-Digit Code" required/>
              </label>


              {/* Send Code Button */}
              <button className="w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-pink-800 transition">
                Send Code
              </button>

              {/* Resend code */}
              <div className="text-sm items-center">
                <a href="#" className="text-white hover:underline">Resend Code?</a>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
