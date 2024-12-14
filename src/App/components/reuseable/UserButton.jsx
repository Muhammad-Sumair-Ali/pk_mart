import { useState } from "react";

function ButtonGroup() {
  const [selected, setSelected] = useState("Supplier"); 

  return (
    <div className="flex justify-center items-center mb-3">
      <div className="flex border border-gray-300 rounded-full overflow-hidden shadow-lg bg-white">
        {/* Supplier Button */}
        <button
          className={`px-8 py-3 w-32 font-semibold focus:outline-none transition-all duration-300 
            ${
              selected === "Supplier"
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md hover:from-blue-700 hover:to-blue-600"
                : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          onClick={() => setSelected("Supplier")}
        >
          Supplier
        </button>

        {/* Buyer Button */}
        <button
          className={`px-8 w-32 py-3 font-semibold focus:outline-none transition-all duration-300 
            ${
              selected === "Buyer"
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md hover:from-blue-700 hover:to-blue-600"
                : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          onClick={() => setSelected("Buyer")}
        >
          Buyer
        </button>
      </div>
    </div>
  );
}

export default ButtonGroup;
