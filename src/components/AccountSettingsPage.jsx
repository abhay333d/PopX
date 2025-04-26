import React from "react";

const AccountSettingsPage = ({ userData }) => {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-md font-semibold text-gray-700 mb-4">
        Account Settings
      </h2>
      <div className="flex items-center mb-4">
        <div className="relative">
          <img
            src={userData.image || "./image.webp"}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-violet-600 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 5c-1.1 0-2 .9-2 2H8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-2c0-1.1-.9-2-2-2zm0 3c2.21 0 4 1.79 4 4s-1.79 4-4 4a4 4 0 1 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
          </div>
        </div>
        <div className="ml-4 text-left">
          <h3 className="text-base font-bold text-gray-800">{userData.name}</h3>
          <p className="text-sm text-gray-500">{userData.email}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
      </p>
    </div>
  );
};

export default AccountSettingsPage;
