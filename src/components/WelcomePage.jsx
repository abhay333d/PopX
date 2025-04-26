import React from "react";

const WelcomePage = ({ navigate }) => {
  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2">Welcome to PopX</h2>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <button
        onClick={() => navigate("create")}
        className="w-full bg-violet-600 text-white py-2 rounded-md mb-3 hover:bg-violet-700"
      >
        Create Account
      </button>
      <button
        onClick={() => navigate("login")}
        className="w-full bg-violet-200 text-black py-2 rounded-md hover:bg-violet-300"
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default WelcomePage;
