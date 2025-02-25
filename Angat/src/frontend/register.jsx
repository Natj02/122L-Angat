import angatLogo from '../assets/img/logo.png';

export default function Register() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-base-300">
            <button onClick={() => window.history.back()} className="absolute top-4 left-4 px-4 py-2 bg-primary text-gray-700 rounded-lg hover:bg-cyan-600 transition">
              ← Back
            </button>
        <div className="flex w-[80%] max-w-2/3 bg-primary shadow-2xl rounded-3xl overflow-hidden">
          {/* Left Section - Logo & Join Us */}
          <div className="flex flex-col items-center justify-center w-1/2 bg-gradient-to-r from-gray-300 to-gray-100 p-8">
            <img src={angatLogo} alt="Angat Logo"/> 
          </div>

          {/* Right Section - Register Form */}
          <div className="flex flex-col justify-center w-1/2 p-10 relative">
            

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign up </h2>
            
            <div className="space-y-5">
              {/* Username */}
              <label className="input w-full validator">
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
              </label>
              <p class="validator-hint hidden">
                Must be 3 to 30 characters
                <br/>containing only letters, numbers or dash
              </p>


              {/* Email */}
              <label className="input w-full validator">
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <input type="email" placeholder="Email" required/>
              </label>
              <div class="validator-hint hidden">Enter valid email address</div>


              {/* Password */}
              <label className="input w-full validator">
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <input type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
              </label>
              <p class="validator-hint hidden">
                Must be more than 8 characters, including
                <br/>At least one number
                <br/>At least one lowercase letter
                <br/>At least one uppercase letter
              </p>


              <button className="w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-pink-800 transition">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
