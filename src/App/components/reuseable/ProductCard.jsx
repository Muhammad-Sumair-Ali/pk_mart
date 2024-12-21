import React from "react";
import { Link } from "react-router-dom";
import GetBestPriceModal from "../modal/GetBestPriceModal";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-100">
      <div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
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
           
          </div>

          {/* Product Info */}
          <div className=" min-h-[135px] max-h-[150px] flex flex-col justify-between">
            <div className="px-2 pt-2">
              {/* <p
                className="text-xs text-gray-500 line-clamp-2"
                title={product?.description}
              >
                {product?.description}
              </p> */}
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
              <button
                className="w-20 md:w-24 border border-gray-300 p-1 px-2 text-black text-xs rounded-2xl hover:bg-gradient-to-r from-indigo-600 to-violet-500 hover:text-white transition duration-300"
              >
                Call Now
              </button>
              {/* <button
                className="w-20 md:w-24 border border-gray-300 p-1 px-2 text-black text-xs rounded-2xl hover:bg-gradient-to-r from-indigo-600 to-violet-500 hover:text-white transition duration-300"
              >
                Get Price
              </button> */}
              <GetBestPriceModal product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
