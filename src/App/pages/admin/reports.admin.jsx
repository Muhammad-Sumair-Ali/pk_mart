import React, { useState, useEffect } from 'react';
import Heading from '../../components/panel/Heading';
import { FaChartBar, FaExclamationTriangle, FaBox, FaThumbsDown } from 'react-icons/fa';

const AdminReports = () => {
  // Mock data for product reports
  const [productReports, setProductReports] = useState([
    {
      productName: 'Product A',
      issue: 'Out of stock',
      issueDescription: 'This product is out of stock and needs to be restocked.',
      reportedAt: '2 hours ago',
      status: 'Pending Restock',
    },
    {
      productName: 'Product B',
      issue: 'Low ratings',
      issueDescription: 'This product has received multiple low ratings from customers due to quality concerns.',
      reportedAt: '5 hours ago',
      status: 'Needs Quality Check',
    },
    {
      productName: 'Product C',
      issue: 'Incorrect classification',
      issueDescription: 'This product is incorrectly categorized under "Electronics" but is a "Home Appliance".',
      reportedAt: '1 day ago',
      status: 'Pending Reclassification',
    },
    {
      productName: 'Product D',
      issue: 'Damaged',
      issueDescription: 'Several reports of damaged items received after shipping.',
      reportedAt: '3 hours ago',
      status: 'Awaiting Return',
    },
  ]);

  useEffect(() => {
    // This is where you would fetch product issue report data from your API
  }, []);

  return (
    <>
      <Heading
        icon={<FaChartBar />}
        title="Product Issue Reports"
        desc="View detailed reports for products with issues"
      />
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 my-6">
        <div className="bg-gradient-to-r from-red-500 to-red-400 text-white p-3 rounded-lg shadow-md flex items-center">
          <FaExclamationTriangle className="text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Issues Reported</h3>
            <p className="text-3xl font-bold mt-2">54</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white p-3 rounded-lg shadow-md flex items-center">
          <FaBox className="text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Out of Stock</h3>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white p-3 rounded-lg shadow-md flex items-center">
          <FaThumbsDown className="text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Low Ratings</h3>
            <p className="text-3xl font-bold mt-2">8</p>
          </div>
        </div>
      </div>
      {/* Product Issues Section */}
      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-4">Product Issues</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Product</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Issue</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Description</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Reported At</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {productReports.map((report, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">{report.productName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold capitalize bg-yellow-100 text-yellow-800">
                      <FaExclamationTriangle className="mr-1" />
                      {report.issue}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{report.issueDescription}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{report.reportedAt}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{report.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Issue Analytics Cards */}
    </>
  );
};

export default AdminReports;
