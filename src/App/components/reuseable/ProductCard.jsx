import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetBestPriceModal from "../modal/GetBestPriceModal";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"; 

const ProductCard = ({ product }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product?.title,
          text: `Check out this product: ${product?.title}`,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully!"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <div className="bg-gray-100">
      <div>
        <div className="bg-white rounded-lg shadow-lg  border border-gray-200">
          {/* Product Image */}
          <div className="relative">
            <div className="overflow-hidden h-auto border-b-2">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product?.thumbnail}
                  alt={product?.title}
                  className="w-full h-52 md:h-60 object-cover bg-gradient-to-b from-blue-100 via-white hover:scale-110 transition-all"
                />
              </Link>
            </div>
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <EllipsisVerticalIcon className="w-5 h-5 text-gray-700" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 sm:right-2 top-11 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-40 sm:w-44 z-50">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-x-1 px-2 py-2 rounded-md hover:bg-gray-100 transition duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                        />
                      </svg>
                      Report
                    </a>
                  </li>

                  {/* Share Option */}
                  <li>
                    <button
                      onClick={handleShare}
                      className="px-2 gap-x-1 flex items-center py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 text-blue-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                        />
                      </svg>
                      Share This Product
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="min-h-[135px] max-h-[150px] flex flex-col justify-between">
            <div className="px-2 pt-2">
              <h3 className="text-sm font-semibold text-gray-800">
                {product?.title}
              </h3>
              <p className="text-sm text-gray-600">
                <span className="text-blue-500">PKR </span> {product?.price}
              </p>
              <p className="text-sm text-gray-600">
                <span className="mr-1">Min Qty</span>
                {product?.stock} Pieces
              </p>
            </div>

            <div className="flex items-center gap-x-1 py-2 px-1 justify-between mt-1 md:mt-2">
              <button className="w-20 md:w-24 border border-gray-300 p-1 px-2 text-black text-xs rounded-2xl hover:bg-gradient-to-r from-indigo-600 to-violet-500 hover:text-white transition duration-300">
                Call Now
              </button>
              <GetBestPriceModal product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
