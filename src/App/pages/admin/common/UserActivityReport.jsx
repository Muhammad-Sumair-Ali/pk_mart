import React, { useState, useEffect } from 'react';
import { FaSearch, FaEye, FaTags } from 'react-icons/fa';

const UserActivityReport = () => {
  // Mock data for user activity
  const [userActivity, setUserActivity] = useState({
    mostViewedProducts: [
      { name: 'Product X', views: 125 },
      { name: 'Product Y', views: 110 },
      { name: 'Product Z', views: 90 },
    ],
    mostSearchedCategories: [
      { category: 'Electronics', searches: 340 },
      { category: 'Fashion', searches: 290 },
      { category: 'Home Appliances', searches: 210 },
    ],
    recentSearches: [
      { query: 'Wireless Earbuds', searchedAt: '5 mins ago' },
      { query: 'Summer Collection', searchedAt: '30 mins ago' },
      { query: 'Gaming Laptops', searchedAt: '1 hour ago' },
    ],
  });

  useEffect(() => {
    // Fetch user activity data from your API here
  }, []);

  return (
    <div className="my-6">
      {/* <h2 className="text-2xl font-semibold mb-4">User Activity Report</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Most Viewed Products */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <FaEye className="mr-2 text-blue-500" /> Most Viewed Products
          </h3>
          <ul>
            {userActivity.mostViewedProducts.map((product, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
              >
                <span>{product.name}</span>
                <span className="text-gray-600">{product.views} views</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Most Searched Categories */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <FaTags className="mr-2 text-green-500" /> Most Searched Categories
          </h3>
          <ul>
            {userActivity.mostSearchedCategories.map((category, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
              >
                <span>{category.category}</span>
                <span className="text-gray-600">{category.searches} searches</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default UserActivityReport;
