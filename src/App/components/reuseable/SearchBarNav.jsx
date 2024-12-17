import React, { useEffect, useState } from "react";
import { useSearchItems } from "../../../action/search";

const SearchBarNav = () => {
  const { loading, handleSearch, searchQuery, setSearchQuery } =
    useSearchItems();

  const [showSearch, setShowSearch] = useState(false);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 310) {
        setShowSearch(true);
      } else {
        setShowSearch(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={showSearch ? "block w-full md:w-2/4" : "hidden"}>
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full sm:h-12 h-12 px-1 bg-gray-300/75 rounded-md shadow-sm"
        >
          <input
            type="search"
            id="search-dropdown"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full h-full px-4 text-md md:text-lg text-gray-700 placeholder-gray-500 border-none outline-none focus:ring-0 focus:border-none bg-transparent rounded-l-lg"
            placeholder="Search products"
          />

          <div className="flex items-center">
            {/* Search Button */}
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-all duration-200"
              disabled={loading}
            >
              {loading ? (
                <span>Loading...</span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              )}
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBarNav;
