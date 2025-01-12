import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const NavGetBestPriceModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-xs hidden md:p-2 rounded-md bg-blue-600 text-white md:flex items-center gap-1"
      >
        Get Best Price
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          />
        </svg>
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      >
        <Dialog.Panel className="bg-white rounded-lg shadow-xl w-full h-auto p-4 max-w-3xl relative">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>


          <div className="flex justify-between items-center flex-row gap-4"> 

          <div className="w-1/1 p-2 rounded-lg bg-blue-700 text-white">  

          <div className="bg-white rounded-lg">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST6-3Wvo4S9l9L2hRNnWd_5Lq-sWmfORNuWg&s" 
            className="w-full h-52 mix-blend-multiply"
             />

          </div>

          <div className="mt-8 p-3">
            <h3 className="text-sm font-medium  mb-2">
              How it Works
            </h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li className="flex items-start">
                <span className="h-2.5 w-2.5 bg-fuchsia-600 rounded-full mr-2 mt-1"></span>
                Tell us what you need by filling the form
              </li>
              <li className="flex items-start">
                <span className="h-2.5 w-2.5 bg-fuchsia-600 rounded-full mr-2 mt-1"></span>
                Receive Verified supplier details
              </li>
              <li className="flex items-start">
                <span className="h-2.5 w-2.5 bg-fuchsia-600 rounded-full mr-2 mt-1"></span>
                Compare quotations and seal the deal
              </li>
            </ul>
          </div>

          </div>

          <form className="space-y-4 w-full">
            <h2 className="my-4 text-md text-gray-700">
            Receive quotations from verified suppliers exporting to your country
            </h2>
            <div>
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-600"
              >
                Enter Product/Service Name
              </label>
              <input
                type="text"
                id="product"
                className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter product or service name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex items-center justify-between mt-6">
                
            <span className="text-sm text-blue-600 underline" >Go to Login</span>
            <button className="flex items-center px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-50 transition">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              <span className="text-sm text-gray-700">Login with Google</span>
            </button>
          </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="text-center mt-2">

            <button
              type="submit"
              className="w-2/3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
              Get Quotations
            </button>
                </div>
          </form>
          </div>
          
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default NavGetBestPriceModal;
