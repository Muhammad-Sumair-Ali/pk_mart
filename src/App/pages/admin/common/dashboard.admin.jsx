import React from 'react';
import Heading from '../../../components/panel/Heading';
import { FaChartPie, FaUsers, FaTags, FaBox, FaChartLine } from 'react-icons/fa';

const AdminDashboard = () => {
  const cards = [
    {
      title: 'Total Users',
      count: 452,
      icon: <FaUsers />,
      bgColor: 'from-blue-500 to-blue-400',
    },
    {
      title: 'Categories',
      count: 28,
      icon: <FaTags />,
      bgColor: 'from-green-500 to-green-400',
    },
    {
      title: 'Products',
      count: 1235,
      icon: <FaBox />,
      bgColor: 'from-purple-500 to-purple-400',
    },
    {
      title: 'Sales Analytics',
      count: '$45,350',
      icon: <FaChartLine />,
      bgColor: 'from-yellow-500 to-yellow-400',
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
            className={`p-3 md:py-4 rounded-lg text-white shadow-lg bg-gradient-to-r ${card.bgColor}`}
          >
            <div className="flex items-center">
              <div className="text-2xl bg-white bg-opacity-20 md:p-4 p-2 rounded-full">{card.icon}</div>
              <div className="md:ml-4  ">
                <h3 className="text-sm md:text-lg font-semibold uppercase ">{card.title}</h3>
                <p className="text-2xl font-bold mt-1">{card.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Analytics Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales Overview */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Top Sellers</h3>
            <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
              {/* Placeholder for Bar Chart */}
              <p className="text-gray-400">Bar chart here</p>
            </div>
          </div>

          {/* User Demographics */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Most Product Selled</h3>
            <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
              {/* Placeholder for Pie Chart */}
              <p className="text-gray-400">Pie chart here</p>
            </div>
          </div>

          {/* Top Categories */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Top Categories</h3>
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
      </div>

      {/* Recent Activity Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activities</h2>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <ul className="divide-y divide-gray-200">
            <li className="py-4 flex justify-between">
              <span className="text-gray-600">User <strong>John Doe</strong> registered</span>
              <span className="text-gray-500 text-sm">2 hours ago</span>
            </li>
            <li className="py-4 flex justify-between">
              <span className="text-gray-600">Category <strong>Fashion</strong> updated</span>
              <span className="text-gray-500 text-sm">5 hours ago</span>
            </li>
            <li className="py-4 flex justify-between">
              <span className="text-gray-600">Product <strong>Wireless Earbuds</strong> added</span>
              <span className="text-gray-500 text-sm">1 day ago</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
