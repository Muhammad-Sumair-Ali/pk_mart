import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBox,
  FaUsers,
  FaList,
  FaChartBar,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { adminSidebarLinks, paths } from "../../../helper/paths";

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`${
        isSidebarOpen ? "w-52" : "w-16 pt-10"
      } flex-none bg-gray-200 text-gray-800 p-4 flex flex-col transition-all duration-300 relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-xl text-gray-600 md:hidden"
      >
        {isSidebarOpen ? (
          <span className="flex  justify-between items-center bg-gray-300 p-2 text-red-700">
          Close
                <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          </span>    
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-blue-600 hover:bg-blue-800 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </button>

      {/* Admin Dashboard Text */}
      <h2
        className={`text-lg font-semibold text-center mb-4 ${
          !isSidebarOpen && "hidden"
        }`}
      >
        Admin Dashboard
      </h2>

      <ul className="flex flex-col space-y-4">
        {/* Sidebar Links */}
        {adminSidebarLinks?.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={`flex items-center space-x-4 transition duration-150 text-gray-700 hover:text-blue-500 hover:bg-blue-200 py-2 px-4 rounded-md ${
                !isSidebarOpen && "justify-center"
              }`}
            >
              <div className="text-lg">{link.icon}</div>
              {isSidebarOpen && <span>{link.name}</span>}
            </Link>
          </li>
        ))}

        {/* Logout Link */}
        <li>
          <Link
            className="flex items-center space-x-4 text-gray-600 hover:text-blue-500 hover:bg-gray-200 py-2 px-4 rounded-lg transition duration-200"
            to="/logout"
          >
            <IoLogOut className="text-lg" />
            {isSidebarOpen && <span>Logout</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
