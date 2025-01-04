import React from "react";
import Heading from "../../components/panel/Heading";
import { FaBoxes, FaPlus, FaRegSadCry, FaTruck, FaRegCheckCircle, FaDollarSign, FaBox } from 'react-icons/fa'; 

const summaryCards = [
  {
    title: "Total Products",
    count: "1,234",
    icon: <FaBoxes />,
    bgClass: "from-purple-500 to-purple-400",
    textClass: "text-white",
  },
  {
    title: "New Products",
    count: "54",
    icon: <FaPlus />,
    bgClass: "from-green-500 to-green-400",
    textClass: "text-white",
  },
  {
    title: "Out of Stock",
    count: "12",
    icon: <FaRegSadCry />,
    bgClass: "from-red-500 to-red-400",
    textClass: "text-white",
  },
  {
    title: "Approved Sellers",
    count: "320",
    icon: <FaRegCheckCircle />,
    bgClass: "from-blue-500 to-blue-400",
    textClass: "text-white",
  },
 
];
const AdminProducts = () => {
 
  return (
    <>
      {/* Page Heading */}
      <Heading
        icon={<FaBox />}
        title="Product Analytics"
        desc="Analyze and manage all products in your store"
      />

      {/* Summary Analytics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 text-white">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${card.bgClass} p-2 md:p-3 md:py-4 rounded-lg shadow-md flex items-center space-x-2`}
          >
            <div className="text-2xl rounded-full bg-gray-300 bg-opacity-50 p-2 md:p-3">{card.icon}</div>
            <div>
              <h3 className="text-md md:text-xl font-semibold">{card.title}</h3>
              <p className="text-3xl font-bold mt-2">{card.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between my-6 gap-4">
        <div className="w-full sm:w-auto">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            className="mt-1 block w-full sm:w-48 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Garden</option>
          </select>
        </div>
        <div className="w-full sm:w-auto">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700"
          >
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search products..."
            className="mt-1 block w-full sm:w-48 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-blue-600">
          Apply Filters
        </button>
      </div>

      {/* Product Listing */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Image</th>
              <th className="px-4 py-3 text-left font-semibold">Product ID</th>
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-left font-semibold">Category</th>
              <th className="px-4 py-3 text-left font-semibold">Price</th>
              <th className="px-4 py-3 text-left font-semibold">Stock</th>
              <th className="px-4 py-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows */}
            {[
              {
                id: "001",
                name: "Wireless Headphones",
                category: "Electronics",
                price: "$59.99",
                stock: "In Stock",
                image: "https://via.placeholder.com/50",
              },
              {
                id: "002",
                name: "Smartwatch",
                category: "Electronics",
                price: "$199.99",
                stock: "Low Stock",
                image: "https://via.placeholder.com/50",
              },
              {
                id: "003",
                name: "Leather Jacket",
                category: "Fashion",
                price: "$129.99",
                stock: "Out of Stock",
                image: "https://via.placeholder.com/50",
              },
            ].map((product, index) => (
              <tr key={index} className="hover:bg-gray-100 border-b">
                <td className="px-4 py-3">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2023/11/364732525/QF/GM/PB/63235302/whatsapp-image-2023-11-22-at-3-07-22-pm-1-250x250.jpeg"
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded-lg"
                  />
                </td>
                <td className="px-4 py-3">{product.id}</td>
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3">{product.price}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3">
                  <button className="text-red-500 hover:underline">
                    Delete
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

export default AdminProducts;
