import React from 'react';
import Heading from '../../../components/panel/Heading';
import { FaChartPie, FaUsers, FaTags, FaBox, FaChartLine } from 'react-icons/fa';

const AdminDashboard = () => {
  const cards = [
    { title: 'Total Users', count: 452, icon: <FaUsers />, bgColor: 'bg-blue-500' },
    { title: 'Categories', count: 28, icon: <FaTags />, bgColor: 'bg-green-500' },
    { title: 'Products', count: 1235, icon: <FaBox />, bgColor: 'bg-purple-500' },
    { title: 'Sales Analytics', count: '$45,350', icon: <FaChartLine />, bgColor: 'bg-yellow-500' },
  ];

  return (
    <>
      <Heading
        icon={<FaChartPie />}
        title="Dashboard"
        desc="View All Analytics"
      />

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg text-white shadow-md ${card.bgColor}`}
          >
            <div className="flex items-center">
              <div className="text-3xl">{card.icon}</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-lg font-bold">{card.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Analytics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-200 shadow-md rounded-lg">
            {/* Placeholder for a Bar Chart */}
            <h3 className="text-lg font-bold mb-2">Sales Overview</h3>
            <p>Bar chart or analytics content here...</p>
          </div>
          <div className="p-4 bg-gray-200 shadow-md rounded-lg">
            {/* Placeholder for a Pie Chart */}
            <h3 className="text-lg font-bold mb-2">User Demographics</h3>
            <p>Pie chart or analytics content here...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
