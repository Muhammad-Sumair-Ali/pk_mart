import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const GetBestPriceModal = ({ product, isLoggedIn }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        className="w-24 border border-gray-300 py-1 px-3 text-black text-xs md:text-sm rounded-xl hover:bg-gradient-to-r from-indigo-600 to-violet-500 hover:text-white transition duration-300"
        onClick={() => setOpen(true)}
      >
        Get Price
      </button>

      {/* Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full md:max-w-3xl transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition"
            >
              <span className="sr-only">Close</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side: Product Image and Details */}
              <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
                {/* Product Image */}
                <img
                  src={product?.images?.[1] || product?.thumbnail}
                  alt={product?.name || "Product Image"}
                  className="h-48 w-48 object-cover rounded-md shadow-md mb-4"
                />
                {/* Product Name */}
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                  {product?.title || "Product Name"}
                </h2>
                {/* Product Description */}
                <p className="text-sm text-gray-600 text-center mt-2">
                  {product?.description ||
                    "No description available. Please check back later for more details about this product."}
                </p>
              </div>

              {/* Right Side: Form and Interaction */}
              <div className="p-6 space-y-4">
                {/* Product Price */}
                <p className="text-md text-gray-800">
                  Price: <span className="text-blue-500">{product?.price ? `$${product?.price}` : "N/A"}</span>
                </p>
                <p className="text-md text-gray-800">
                  Minimum Order Quantity:{" "}
                  <span className="text-blue-500">{product?.minimumOrderQuantity || "N/A"}</span>
                </p>

                {isLoggedIn ? (
                  <div className="space-y-4 text-center">
                    <h3 className="font-semibold text-md">Sign in to get the best price</h3>
                    {/* Login Button */}
                    <button
                      onClick={() => alert("Login")}
                      className="w-3/4 m-auto bg-blue-500 text-white rounded-md py-2 font-semibold hover:bg-blue-600 transition duration-300"
                    >
                      Log In
                    </button>

                    {/* Google Login Button */}
                    <button
                      onClick={() => alert("Google login")}
                      className="w-3/4 m-auto bg-red-500 text-white rounded-md py-2 font-semibold hover:bg-red-600 transition duration-300"
                    >
                      Continue with Google
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-semibold mb-3 text-xs md:text-sm">Contact Seller and get details on your email quickly</h3>
                    {/* Input Fields */}
                    <form className="space-y-4">
                      {/* Quantity Input */}
                      <div className="flex flex-col">
                        <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                          Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          placeholder="Enter quantity"
                          className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          min="1"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </form>

                    {/* Submit Button */}
                    <button
                      className="w-full bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700 transition duration-300"
                      onClick={() => alert("Request Sent!")}
                    >
                      Get Best Price
                    </button>
                  </>
                )}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default GetBestPriceModal;
