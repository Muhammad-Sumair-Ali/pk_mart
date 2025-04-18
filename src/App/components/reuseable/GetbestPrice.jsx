import React from 'react';

const GetbestPrice = () => {
  return (
    <div className="md:px-4 px-1 mt-4">
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-50 shadow-xl p-2 md:p-4 rounded-lg ">
      <h3 className="text-md md:text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
        Get the Best Deals, Faster and Smarter
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 md:w-6 md:h-6 text-blue-500 drop-shadow-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </span>
      </h3>
      <p className="text-sm md:text-base text-gray-600 mb-1">
        Let us help you get the best deals quickly and efficiently. Fill in
        the details below!
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-4 ">
        <input
          type="text"
          placeholder="Product/Service Name"
          className="md:p-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm w-full"
        />
        <input
          type="text"
          placeholder="Email/Contact No."
          className="md:p-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm w-full"
        />
        <input
          type="number"
          placeholder="Qty"
          className="md:p-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        />
        <button
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg
         hover:from-blue-600 hover:to-blue-700 transition-all duration-200 w-auto min-w-32 md:w-40 md:p-3 m-auto"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
);
};

export default GetbestPrice;
