import React from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../helper/paths";

const ProductCard = ({ product, viewby }) => {
  // console.log("product", product)
  const navigate =  useNavigate()
  return (
    <div
    key={product.id}
      className={`shadow-lg ${
        viewby === "col"
          ? "border max-h-[400px]  rounded-lg shadow-sm p-4 hover:shadow-md"
          : "flex items-center border rounded-lg p-2 hover:shadow-md"
      }`}
    >
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className={`bg-blue-100 rounded-md shadow-md ${
          viewby === "col"
            ? "w-full h-40 object-cover rounded"
            : "w-32 h-32 mr-4"
        }`}
      />

      {/* Product Details */}
      <div className={`box-content w-full  ${viewby === "col" ? "" : "flex flex-row"}`}>
        <div className="w-2/3 flex flex-col justify-between py-2 px-1">

        <h3 className="text-xs font-bold  ">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        <p className="text-blue-600 font-semibold">${product.price}</p>
        </div>
     <div className={` flex  md:flex-col flex-col text-center m-auto  w-full text-white  ${viewby === "col" ? "md:w-full" : "md:w-2/4 flex flex-row"}`} >

      
        <button className="p-2 w-full border  rounded-md bg-blue-700"> Chat now </button>
        <button onClick={() => navigate(`/products/${product.id}`)} className="p-2 w-full border rounded-md bg-green-500"> View details </button>
     </div>
      </div>
    </div>
  );
};

export default ProductCard;
