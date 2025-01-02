import React from 'react';
import Heading from '../../components/panel/Heading';
import { FaBox } from 'react-icons/fa';

const AdminProducts = () => {
  return (
    <>
    <Heading
        icon={<FaBox />}
        title="Users Management"
        desc="View All Users & Approve Seller Approvals" 
      />
      <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
      {/* Product management content */}
      <p>Here you can manage products...</p>
    </>
  );
};

export default AdminProducts;
