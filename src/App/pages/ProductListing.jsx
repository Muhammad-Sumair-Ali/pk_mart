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
    cities: [],
    sellerTypes: [],
  });

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); // For mobile sidebar modal

  const [citySuggestions, setCitySuggestions] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [sellerTypes] = useState([
    "Exporter",
    "Wholesaler",
    "Retailer",
    "Manufacturer",
  ]);

  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Peshawar",
    "Quetta",
    "Faisalabad",
    "Multan",
    "Hyderabad",
    "Sialkot",
    "Bahawalpur",
    "Gujranwala",
    "Sukkur",
    "Abbottabad",
    "Mardan",
    "Sheikhupura",
    "Gujrat",
    "Sargodha",
    "Jhelum",
    "Okara",
    "Rahim Yar Khan",
    "Dera Ghazi Khan",
    "Chiniot",
    "Mansehra",
    "Mirpur",
    "Khairpur",
    "Kasur",
    "Nawabshah",
    "Larkana",
    "Bannu",
    "Chaman",
    "Swat",
    "Turbat",
    "Dera Ismail Khan",
    "Charsadda",
    "Muzaffargarh",
    "Mingora",
    "Jamshoro",
    "Ghotki",
    "Hafizabad",
    "Attock",
    "Vehari",
    "Jhang",
    "Tando Allahyar",
    "Tando Adam",
    "Sahiwal",
    "Kotli",
    "Hangu",
    "Kohat",
    "Mandi Bahauddin",
    "Nowshera",
    "Bhakkar",
    "Haripur",
    "Khushab",
    "Shikarpur",
    "Jacobabad",
    "Kandhkot",
    "Bhalwal",
    "Kamoke",
    "Daska",
    "Chakwal",
    "Pakpattan",
    "Hub",
    "Badin",
    "Dadu",
    "Kharian",
    "Gwadar",
    "Umerkot",
    "Zhob",
    "Chitral",
    "Toba Tek Singh",
    "Samundri",
    "Kashmore",
    "Jaranwala",
    "Khuzdar",
    "Sanghar",
    "Matiari",
    "Burewala",
    "Narowal",
    "Mirpurkhas",
    "Pasrur",
    "Kamra",
    "Gakhar Mandi",
    "Shujaabad",
    "Kot Adu",
    "Tank",
    "Layyah",
    "Hub Chowki",
    "Hasilpur",
    "Tando Muhammad Khan",
    "Arifwala",
    "Kabirwala",
    "Chunian",
    "Pattoki",
    "Haveli Lakha",
    "Murree",
    "Fort Abbas",
    "Lodhran",
    "Depalpur",
    "Darya Khan",
    "Bhawana",
    "Kallar Kahar",
    "Pir Mahal",
    "Kot Radha Kishan",
    "Rohri",
    "Talagang",
    "Taunsa",
  ];

  const {
    products: SearchedProduct,
    searchQuery,
    error,
  } = location.state || {
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

      if (filters.cities.length > 0) {
        filtered = filtered.filter((product) =>
          filters.cities.includes(product.city)
        );
      }

      if (filters.sellerTypes.length > 0) {
        filtered = filtered.filter((product) =>
          filters.sellerTypes.includes(product.sellerType)
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
      cities: [],
      sellerTypes: [],
    });
  };

  const handleCitySearch = (e) => {
    const query = e.target.value;
    setSearchCity(query);

    if (query) {
      const suggestions = cities.filter((city) =>
        city.toLowerCase().includes(query.toLowerCase())
      );
      setCitySuggestions(suggestions);
    } else {
      setCitySuggestions([]);
    }
  };

  const handleCitySelect = (city) => {
    if (!filters.cities.includes(city)) {
      setFilters({ ...filters, cities: [...filters.cities, city] });
    }
    setSearchCity("");
    setCitySuggestions([]);
  };

  const handleChipRemove = (key, value) => {
    setFilters({
      ...filters,
      [key]: filters[key].filter((item) => item !== value),
    });
  };

  return (
    <>
      <div className="py-3 p-1 md:px-4">
        <Breadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "Products", link: "/products" },
          ]}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 px-4 md:px-8 lg:px-16 py-4">
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
              <aside className="md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
          {/* <h3 className="text-lg font-semibold mb-4">Filters</h3> */}

          {/* City Filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Cities</h4>
            <input
              type="text"
              placeholder="Search by city"
              value={searchCity}
              onChange={handleCitySearch}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {citySuggestions.length > 0 && (
              <ul className="absolute bg-white border mt-1  max-h-40 overflow-auto rounded-lg shadow-lg z-10">
                {citySuggestions.map((city, index) => (
                  <li
                    key={index}
                    onClick={() => handleCitySelect(city)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Seller Type Filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Seller Types</h4>
            <div className="flex flex-wrap gap-2">
              {sellerTypes.map((type, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleFilterChange(
                      "sellerTypes",
                      filters.sellerTypes.includes(type)
                        ? filters.sellerTypes.filter((item) => item !== type)
                        : [...filters.sellerTypes, type]
                    )
                  }
                  className={`px-3 py-1 rounded-lg ${
                    filters.sellerTypes.includes(type)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Filters */}
          <button
            onClick={handleResetFilters}
            className="w-full px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Reset Filters
          </button> 
        </aside>
            </div>
          </div>
        )}

        <aside className="md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md hidden sm:block">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          {/* City Filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Cities</h4>
            <input
              type="text"
              placeholder="Search by city"
              value={searchCity}
              onChange={handleCitySearch}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {citySuggestions.length > 0 && (
              <ul className="absolute bg-white border mt-1  max-h-40 overflow-auto rounded-lg shadow-lg z-10">
                {citySuggestions.map((city, index) => (
                  <li
                    key={index}
                    onClick={() => handleCitySelect(city)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Seller Type Filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Seller Types</h4>
            <div className="flex flex-wrap ga p-2">
              {sellerTypes.map((type, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleFilterChange(
                      "sellerTypes",
                      filters.sellerTypes.includes(type)
                        ? filters.sellerTypes.filter((item) => item !== type)
                        : [...filters.sellerTypes, type]
                    )
                  }
                  className={`px-3 py-1 rounded-lg ${
                    filters.sellerTypes.includes(type)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Filters */}
          <button
            onClick={handleResetFilters}
            className="w-full px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Reset Filters
          </button> 
        </aside>

        <div className="md:w-3/4">
          <div className="mb-2">
            <div className="flex justify-between items-center flex-row">
              <h2 className="text-md md:text-lg mb-2">
                {searchQuery
                  ? `Search Results for "${searchQuery}" (${filteredProducts.length})`
                  : `Products (${filteredProducts.length})`}
              </h2>

              <h2 className="text-md md:text-lg mb-2">
                {filters.cities.length > 0
                  ? `Products in "${filters.cities.join(", ")}" (${
                      filteredProducts.length
                    })`
                  : `Products (${filteredProducts.length})`}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListingPage;
