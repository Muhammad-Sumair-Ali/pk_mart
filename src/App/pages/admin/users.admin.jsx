import React, { useState } from 'react';
import Heading from '../../components/panel/Heading';
import { FaUsers, FaUserPlus, FaStar, FaShoppingCart, FaRegUser, FaRegThumbsUp } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineArrowUp } from 'react-icons/ai';

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'buyer', isSeller: false, isApproved: false },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'seller', isSeller: true, isApproved: true },
    // Example users
  ]);

  const filteredUsers = users.filter(
    (user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Card Data
  const stats = [
    {
      title: 'Top Sellers',
      description: 'Best performing sellers this month',
      icon: <FaStar className="text-4xl" />,
      bgColor: 'bg-gradient-to-r from-green-400 to-blue-500',
      count: 35, // Dynamic count example
    },
    {
      title: 'All Users',
      description: 'Total registered users',
      icon: <FaUsers className="text-4xl" />,
      bgColor: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      count: 1500,
    },
    {
      title: 'Buyer Users',
      description: 'Total buyers on the platform',
      icon: <FaShoppingCart className="text-4xl" />,
      bgColor: 'bg-gradient-to-r from-teal-400 to-cyan-600',
      count: 800,
    },
    {
      title: 'Seller Users',
      description: 'Total sellers on the platform',
      icon: <FaRegUser className="text-4xl" />,
      bgColor: 'bg-gradient-to-r from-yellow-400 to-orange-500',
      count: 700,
    },
    {
      title: 'Growing Users',
      description: 'Users with the fastest growth rate',
      icon: <AiOutlineArrowUp className="text-4xl" />,
      bgColor: 'bg-gradient-to-r from-blue-500 to-teal-500',
      count: 200,
    }
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
            <div key={index} className={`flex items-center justify-between p-2 md:p-3 ${card.bgColor} rounded-lg shadow-lg text-white`}>
              <div>
                <div className='flex items-center gap-3'>
                  <span className='text-md md:text-xl bg-white bg-opacity-20 p-1 md:p-2 rounded-full'>
              {card.icon}

                  </span>

                <h3 className="text-lg lg:text-xl font-semibold">{card.title}</h3>
                </div>
                <p className="text-sm">{card.description}</p>
                <p className="text-xl lg:text-2xl font-bold">{card.count}</p> {/* Dynamic count */}
              </div>
            </div>
          ))}
        </div>

        {/* User Search and Table */}
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Users"
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
            />
            <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
          <button
            className="bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center gap-2 text-white px-4 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition duration-200"
            onClick={() => alert('Add New User Functionality')}
          >
            <FaUserPlus />
            Add New User
          </button>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h3 className="text-xl font-semibold text-gray-800 p-4 bg-gradient-to-r from-green-400 to-blue-500">All Users</h3>
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Role</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <button className="text-yellow-500 hover:text-yellow-600">
                      <FaRegUser />
                    </button>
                    <button className="text-red-500 hover:text-red-600">
                      <FaRegThumbsUp />
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
