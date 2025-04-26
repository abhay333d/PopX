import React, { useState } from "react";

const CreateAccountPage = ({ navigate, setUserData }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");

  const handleCreateAccount = () => {
    if (!fullName || !phone || !email || !password || !companyName) {
      setError("Please fill all fields!");
    } else {
      setError("");
      setUserData({ name: fullName, email });
      navigate("settings");
    }
  };

  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create your PopX account</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-violet-600">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-violet-600">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-violet-600">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-violet-600">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-violet-600">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <button
          onClick={handleCreateAccount}
          className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAccountPage;
