import AdminSidebar from '../../components/panel/AdminSidebar';
// AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // To render nested routes
// import Sidebar from './Sidebar'; // Your sidebar component

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />
      
      {/* Main content area where nested components will be rendered */}
      <div className="flex-1 min-w-0 overflow-auto py-5 px-2 md:px-5 md:py-8">
        {/* <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1> */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
