import React from "react";
import { useMyMarketAction } from "../../action/mymarket";
import { Link } from "react-router-dom";
import ProductCard from "../components/reuseable/ProductCard";

const MyMarketListPage = () => {
  const {
    wishlist,
    addProductToWishlist,
    removeProductFromWishlist,
    addSellerToWishlist,
    removeSellerFromWishlist,
  } = useMyMarketAction();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          My Market Wishlist
        </h1>

        {/* Wishlist Products */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Saved Products</h2>
        {wishlist.products.length === 0 ? (
          <p className="text-gray-500">No products in the wishlist.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {wishlist.products.map((item) => (
              <ProductCard product={item} key={item.id} removeProductFromWishlist={removeProductFromWishlist}/>

            ))}
          </div>
        )}
        
        {/* Wishlist Sellers */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-6">Saved Sellers</h2>
        {wishlist.sellers.length === 0 ? (
          <p className="text-gray-500">No sellers in the wishlist.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
            {wishlist.sellers.map((item) => (
              <div  
                key={item.id}
                className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col"
              >
                <h3 className="text-sm font-medium text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-500 mb-3 text-sm">{item.description}</p>
                <button
                  onClick={() => removeSellerFromWishlist(item.id)}
                  className="mt-auto bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition-colors duration-200 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyMarketListPage;
