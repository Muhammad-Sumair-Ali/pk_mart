import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-100">
      <div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          {/* Product Image */}
          <div className="relative">
            <div className="overflow-hidden h-auto border-b-2">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product?.thumbnail}
                  alt={product?.title}
                  className="w-full h-52 md:h-60  object-cover bg-gradient-to-b from-blue-100 via-white hover:scale-110 transition-all "
                />
              </Link>
            </div>
            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 hover:text-blue-600 hover:scale-110 transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
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
            <p className="text-sm text-gray-600">
              {" "}
              <span className="text-blue-500">PKR </span> {product?.price}
            </p>
            <p className="text-sm text-gray-600 mb-1 ">
              {" "}
               <span className="mr-1">
Min Qty
              </span>
              {product?.stock} Pieces             </p>

            <div className="flex items-center justify-between gap-x-1">
              <button
                className="w-20 md:w-24 border border-gray-300 p-1 px-2 text-black text-xs rounded-2xl  hover:bg-gradient-to-r
              from-indigo-600 to-violet-500 hover:text-white transition duration-300"
              >
              Call Now
              </button>
              <button
                className="w-20 md:w-24 border border-gray-300 p-1 px-2 text-black text-xs rounded-2xl  hover:bg-gradient-to-r
              from-indigo-600 to-violet-500 hover:text-white transition duration-300"
              >
                Get Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
