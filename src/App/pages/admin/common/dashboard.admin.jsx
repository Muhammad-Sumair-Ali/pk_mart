import React, { useState } from "react";
import Heading from "../../../components/panel/Heading";
import {
  FaChartPie,
  FaUsers,
  FaTags,
  FaBox,
  FaChartLine,
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
      bgColor: "bg-gradient-to-r from-red-400 to-pink-600",
    },
    {
      title: "Pending Approvals",
      count: 700,
      description: "Sellers or products awaiting approval",
      icon: <FaRegUser className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-rose-400 to-amber-500",
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
            <p className="text-lg lg:text-xl font-bold">
              {card.count}
            </p>{" "}
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
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



    {/* approvels  */}

      <div className="bg-gray-100 rounded-lg shadow-md my-7 p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Total Pending Approvals
        </h3>

        {/* Become a Seller Section */}
        <div className="mb-3">
          <h4 className="text-lg font-medium text-red-700 mb-3">
            Pending "Become a Seller" Requests
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {users
              .filter((user) => user.isSeller && !user.isApproved)
              .map((user) => (
                <div
                  key={user.id}
                  className="bg-white rounded-lg shadow p-2 px-4 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-gray-800 font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-sm text-gray-500">{user.location}</p>
                  </div>
                  <div className="mt-4 flex justify-end space-x-3">
                    <button className="bg-green-500 text-white px-3 py-1.5 rounded-lg shadow hover:bg-green-600 transition text-sm">
                      Approve
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg shadow hover:bg-red-600 transition text-sm">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            {users.filter((user) => user.isSeller && !user.isApproved)
              .length === 0 && (
              <p className="text-gray-500 text-sm">No pending requests.</p>
            )}
          </div>
        </div>
        <hr className="text-lg border-2 border-gray-300" />
        {/* Pending Product Posts Section */}
        <div>
          <h4 className="text-lg font-medium text-red-700 mb-3 mt-6">
            Pending Product Posts
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                id: 1,
                title: "Wireless Earbuds",
                seller: "Jane Smith",
                date: "Jan 6, 2025",
              },
              {
                id: 2,
                title: "Gaming Chair",
                seller: "Liam Taylor",
                date: "Jan 5, 2025",
              },
            ].map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow p-2 px-4 flex flex-col justify-between"
              >
                <div>
                  <p className="text-gray-800 font-medium">{product.title}</p>
                  <p className="text-sm text-gray-500">
                    Seller: {product.seller}
                  </p>
                  <p className="text-sm text-gray-500">
                    Requested on: {product.date}
                  </p>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  <button className="bg-green-500 text-white px-3 py-1.5 rounded-lg shadow hover:bg-green-600 transition text-sm">
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg shadow hover:bg-red-600 transition text-sm">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



 
      {/* Filters */}
            <div className="flex items-center justify-between my-4 bg-gray-100 p-3 rounded-md">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search Users By Name"
                  className="pl-10 pr-4 py-2 border rounded-lg w-full"
                />
                <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-500" />
              </div>
              <select
                className="border rounded-lg px-4 py-2"
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
                  {users?.map((user) => (
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
