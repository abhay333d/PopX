import React, { useState } from "react";

const LoginPage = ({ navigate, setUserData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password!");
    } else {
      setError("");
      setUserData({ email }); // Only email is available here
      navigate("settings");
    }
  };

  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">Sign in to your PopX account</h2>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-violet-600">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-violet-600">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
