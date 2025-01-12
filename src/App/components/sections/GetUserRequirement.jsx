
import { DocumentTextIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FaHandshake } from "react-icons/fa";

const GetUserRequirement = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-100 via-indigo-100 rounded-lg py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Get <span className="text-blue-600">free</span> quotes from
            multiple sellers
          </h1>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <PaperAirplaneIcon className="h-16 w-14    text-blue-600" />
              <span className="text-gray-700 font-medium">
                Tell us what You Need
              </span>
            </li>
            <li className="flex items-center gap-4">
              <DocumentTextIcon className="h-16 w-14 text-blue-600" />
              <span className="text-gray-700 font-medium">
                Receive free quotes from sellers
              </span>
            </li>
            <li className="flex items-center gap-4">
              <FaHandshake className="h-16 w-14 text-blue-600" />
              <span className="text-gray-700 font-medium">Seal the Deal</span>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Tell us your Requirement
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Enter Product / Service name"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
              Submit Requirement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetUserRequirement
