import React from "react";
import ProductDetailModal from "../modal/ProductDetailModal";

const ProductCardProfile = ({ product }) => {
  return (
    <div className="bg-gray-100 ">
      <div>
       
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          {/* Product Image */}
          <div className="relative">
            <div className="overflow-hidden h-auto border-b-2">
              <img
                src={product?.thumbnail}
                alt={product?.title}
                className="w-full h-52  object-cover bg-gradient-to-b from-blue-100 via-white hover:scale-110 transition-all "
              />
            </div>
            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-gray-500 hover:text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 9.24 3 10.91 3.81 12 5.09 13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
          </div>

          {/* Product Info */}
          <div className="p-3">
            <p
              className="text-xs text-gray-500 -mt-2 line-clamp-2"
              title={product?.description}
            >
              {product?.description}{" "}
            </p>
            <h3 className="text-sm font-semibold text-gray-800">
              {product?.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1"> <span className="text-blue-500">PKR </span> {product?.price}</p>

            <div className="flex items-center justify-between gap-x-1">
            <ProductDetailModal product={product} />
            <button
              className="w-20 border border-gray-300 p-1 px-2 text-black text-xs rounded-2xl  hover:bg-gradient-to-r
              from-indigo-600 to-violet-500 hover:text-white transition duration-300" >
              Get Price
            </button>
           </div>

          </div>
        </div>

     
      </div>
    </div>
  );
};
export default ProductCardProfile;
