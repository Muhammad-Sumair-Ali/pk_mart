import React from "react";

const FeaturedSection = () => {
  
  const items = [
    {
      title: "Senior Platform Reliability Engineer",
      price: "$160,000",
      views: 202,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      title: "Shahid Builders Private Limited Company",
      price: "$312,000",
      views: 312,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      title: "Soghat e sheerin Sweets and Bakers",
      price: "$353,000",
      views: 353,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      title: "Zaytun",
      price: "$369,000",
      views: 369,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      title: "Product 1",
      price: "$100,000",
      views: 150,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
   
  ];

  return (
    <section className="py-5 bg-gray-100 ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-semibold text-gray-900">Featured Listing</h2>
          <button className="text-blue-600 font-medium hover:underline">
            View All
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              {/* Image */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGvxtr7vmYvKw_dBgBPf98isHM4Cz6REorg&s"
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 truncate">
                  {item.title}
                </h3>
                <p className="text-blue-500 font-medium">{item.price}</p>
              </div>
              {/* Footer */}
              <div className="px-4 py-2 flex justify-between items-center border-t">
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <span className="flex items-center">
                    <i className="fas fa-eye mr-1"></i>
                    {item.views} Views
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-blue-500">
                    <i className="fas fa-heart"></i>
                  </button>
                  <button className="text-gray-500 hover:text-blue-500">
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
