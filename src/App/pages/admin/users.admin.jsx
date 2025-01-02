// users.js

import React from 'react';
import Heading from '../../components/panel/Heading';
import { FaUsers } from 'react-icons/fa';

const AdminUsers = () => {
  return (
    <>
      <Heading
        icon={<FaUsers />}
        title="Users Management"
        desc="View All Users & Approve Seller Approvals" 
      />
      <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
      {/* User management content */}
      <p>Here you can manage users...</p>
    </>
  );
};

export default AdminUsers;
