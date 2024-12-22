import React from "react";
import Header from "../components/sections/Header";
import Categories from "../components/sections/Categories";

import CitySection from "../components/sections/AllCityCats";
import TopBrands from "../components/sections/TopBrands";
import FeaturedSection from "../components/FeaturedListing";
import FeaturedCategories from "../components/FeaturedCategories";

const Home = () => {
  return (
    <>
      <Header />
      <FeaturedCategories/>
      <Categories />
      {/* <FeaturedSection /> */}

      <CitySection />
      <TopBrands />
    </>
  );
};

export default Home;
