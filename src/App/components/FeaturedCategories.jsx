import React, { useEffect, useRef } from "react";
import { useSearchItems } from "../../action/search";
import { useSearch } from "../../context/SearchContext";
import { categoriesSectionData } from "../../data/categories";
const FeaturedCategories = () => {
 

    const { handleCategorySearch } = useSearchItems();
  
    const handleSubcategoryClick = (categoryName) => {
     handleCategorySearch(categoryName)
    };


  const scrollContainer = useRef(null);
  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollWidth = scrollContainer.current.offsetWidth; // Width of the container
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollWidth : scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-6 bg-gray-100">
      <div className="w-full md:max-w-7xl mx-auto px-1 md:px-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Featured Categories
        </h2>

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-200 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          {/* Scrollable Categories */}
          <div ref={scrollContainer} className="flex space-x-0 md:space-x-4 overflow-hidden">
            {categoriesSectionData?.map((category, index) => (
              <div
              onClick={() => handleSubcategoryClick(category.slug || category.name)}
                key={index}
                className="flex flex-col items-center min-w-[120px] space-y-2"
              >
                <div className="md:w-24 w-20 h-20 md:h-24 rounded-full overflow-hidden shadow-md">
                  <img
                    src={category?.image}
                    alt={category.slug || category.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-gray-900 truncate">
                  {category.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-200 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
