import React from 'react';

const ProfileSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center p-6 text-gray-800">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile Settings</h1>

        {/* Profile Picture */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Picture</h2>
          <div className="flex justify-center mb-4">
            <img
              src="https://i.pravatar.cc/100" // or your actual avatar
              alt="Profile"
              className="w-24 h-24 rounded-full border border-gray-300 shadow-sm"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Change Picture
          </button>
        </div>

        {/* Profile Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                defaultValue="john_doe"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
