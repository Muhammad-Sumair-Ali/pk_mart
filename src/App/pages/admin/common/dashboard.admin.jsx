import React, { useState } from "react";
import Heading from "../../../components/panel/Heading";
import {
  FaChartPie,
  FaUsers,
  FaTags,
  FaBox,
  FaChartLine,
  FaCheck,
} from "react-icons/fa";
import {
  FaUserPlus,
  FaStar,
  FaShoppingCart,
  FaRegUser,
  FaRegThumbsUp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiOutlineSearch, AiOutlineArrowUp } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
import useUserLocation from "../../../../action/useUsergetLocation";
import { FaRepeat } from "react-icons/fa6";

const AdminDashboard = () => {
  const location = useUserLocation();

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

  const cards = [
    {
      title: "Total Users",
      count: 452,
      description: "Number of registered users on the platform",
      icon: <FaUsers className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-400",
    },
    {
      title: "Total Categories",
      count: 28,
      description: "Number of categories available",
      icon: <FaTags className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-green-500 to-green-400",
    },
    {
      title: "Total SubCategories",
      count: 42,
      description: "Number of sub categories available",
      icon: <FaTags className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-rose-500 to-rose-400",
    },
    {
      title: "Total Products",
      count: 1235,
      description: "Number of products listed on the platform",
      icon: <FaBox className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-purple-500 to-purple-400",
    },
    {
      title: "Total Active Users",
      count: 700,
      description: "Number of users currently active",
      icon: <FaRegUser className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-purple-500 to-fuchsia-600",
    },
    {
      title: "Total Visitors",
      count: 700,
      description: "Number of new visitors to the platform",
      icon: <LiaUserFriendsSolid className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-red-500 to-pink-900",
    },
    {
      title: "Pending Sellers Approvals ",
      count: 320,
      description: "Sellers awaiting approval",
      icon: <FaCheck className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-red-500 to-orange-600",
    },

    {
      title: "Returning Visitors",
      count: 730,
      description: "Users who visited again",
      icon: <FaRepeat className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-lime-500 to-slate-600",
    },
  ];

  return (
    <>
      {/* Page Heading */}
      <Heading
        icon={<FaChartPie />}
        title="Dashboard"
        desc="Comprehensive analytics and insights"
      />

      {/* Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-6">
        {cards.map((card, index) => (
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
              <p className="text-lg lg:text-xl font-bold">{card.count}</p>{" "}
              {/* Dynamic count */}
            </div>
          </div>
        ))}
      </div>

      {/* Visitor Insights Section */}
      <div className="bg-gray-100 rounded-lg shadow-md mt-6 p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Visitor Insights
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg shadow text-white">
            <div className="text-3xl font-bold ">7</div>
            <div className="ml-4 ">
              <h4 className="text-lg  font-semibold">Countries</h4>
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
          {location ? (
            <p>
              Welcome! You're browsing from {location.city}, {location.country}.
            </p>
          ) : (
            <p>Loading your location...</p>
          )}
        </div>
      </div>

      <div className="bg-gray-100 my-4">
        <div className="p-6  shadow-lg rounded-lg">
          <h3 className="text-lg font-bold text-gray-700 mb-4">
            Top Categories
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center text-gray-700">
              <span>Electronics</span>
              <span className="text-green-500 font-bold">45%</span>
            </li>
            <li className="flex justify-between items-center text-gray-700">
              <span>Fashion</span>
              <span className="text-green-500 font-bold">30%</span>
            </li>
            <li className="flex justify-between items-center text-gray-700">
              <span>Home & Garden</span>
              <span className="text-green-500 font-bold">15%</span>
            </li>
            <li className="flex justify-between items-center text-gray-700">
              <span>Others</span>
              <span className="text-green-500 font-bold">10%</span>
            </li>
          </ul>
        </div>
      </div>


      {/* Filters */}
      <div className="flex items-center justify-between gap-4 my-4 bg-gray-100 p-3 rounded-md">
        <div className="flex justify-center items-center gap-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search Users By Name"
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
            />
            <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
          <select className="border rounded-lg px-4 py-2">
            <option value="all">All Roles</option>
            <option value="buyer">Buyers</option>
            <option value="seller">Sellers</option>
          </select>
        </div>
        <div className="px-6 py-2 text-lg"> 
          <p className="text-"> Users <span className="text-blue-600 text-xl"> "{users?.length}" </span></p>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h3 className="text-xl font-semibold text-gray-800 p-4 bg-gradient-to-r from-green-400 to-blue-500">
          All Users Recent Activities
        </h3>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                #
              </th>
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
            {users?.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 border-b transition">
                <td className="px-4 border-b border-r py-4 text-sm text-gray-800">{user?.id}</td>
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
                <td className="px-5 py-4 text-md flex space-x-2 gap-2 justify-center ">
                  <button
                    className=" text-blue-600 p-2 text-sm  rounded-2xl  hover:bg-gradient-to-r
                    from-indigo-600 to-violet-500 hover:text-white transition duration-300"
                  >
                    View
                  </button>
                  <button
                    disabled={!user.isApproved}
                    className=" text-red-600 p-2 text-sm  rounded-2xl  hover:bg-gradient-to-r
        from-red-600 to-orange-500 hover:text-white transition duration-300"
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

export default AdminDashboard;
