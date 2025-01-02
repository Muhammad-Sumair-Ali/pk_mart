import React from "react";

const Heading = ({ desc, title, icon }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 mb-4 bg-gradient-to-r from-gray-800 to-blue-600 rounded-lg shadow-lg text-white">
      {/* Icon and Title Section */}
      <div className="flex items-center space-x-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h1 className="text-xl font-bold tracking-wide">{title}</h1>
          <p className="text-sm text-gray-200 mt-1">{desc}</p>
        </div>
      </div>

      {/* Export Button */}
      <button
        className="px-4 py-2 bg-white text-blue-600 font-medium rounded-md shadow hover:bg-blue-100 transition"
        onClick={() => alert("Exporting data...")}
      >
        Hello Sir 
      </button>
    </div>
  );
};

export default Heading;
