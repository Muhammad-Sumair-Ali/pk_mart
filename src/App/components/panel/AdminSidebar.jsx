// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaBox, FaUsers, FaList, FaChartBar, FaClipboardList, FaCheckCircle } from 'react-icons/fa'; // Icons for each page
import { MdDashboard } from 'react-icons/md';
import { paths } from '../../../helper/paths';

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 flex flex-col">
      <h2 className="text-2xl font-semibold text-center mb-8">Admin Dashboard</h2>
      <ul className="flex flex-col space-y-4">
        <li>
          <Link to={paths.adminProducts} className="flex items-center space-x-4 text-gray-300 hover:text-white hover:bg-gray-700 py-2 px-4 rounded-lg transition duration-200">
            <FaBox className="text-lg" />
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link to={paths.adminCategories} className="flex items-center space-x-4 text-gray-300 hover:text-white hover:bg-gray-700 py-2 px-4 rounded-lg transition duration-200">
            <FaList className="text-lg" />
            <span>Categories</span>
          </Link>
        </li>
        <li>
          <Link to={paths.adminSubcategories} className="flex items-center space-x-4 text-gray-300 hover:text-white hover:bg-gray-700 py-2 px-4 rounded-lg transition duration-200">
            <FaClipboardList className="text-lg" />
            <span>Subcategories</span>
          </Link>
        </li>
        <li>
          <Link to={paths.adminUsers} className="flex items-center space-x-4 text-gray-300 hover:text-white hover:bg-gray-700 py-2 px-4 rounded-lg transition duration-200">
            <FaUsers className="text-lg" />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link to={paths.adminreports} className="flex items-center space-x-4 text-gray-300 hover:text-white hover:bg-gray-700 py-2 px-4 rounded-lg transition duration-200">
            <FaChartBar className="text-lg" />
            <span>Reports</span>
          </Link>
        </li>
        <li>
          <Link to={paths.adminapprovals} className="flex items-center space-x-4 text-gray-300 hover:text-white hover:bg-gray-700 py-2 px-4 rounded-lg transition duration-200">
            <FaCheckCircle className="text-lg" />
            <span>Seller Approvals</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
