import React from "react";
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
import { adminSidebarLinks, paths } from "../../../helper/paths";
import { IoLogOut } from "react-icons/io5";

const AdminSidebar = () => {
  return (
    <div className="w-56  flex-none bg-gray-800 text-white p-4 flex flex-col">
      <h2 className="text-xl font-semibold text-center mb-7">
        Admin Dashboard
      </h2>
      <ul className="flex flex-col space-y-4">
        
        {adminSidebarLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="flex items-center space-x-4 text-gray-200 bg-gray-700 hover:text-blue-500 hover:bg-gray-900  py-2 
              px-4 rounded-lg transition duration-200"
            >
              <div className="text-lg"> {link.icon} </div>
              <span> {link.name} </span>
            </Link>
          </li>
        ))}
        <li>
          <Link className="flex items-center space-x-4 text-gray-300 hover:text-white hover:bg-gray-700 py-2 px-4 rounded-lg transition duration-200">
            <IoLogOut className="text-lg" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
