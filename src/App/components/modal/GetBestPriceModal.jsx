import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const GetBestPriceModal = ({ product }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
       className="w-20 md:w-24 border border-gray-300 p-1 px-2 text-black text-xs rounded-2xl hover:bg-gradient-to-r from-indigo-600 to-violet-500 hover:text-white transition duration-300"
       onClick={() => setOpen(true)}
      >
        Get price
      </button>

      {/* Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
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
              <div className="bg-gray-100 p-6 flex flex-col items-center justify-center">
                {/* Product Image */}
                <img
                  src={product?.images?.[1] || product?.thumbnail}
                  alt={product?.name || "Product Image"}
                  className="h-64 w-64 object-cover rounded-md shadow-md mb-4"
                />
                {/* Product Name */}
                <h2 className="text-2xl font-bold text-gray-800 text-center">
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
                <p className="text-xl text-blue-600 font-semibold">
                  Price: {product?.price ? `$${product?.price}` : "N/A"}
                </p>
                {/* Input Fields */}
                <form className="space-y-4">
                  {/* Quantity Input */}
                  <div className="flex flex-col">
                    <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      placeholder="Enter quantity"
                      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  {/* Phone Input */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </form>
                {/* Submit Button */}
                <button
                  className="w-full bg-green-500 text-white rounded-md py-2 font-semibold hover:bg-green-600 transition duration-300"
                  onClick={() => alert("Request Sent!")}
                >
                  Get Best Price
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default GetBestPriceModal;
