import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetBestPriceModal from "../modal/GetBestPriceModal";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { useMyMarketAction } from "../../../action/mymarket";

const ProductCard = ({ product, removeProductFromWishlist }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { addProductToWishlist } = useMyMarketAction();
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
            <button
              onClick={handleShare}
              className="px-2 gap-x-1 absolute top-2 left-2 flex items-center py-2 bg-white rounded-full text-sm text-gray-700  hover:bg-gray-100 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 sm:right-2 top-11 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-40 sm:w-44 z-50">
                <ul className="py-2 text-sm text-green-600">
                  <li>
                    <button
                      onClick={() => addProductToWishlist(product)}
                      className="flex items-center gap-x-1 px-2 py-2 text-sm rounded-md hover:bg-gray-100 transition duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-green-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                        />
                      </svg>
                      save to My Mart
                    </button>
                  </li>

                  {/* Share Option */}
                  <li>
                    <button
                      onClick={handleShare}
                      className="px-2 gap-x-1 flex items-center py-2 text-sm text-red-700 rounded-md hover:bg-gray-100 transition duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                      Report This Product
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

            <div className="flex items-center gap-x-1 xl:px-4 py-2 px-1 justify-between mt-1 md:mt-2">
              {removeProductFromWishlist ? (
                <button
                  onClick={() => removeProductFromWishlist(product.id)}
                  className="w-20 md:w-24 border border-red-600 bg-red-400 p-1 px-2 text-black text-xs rounded-2xl hover:bg-gradient-to-r
               from-red-600 to-red-500 hover:text-white transition duration-300"
                >
                  Delete
                </button>
              ) : (
                <button className="w-20 md:w-24 border border-gray-300 p-1 px-2 text-black text-xs rounded-2xl hover:bg-gradient-to-r from-indigo-600 to-violet-500 hover:text-white transition duration-300">
                  Call Now
                </button>
              )}
              <GetBestPriceModal product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
