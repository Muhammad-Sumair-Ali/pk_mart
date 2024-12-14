import React from "react";

const FeaturedCategories = () => {
    const categories = [
        {
          title: "Christmas Decors",
          image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
        {
          title: "Clothing",
          image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
        {
          title: "Furniture",
          image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
        {
          title: "T-shirt",
          image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
        {
          title: "Gravity Bong",
          image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
        {
          title: "Refurbished Laptops",
          image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
        {
          title: "Stacked Pants",
          image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
        {
          title: "Self Defense Keychain",
          image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
      ];
    
      return (
        <section className="py-4 bg-gray-100">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <div>
              <h2 className="text-2xl font-bold text-gray-800">Featured Categories</h2>
              <p className="text-sm text-gray-500">
                The most in-demand categories among buyers.
              </p>
              </div>
              <div>
              <h2 className="text-lg  font-semibold text-blue-800 underline">View all </h2>
             
              </div>
            </div>
    
            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:gap-3">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-cente drop-shadow-lg bg-white rounded-xl shadow hover:shadow-md transition p-1 mt-2"
                >
                  {/* Category Image */}
                  <img
                    src={"https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png" || category.image}
                    alt={category.title}
                    className="w-full  h-24 rounded-xl object-cover mb-2 hover:scale-110 transition-all"
                  />
                  {/* Category Title */}
                  <h3 className="text-sm font-medium text-gray-800 text-center truncate">
                    {category.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        )
};

export default FeaturedCategories;
