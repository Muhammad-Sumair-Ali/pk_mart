import SearchFilter from "../modal/SearchFilter";

export const SearchInput = () => (
  <form className="max-w-2xl mx-auto md:px-4">
    <div className="flex flex-col sm:flex-row items-stretch gap-2">
      {/* Search Bar */}
      <div className="flex items-center w-full sm:h-16 h-16 py-1 px-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm">
        <input
          type="search"
          id="search-dropdown"
          className="w-full h-full px-4 py-2 text-md md:text-lg text-gray-700 placeholder-gray-500 border-none outline-none focus:ring-0 focus:border-none bg-transparent rounded-l-lg"
          placeholder="Search products"
          required
        />

        <div className="flex items-center gap-2 px-2">
          {/* Filter Icon */}
          <SearchFilter />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 p-2 text-gray-600 bg-white rounded-full hover:bg-gray-200 transition-all duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
            />
          </svg>

          {/* Search Button */}
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-all duration-200"
          >
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
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </div>
  </form>
);
