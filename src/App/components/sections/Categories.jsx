import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../../helper/paths";
import { categories } from "../../../data/categories";
import { useSearch } from "../../../context/SearchContext";
import { useSearchItems } from "../../../action/search";
const Categories = () => {

  const { handleSearch } = useSearchItems();
  const {setSearchQuery,searchQuery } = useSearch();
  const [subcategory, setSubcategory] = useState("")

  const handleSubcategoryClick = (subcategoryType) => {
   setSubcategory(subcategoryType);
    setSearchQuery(subcategoryType);
   
  };
  
  useEffect(() => {
    if(subcategory){
      handleSearch();
    }
   
  }, [subcategory]);


  return (
    <>
      <div className="px-2 xl:px-6 sm:px-2  md:px-4 mx-auto p-2">
        <div>
          <h2 className="text-xl lg:text-3xl md:text-2xl  md:px-2 my-2 md:my-5 font-semibold text-gray-900">
            Categories You May Like
          </h2>
        </div>
        {categories.map((category, index) => (
          <div
            key={index}
            className="mb-6 md:mb-8 flex flex-col md:flex-row items-center lg:items-start bg-transparent
             md:bg-gray-200 rounded-lg  md:shadow-xl px-4 overflow-hidden "
          >
            {/* Category Image */}

            {/* Category Content */}
            <div className="w-full py-2 relative">
              {/* Category header */}
              <div
                className="flex items-center justify-between shadow-lg mb-2 md:my-2 md:m-auto w-full  md:w-2/3 text-black md:text-white bg-gray-100
               md:bg-gradient-to-r from-blue-800 to-violet-500 py-1 px-2 rounded-lg"
              >
                <div className=" md:text-center w-full py-2 md:w-full">
                   <Link to={`/subCategories/${index}`}>
                  <h2 className=" md:text-2xl text-sm sm:text-md font-semibold font-sans hover:text-blue-500 hover:underline">
                    {category.title}
                  </h2>
                  </Link>
                 
                </div>
                              </div>

              {/* Subcategories */}
              <div className="md:hidden">
                {/* Swiper for mobile */}
                <Swiper
                  slidesPerView={2}
                  spaceBetween={15}
                  freeMode={true}
                  className="mySwiper"
                >
                  {category.subcategories.map((subcategory, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="group mb-2  flex flex-col items-center text-center w-36 h-64 bg-white rounded-lg overflow-hidden 
                      shadow-lg hover:shadow-xl transition duration-300 ">
                        {/* Subcategory Image */}
                        <img
                          src={subcategory.image}
                          alt={subcategory.name}
                          className="w-full h-28  object-cover mb-2 sm:mb-0 sm:mr-2"
                        />
                        {/* Subcategory Name */}
                        <div className="flex-1 ">
                          <h4 className="text-sm font-medium text-gray-700 group-hover:text-blue-600 mb-2">
                            {subcategory.name}
                          </h4>

                          {/* Types Table */}
                          <div className="flex flex-wrap flex-col gap-1 px-1">
                            {subcategory.types.map((type, typeIdx) => (
                              <div
                                onClick={() => handleSubcategoryClick(type)}
                                key={typeIdx}
                                className="text-xs text-gray-600 border border-gray-300 rounded-md px-2 py-1 text-center hover:bg-blue-100 hover:text-blue-600 transition"
                              >
                                {type}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* For larger screens */}
              <div className="hidden md:grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:px-2 mb-4 xl:px-3 max-2xl:px-4">
                {category.subcategories.map((subcategory, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col sm:flex-row items-center bg-white rounded-md p-2 shadow-sm hover:shadow-lg transition duration-300"
                  >
                    {/* Subcategory Image */}
                    <img
                      src={subcategory.image}
                      alt={subcategory.name}
                      className="w-20 md:w-16  xl:w-20  h-full object-cover rounded-full md:rounded-full max-xl:rounded-3xl sm:mb-0 sm:mr-2"
                    />
                    {/* Subcategory Name */}
                    <div>
                      <Link to={paths.products}>
                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 mb-2">
                          {subcategory.name}
                        </h4>
                      </Link>

                      {/* Types Table */}
                      <div className="flex flex-wrap gap-1 xl:gap-2">
                        {subcategory.types.map((type, typeIdx) => (
                          <div
                            onClick={() => handleSubcategoryClick(type)}
                            key={typeIdx}
                            className="text-xs  text-gray-600 border border-gray-400 rounded-md xl:px-2 p-1 py-1
                             text-left hover:bg-blue-200 hover:text-blue-600 hover:cursor-pointer transition"
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
