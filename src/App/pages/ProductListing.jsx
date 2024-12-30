import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/reuseable/Breadcrumb";
import ProductCard from "../components/reuseable/ProductCard";

const ProductListingPage = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 1000],
    brand: "",
    rating: 0,
  });

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); // For mobile sidebar modal

  const { products: SearchedProduct, searchQuery, error } = location.state || {
    products: null,
    searchQuery: "",
    error: "",
  };

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const categoryResponse = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);

        if (!SearchedProduct) {
          const productResponse = await fetch(
            "https://dummyjson.com/products?limit=100"
          );
          const productData = await productResponse.json();

          setProducts(productData.products);
          setFilteredProducts(productData.products);
        } else {
          setFilteredProducts(SearchedProduct);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategoriesAndProducts();
  }, [SearchedProduct]);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...products];

      if (filters.category) {
        filtered = filtered.filter(
          (product) => product.category === filters.category
        );
      }

      filtered = filtered.filter(
        (product) =>
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]
      );

      if (filters.rating > 0) {
        filtered = filtered.filter(
          (product) => product.rating >= filters.rating
        );
      }

      if (filters.brand) {
        filtered = filtered.filter((product) =>
          product.brand.toLowerCase().includes(filters.brand.toLowerCase())
        );
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters, products]);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleResetFilters = () => {
    setFilters({
      category: "",
      priceRange: [0, 1000],
      brand: "",
      rating: 0,
    });
  };

  return (
    <>
    <div className="py-3 p-1 md:px-4 ">

      <Breadcrumb
        items={[
          { name: "Home", link: "/" },
          { name: "Products", link: "/products" },
        ]}
        />
        </div>
      <div className="flex flex-col md:flex-row gap-4 px-4 md:px-8 lg:px-16 py-4">
        {/* Filters for Mobile */}
        <button
          className="md:hidden bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md mb-4"
          onClick={() => setIsFilterModalOpen(true)}
        >
          Show Filters
        </button>

        {/* Filter Sidebar Modal */}
        {isFilterModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
            <div className="bg-white w-3/4 sm:w-1/2 h-full p-4 rounded-l-lg shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  className="text-red-500 font-bold"
                  onClick={() => setIsFilterModalOpen(false)}
                >
                  Close
                </button>
              </div>
              <aside>
                {/* Filters */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Categories</h4>
                  <ul className="space-y-2">
                    {categories?.map((category, index) => (
                      <li key={index}>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="category"
                            value={category}
                            className="form-radio text-blue-500"
                            onChange={() =>
                              handleFilterChange("category", category.slug)
                            }
                          />
                          <span className="ml-2 capitalize">{category.slug}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={filters.priceRange[1]}
                    className="w-full"
                    onChange={(e) =>
                      handleFilterChange("priceRange", [0, parseInt(e.target.value)])
                    }
                  />
                  <div className="flex justify-between text-sm">
                    <span>$0</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Ratings</h4>
                  <ul className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <li key={rating}>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="rating"
                            className="form-radio text-yellow-500"
                            onChange={() => handleFilterChange("rating", rating)}
                          />
                          <span className="ml-2">{rating} Stars & Up</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Submit and Reset buttons */}
                <div className="flex justify-between mt-6">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                    onClick={() => setIsFilterModalOpen(false)}
                  >
                    Apply Filters
                  </button>
                  <button
                    className="bg-gray-300 text-black py-2 px-4 rounded-lg"
                    onClick={handleResetFilters}
                  >
                    Reset Filters
                  </button>
                </div>
              </aside>
            </div>
          </div>
        )}

        {/* Filter Sidebar for Larger Screens */}
        <aside className="hidden md:block w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          {/* Same Filters as Modal */}
          {/* Categories */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Categories</h4>
            <ul className="space-y-2">
              {categories?.map((category, index) => (
                <li key={index}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      className="form-radio text-blue-500"
                      onChange={() =>
                        handleFilterChange("category", category.slug)
                      }
                    />
                    <span className="ml-2 capitalize">{category.slug}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {/* Price */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Price Range</h4>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={filters.priceRange[1]}
              className="w-full"
              onChange={(e) =>
                handleFilterChange("priceRange", [0, parseInt(e.target.value)])
              }
            />
            <div className="flex justify-between text-sm">
              <span>$0</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
          {/* Ratings */}
          <div>
            <h4 className="font-medium mb-2">Ratings</h4>
            <ul className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <li key={rating}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      className="form-radio text-yellow-500"
                      onChange={() => handleFilterChange("rating", rating)}
                    />
                    <span className="ml-2">{rating} Stars & Up</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-lg md:text-xl mb-4">
            {searchQuery
              ? `Search Results for "${searchQuery}" (${filteredProducts.length})`
              : `Products (${filteredProducts.length})`}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListingPage;
