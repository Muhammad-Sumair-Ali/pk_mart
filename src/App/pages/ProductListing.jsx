import React, { useState, useEffect } from "react";
// import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import CategoryChips from "../components/reuseable/CategoryChips";
import Breadcrumb from "../components/reuseable/Breadcrumb";
import ProductSkeleton from "../components/panel/ProductSkeleton";
import axios from "axios";

const ProductListing = () => {
  const selectButtons = ["Manufacterer", "Wholesaler", "Retailer", "Exporter"];
  const [viewby, setViewby] = useState("row");
  const [chosenCategory, setChosenCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const url =
      chosenCategory === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosenCategory}`;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

        const filteredProducts = products.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(filteredProducts);
      
  }, [chosenCategory, searchQuery]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <Breadcrumb />
        <button className="btn p-2 mx-2 rounded-md hidden md:block bg-slate-300">
          Enter Market
        </button>
      </div>
      {/* <div className="flex  w-full flex-row items-center justify-center m-1 gap-2 md:gap-4  mt-5 mb-2 border py-2">
        {selectButtons?.map((value, index) => (
          <button
            key={index}
            className="p-2 px-2 border text-sm md:text-lg border-blue-400 rounded-md md:px-10 bg-gray-100"
          >
            {value}
          </button>
        ))}
      </div> */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 border-r px-3">
          <h2 className="block text-xl font-semibold mb-2 ">All Categories</h2>
          <div className="flex flex-wrap gap-2 text-xs ">
            <CategoryChips
              onClick={() => setChosenCategory("All")}
              isChosen={chosenCategory === "All"}
              category={{
                slug: "All",
                name: "All",
              }}
            />
            {categories.map((category) => (
              <CategoryChips
                onClick={() => setChosenCategory(category.slug)}
                isChosen={category.slug === chosenCategory}
                category={category}
                key={category.slug}
              />
            ))}
          </div>
        </aside>

        {/* Product List */}
        <main className="w-full md:w-3/4 p-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold mb-4">Product Listing</h1>
            <div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <small>View By</small>
              <svg
                onClick={() => setViewby("row")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 hover:text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <svg
                onClick={() => setViewby("col")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 hover:text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
            </div>
          </div>

          {/* Product Grid */}
          <div
            className={`mt-4 ${
              viewby === "col"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                : "flex flex-col gap-4"
            }`}
          >
            {products?.map((product) => (
              <ProductCard viewby={viewby} key={product.id} product={product} />
            ))}
          </div>
          {loading && <ProductSkeleton />}
        </main>
      </div>
    </>
  );
};

export default ProductListing;
