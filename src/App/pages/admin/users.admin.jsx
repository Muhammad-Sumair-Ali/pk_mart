import React, { useState } from "react";
import Heading from "../../components/panel/Heading";
import {
  FaUsers,
  FaShoppingCart,
  FaRegUser,
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
    {
      title: "Active Users",
      description: "Number of active users on the platform",
      icon: <FaRegUser className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-green-500 to-lime-600",
      count: 350,
    },
    {
      title: " InActive Users",
      description: "Number of inactive users on the platform",
      icon: <FaRegUser className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-red-500 to-orange-600",
      count: 270,
    },
  ];

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "buyer",
    location: "",
  });

  const handleAddUser = () => {
    const id = users.length + 1;
    setUsers([
      ...users,
      {
        ...newUser,
        id,
        lastLogin: new Date(),
        recentActivity: "Newly added user",
      },
    ]);
    setNewUser({ name: "", email: "", role: "buyer", location: "" });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditUser = (id, updatedUser) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
    );
  };

  const isUserActive = (lastLogin) => {
    const twentyDaysAgo = new Date();
    twentyDaysAgo.setDate(twentyDaysAgo.getDate() - 20);
    return new Date(lastLogin) >= twentyDaysAgo;
  };

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (roleFilter === "all" || user.role === roleFilter)
  );

  return (
    <>
      <Heading
        icon={<FaUsers />}
        title="Users Management"
        desc="Manage Users, Assign Roles, and More"
      />

      <div className="mb-6">
        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 lg:gap-3  mb-8">
          {" "}
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

      <div className="mb-6">
        {/* Add New User */}
        <div className="mb-4 p-2 bg-gray-100 py-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Add New User</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              placeholder="Name"
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              placeholder="Email"
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              value={newUser.location}
              onChange={(e) =>
                setNewUser({ ...newUser, location: e.target.value })
              }
              placeholder="Location"
              className="border rounded-lg px-4 py-2"
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="border rounded-lg px-4 py-2"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="manager">Manager</option>
            </select>

            <button
              onClick={handleAddUser}
              className="mx-2 px-3 py-2 bg-blue-500 text-white rounded-lg"
            >
              Add User
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between my-5 bg-gray-100 p-2 rounded-md">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Users By Name or Email"
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
            <option value="manager">Managers</option>
          </select>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h3 className="text-xl font-semibold text-gray-800 p-4 bg-gradient-to-r from-green-400 to-blue-500">
            All Users
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
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-100 text-sm transition"
                >
                  <td className="px-6 py-4  text-gray-800">{user.name}</td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4  text-gray-600">{user.role}</td>
                  <td className="px-6 py-4 text-gray-600">
                    <FaMapMarkerAlt className="inline mr-1" /> {user.location}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {isUserActive(user?.lastLogin) ? "Active" : "Inactive"}
                  </td>

                  <td className="px-5 py-4 text-md flex space-x-2 gap-2 justify-center ">
                    <button
                      className=" text-blue-600 p-2 text-sm  rounded-2xl  hover:bg-gradient-to-r
                    from-indigo-600 to-violet-500 hover:text-white transition duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
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
      </div>
    </>
  );
};

export default AdminUsers;
