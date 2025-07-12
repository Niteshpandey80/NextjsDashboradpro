import React from 'react';

const UsersList = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Sam Brown",
      email: "sam.brown@example.com",
      role: "User",
      status: "Suspended",
    },
    {
      id: 4,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Sarah Davis",
      email: "sarah.davis@example.com",
      role: "User",
      status: "Suspended",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 text-gray-700 to-blue-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-2xl font-bold p-6 border-b">Users List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Role</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className="py-4 px-6">{user.role}</td>
                  <td
                    className={`py-4 px-6 font-medium ${
                      user.status === 'Active'
                        ? 'text-green-600'
                        : user.status === 'Inactive'
                        ? 'text-yellow-600'
                        : user.status === 'Suspended'
                        ? 'text-red-600'
                        : 'text-gray-500'
                    }`}
                  >
                    {user.status}
                  </td>
                  <td className="py-4 px-6 flex gap-2">
                    <button className="bg-gray-200 text-gray-800 px-4 py-1 rounded-md hover:bg-gray-300">
                      Edit
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
