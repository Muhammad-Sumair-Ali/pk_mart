import React, { useState } from "react";
import Heading from "../../components/panel/Heading";
import {
  FaUsers,
  FaUserPlus,
  FaStar,
  FaShoppingCart,
  FaRegUser,
  FaRegThumbsUp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiOutlineSearch, AiOutlineArrowUp } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "buyer",
      isSeller: false,
      isApproved: false,
      location: "New York, USA",
      recentActivity: "Logged in 2 hours ago",
    },
    {
      id: 5,
      name: "Sophia Brown",
      email: "sophiab@example.com",
      role: "buyer",
      isSeller: false,
      isApproved: true,
      location: "Berlin, Germany",
      recentActivity: "Left a review for a product",
    },
    {
      id: 6,
      name: "William Martinez",
      email: "william.m@example.com",
      role: "seller",
      isSeller: true,
      isApproved: true,
      location: "Paris, France",
      recentActivity: "Logged in 3 days ago",
    },
    {
      id: 7,
      name: "Olivia Wilson",
      email: "oliviaw@example.com",
      role: "buyer",
      isSeller: false,
      isApproved: true,
      location: "Tokyo, Japan",
      recentActivity: "Added items to the wishlist",
    },
    {
      id: 8,
      name: "Liam Taylor",
      email: "liamt@example.com",
      role: "seller",
      isSeller: true,
      isApproved: false,
      location: "Mumbai, India",
      recentActivity: "Requested account approval",
    },
    {
      id: 9,
      name: "Emma Anderson",
      email: "emmaa@example.com",
      role: "buyer",
      isSeller: false,
      isApproved: false,
      location: "Cape Town, South Africa",
      recentActivity: "Signed up yesterday",
    },
    {
      id: 10,
      name: "Noah Moore",
      email: "noahm@example.com",
      role: "seller",
      isSeller: true,
      isApproved: true,
      location: "Dubai, UAE",
      recentActivity: "Uploaded a new product image",
    },
  ]);

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (roleFilter === "all" || user.role === roleFilter)
  );
  // Card Data
  const stats = [
    {
      title: "All Users",
      description: "Total number of registered users",
      icon: <FaUsers className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-indigo-500 to-pink-500",
      count: 1500,
    },
    {
      title: "Buyer Users",
      description: "Total number of buyers on the platform",
      icon: <FaShoppingCart className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-teal-400 to-emerald-600",
      count: 800,
    },
    {
      title: "Seller Users",
      description: "Total number of sellers on the platform",
      icon: <FaRegUser className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-orange-400 to-yellow-500",
      count: 700,
    },
    {
      title: "Total Active Users",
      description: "Number of active users on the platform",
      icon: <FaRegUser className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-purple-500 to-fuchsia-600",
      count: 700,
    },
    {
      title: "Total Visitors",
      description: "Number of new visitors to the platform",
      icon: <LiaUserFriendsSolid className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-red-400 to-pink-600",
      count: 700,
    },
    {
      title: "Growing Users",
      description: "Users with the highest growth rate",
      icon: <AiOutlineArrowUp className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
      count: 200,
    },
  ];

  return (
    <>
      <Heading
        icon={<FaUsers />}
        title="Users Management"
        desc="Manage Users, Approve Sellers, and More"
      />

      <div className="mb-6">
        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 lg:gap-3  mb-8">
          {stats.map((card, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-2 md:p-3 ${card.bgColor} rounded-lg shadow-lg text-white`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-md md:text-xl bg-white bg-opacity-20 p-1 md:p-2 rounded-full">
                    {card.icon}
                  </span>

                  <h3 className="text-lg lg:text-xl font-semibold">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm">{card.description}</p>
                <p className="text-xl lg:text-2xl font-bold">
                  {card.count}
                </p>{" "}
                {/* Dynamic count */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visitor Insights Section */}
      <div className="bg-gray-100 rounded-lg shadow-md mt-6 p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Visitor Insights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow text-white">
            <div className="text-3xl font-bold">1,1830</div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Total Visitors</h4>
              <p className="text-sm">Visitors in the this month</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow text-white">
            <div className="text-3xl font-bold">383</div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Returning Visitors</h4>
              <p className="text-sm">Users who visited again</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg shadow text-white">
            <div className="text-3xl font-bold">7</div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Countries</h4>
              <p className="text-sm">Visitor locations worldwide</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-800">Top Locations</h4>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center justify-between text-gray-600">
              <span className="font-medium">United States</span>
              <span>440 Visitors</span>
            </li>
            <li className="flex items-center justify-between text-gray-600">
              <span className="font-medium">Pakistan</span>
              <span>420 Visitors</span>
            </li>
            <li className="flex items-center justify-between text-gray-600">
              <span className="font-medium">India</span>
              <span>300 Visitors</span>
            </li>
            <li className="flex items-center justify-between text-gray-600">
              <span className="font-medium">United Kingdom</span>
              <span>150 Visitors</span>
            </li>
            <li className="flex items-center justify-between text-gray-600">
              <span className="font-medium">Canada</span>
              <span>100 Visitors</span>
            </li>
            <li className="flex items-center justify-between text-gray-600">
              <span className="font-medium">Australia</span>
              <span>80 Visitors</span>
            </li>
          </ul>
        </div>
      </div>


      {/* Filters */}
      <div className="flex items-center justify-between mb-4 bg-gray-100 p-2 rounded-md">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Users By Name"
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
          />
          <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>
        <select
          className="border rounded-lg px-4 py-2"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="buyer">Buyers</option>
          <option value="seller">Sellers</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h3 className="text-xl font-semibold text-gray-800 p-4 bg-gradient-to-r from-green-400 to-blue-500">
          All Users Recent Activites
        </h3>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Role
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Location
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Recent Activity
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <FaMapMarkerAlt className="inline mr-1" /> {user.location}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {user.recentActivity}
                </td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-600"
                    onClick={() => alert("View User Details")}
                  >
                    View
                  </button>
                  <button
                    className="text-red-500 hover:text-gray-600"
                    disabled={!user.isApproved}
                  >
                    Disable
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </>
  );
};

export default AdminUsers;
