import React from 'react';

const UserDetails = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: 'Admin',
    status: 'Active',
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    activities: [
      { id: 1, description: 'Updated password', timestamp: '2025-07-12' },
      { id: 2, description: 'Changed email address', timestamp: '2025-07-11' },
      { id: 3, description: 'Logged in from a new device', timestamp: '2025-07-10' }
    ]
  };

  return (
    <main className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4'>
      <section className="bg-white w-full max-w-3xl p-6 sm:p-8 rounded-lg shadow-md text-gray-700">
        <div className="flex items-center space-x-6">
          <img
            src={user.profilePicture}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.role}</p>
            <p className={`text-sm mt-1 ${user.status == 'Active' ? "text-green-500 ":"text-red-500"}`}>Status:{user.status}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-gray-700">{user.bio}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <ul className="space-y-4">
            {user.activities.map((activity) => (
              <li key={activity.id} className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {activity.description.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{activity.description}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(activity.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button className="bg-gray-200 px-4 py-2 rounded-md">Cancel</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Save Changes</button>
        </div>
      </section>
    </main>
  );
};

export default UserDetails;
