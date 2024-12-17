import { useSearchItems } from "../../../action/search";
import { useSearch } from "../../../context/SearchContext";
import SearchFilter from "../modal/SearchFilter";

export const SearchInput = () => {

  const {loading, handleSearch,searchQuery, setSearchQuery  } = useSearchItems()

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };


  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto md:px-4">
      <div className="flex flex-col sm:flex-row items-stretch gap-2">
        <div className="flex items-center w-full sm:h-16 h-16 py-1 px-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm">
          <input
            type="search"
            id="search-dropdown"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full h-full px-4 py-2 text-md md:text-lg text-gray-700 placeholder-gray-500 border-none outline-none focus:ring-0 focus:border-none bg-transparent rounded-l-lg"
            placeholder="Search products"
          />
          <div className="flex items-center gap-2 px-2">
            <SearchFilter />
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-all duration-200"
              disabled={loading}
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
};
