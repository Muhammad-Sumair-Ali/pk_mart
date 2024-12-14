import React from "react";

const ProductSkeleton = () => {
  return (
    <>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Skeleton Cards */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse flex flex-col items-start bg-gray-200 rounded-lg shadow-md p-4"
            >
              {/* Image */}
              <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
              {/* Title */}
              <div className="mt-4 w-3/4 h-6 bg-gray-300 rounded-md"></div>
              {/* Price */}
              <div className="mt-2 w-1/3 h-4 bg-gray-300 rounded-md"></div>
              {/* Button */}
              <div className="mt-4 w-1/2 h-8 bg-gray-300 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
