import React, { useEffect, useRef } from "react";
import { useSearchItems } from "../../action/search";
import { Swiper, SwiperSlide } from "swiper/react";
import { categoriesSectionData } from "../../data/categories";

const FeaturedCategories = () => {
  const { handleCategorySearch } = useSearchItems();

  const handleSubcategoryClick = (categoryName) => {
    handleCategorySearch(categoryName);
  };

  const scrollContainer = useRef(null);
  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollWidth = scrollContainer.current.offsetWidth * 0.8; // Scroll 80% of container width
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollWidth : scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-6 bg-gray-100">
      <div className="w-full px-2">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Featured Categories
        </h2>

        <div className="md:hidden block ">
          <Swiper
            spaceBetween={8}
            slidesPerView={"auto"} 
            freeMode={true} 
            className="w-full"
          >
            {categoriesSectionData?.map((category, index) => (
              <SwiperSlide
                key={index}
                className="!w-20 md:!w-[120px] flex flex-col items-center"
                onClick={() =>
                  handleSubcategoryClick(category.slug || category.name)
                }
              >
                {/* Category Card */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-md">
                  <img
                    src={category?.image}
                    alt={category.slug || category.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-gray-900 truncate">
                  {category.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="relative hidden  md:block px-2">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hidden md:block md:p-3 h-full rounded-md shadow-md hover:bg-gray-200 z-10"
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
          <div
            ref={scrollContainer}
            className="flex space-x-3 md:space-x-4 overflow-hidden w-[90%] m-auto"
          >
            {categoriesSectionData?.map((category, index) => (
              <div
                onClick={() =>
                  handleSubcategoryClick(category.slug || category.name)
                }
                key={index}
                className="flex flex-col items-center w-64 md:w-[120px] space-y-2"
              >
                <div className="md:w-20 w-16 h-16 md:h-20 rounded-full overflow-hidden shadow-md">
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
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hidden md:block md:p-3 h-full rounded-md shadow-md hover:bg-gray-200 z-10"
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
