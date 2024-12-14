import React from "react";
import ProductDetailModal from "../modal/ProductDetailModal";

const ProductCardDefault = ({ product }) => {
  return (
    <div className="bg-orange-50 ">
      <div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"> */}

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
            <p className="text-sm text-gray-500 mt-1">{product?.price}</p>
           <ProductDetailModal product={product}/> 
            <p className="mt-2 text-xs text-gray-400">
              Launched on {product?.launchDate}
            </p>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};
export default ProductCardDefault;
