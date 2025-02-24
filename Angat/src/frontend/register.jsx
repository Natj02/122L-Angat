export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-3/4 max-w-2xl">
        <h2 className="text-xl font-bold text-center mb-6">Register</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-md font-semibold">Full Name</h3>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <h3 className="text-md font-semibold">Email</h3>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <h3 className="text-md font-semibold">Password</h3>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button className="w-full py-2 bg-gray-700 text-white rounded">Register</button>
        </div>
      </div>
    </div>
  );
}
