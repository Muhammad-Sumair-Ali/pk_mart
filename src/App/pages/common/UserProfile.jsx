import React from "react";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8 px-6">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden border-4 border-white">
              <img
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">John Doe</h1>
              <p className="text-sm text-gray-100">john.doe@example.com</p>
              <p className="mt-2 text-sm bg-white/20 px-2 py-1 rounded-full inline-block">
                Member Since: January 2023
              </p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-3">
            Profile Information
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Full Name</h4>
              <p className="text-lg text-gray-800">John Doe</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Email</h4>
              <p className="text-lg text-gray-800">john.doe@example.com</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Phone</h4>
              <p className="text-lg text-gray-800">+1 234 567 890</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Address</h4>
              <p className="text-lg text-gray-800">
                123 Main Street, New York, USA
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="p-6 border-t bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-3">
            Recent Activity
          </h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center justify-between">
              <div>
                <p className="text-gray-800">Logged in from a new device</p>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
              <span className="text-blue-500 text-sm">View Details</span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="text-gray-800">Updated profile information</p>
                <span className="text-sm text-gray-500">1 week ago</span>
              </div>
              <span className="text-blue-500 text-sm">View Details</span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="text-gray-800">Changed password</p>
                <span className="text-sm text-gray-500">3 weeks ago</span>
              </div>
              <span className="text-blue-500 text-sm">View Details</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="p-6 bg-white flex justify-between items-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
