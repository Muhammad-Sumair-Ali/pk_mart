import React from "react";

const AdminProfile = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center">
      {/* Profile Card */}
      <div className="w-full max-w-5xl bg-gray-100 shadow-lg rounded-lg p-6">
        {/* Profile Header */}
        <div className="flex items-center justify-between pb-6 border-b">
          <div className="flex items-center space-x-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Admin Profile"
              className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover"
            />
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">Mr. JZ</h1>
              <p className="text-gray-500 text-lg">Admin</p>
              <p className="text-gray-600 mt-1">
                <span className="font-semibold">Email:</span> mrjz@example.com
              </p>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            Edit Profile
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow">
            <span className="text-blue-600 text-xl font-semibold">25</span>
            <p className="text-gray-700">Users Managed</p>
          </div>
          <div className="flex flex-col items-center bg-green-100 p-4 rounded-lg shadow">
            <span className="text-green-600 text-xl font-semibold">12</span>
            <p className="text-gray-700">Active Tasks</p>
          </div>
          <div className="flex flex-col items-center bg-yellow-100 p-4 rounded-lg shadow">
            <span className="text-yellow-600 text-xl font-semibold">5</span>
            <p className="text-gray-700">Pending Requests</p>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="w-full max-w-5xl bg-gray-100 shadow-lg rounded-lg mt-6 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-4 flex justify-between">
            <span className="text-gray-600">Updated User Profile</span>
            <span className="text-gray-500 text-sm">2 hours ago</span>
          </li>
          <li className="py-4 flex justify-between">
            <span className="text-gray-600">Added a New Admin</span>
            <span className="text-gray-500 text-sm">1 day ago</span>
          </li>
          <li className="py-4 flex justify-between">
            <span className="text-gray-600">Reviewed Pending Requests</span>
            <span className="text-gray-500 text-sm">3 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminProfile;
