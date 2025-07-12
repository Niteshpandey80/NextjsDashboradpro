import Link from 'next/link';
import React from 'react';

const Users = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-start justify-center p-12">
      <div className="bg-white rounded-xl shadow-2xl p-12 w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Users</h1>
        <p className="text-gray-700 text-2xl mb-8">
          Manage your users here. You can view detailed information or browse a list of users.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
          <Link
            href="/dashboard/users/users-details"
            className="block bg-green-50 p-11 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-green-900 mb-2">Users Details</h2>
            <p className="text-gray-700">
              View detailed information about each user in your system
            </p>
          </Link>

         
          <Link
            href="/dashboard/users/users-list"
            className="block bg-orange-50 p-11 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-orange-900 mb-2">Users List</h2>
            <p className="text-gray-700">
              Browse and manage all users in the system.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Users;
