import axios from "axios";
import React, { useEffect, useState } from "react";
import GetbestPrice from "../../components/reuseable/GetbestPrice";
import ProductdetailModal from "../../components/modal/ProductDetailModal";
import ProductCardProfile from "../../components/reuseable/ProductCardProfile";

const ProfilePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/motorcycle")
      .then((res) => {
        setProducts(res.data.products);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:block md:w-1/5 bg-white p-4 shadow-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          /> 
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Product Categories</h3>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <label key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />{" "}
                {category.name || category?.slug}
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Product Gallery */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Seller Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products?.map((product,index) => (
                <ProductCardProfile key={index} product={product} />
              ))}

            
            </div>
          </div>

          {/* Detail Card */}
          <div className="bg-gradient-to-l from-blue-100 via-blue-50  shadow-md px-4 py-2 rounded-md">
            <h3 className="text-lg font-bold mb-2">Business Details</h3>
            <p className="text-blue-800 font-sans font-semibold  text-xl ">
              Jz Traders
            </p>
            <a
              href="#details"
              className="inline-block text-blue-500 underline text-sm rounded-md mb-4"
            >
              View more details
            </a>
            <div className="mb-5">
              <h4 className="font-semibold">Business Gallery</h4>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <img
                  src="http://localhost:5173/src/assets/images/logo.png"
                  alt="Business"
                  className="w-full h-20 object-cover rounded-md bg-blue-200"
                />
                <img
                  src="http://localhost:5173/src/assets/images/logo.png"
                  alt="Business"
                  className="w-full h-20 object-cover rounded-md bg-yellow-200"
                />
                <img
                  src="http://localhost:5173/src/assets/images/logo.png"
                  alt="Business"
                  className="w-full h-20 object-cover rounded-md bg-orange-400"
                />
              </div>
            </div>
            <div className="my-4 mb-4">
              <h4 className="font-semibold block">Achivements & Bages</h4>

              <div className="grid grid-cols-3 gap-2 mt-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlhLyldCWnKUR1OGFxFnA7Rv6qgDKXxZJoQ&s"
                  alt="Business"
                  className="w-full h-20 object-cover rounded-full bg-blue-400"
                />
                <img
                  src="https://png.pngtree.com/png-clipart/20230107/original/pngtree-best-quality-seller-badge-with-round-shape-gold-color-png-image_8883383.png"
                  alt="Business"
                  className="w-full h-20 object-cover rounded-full bg-slate-400"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWScyrQiMYaGHZvDdC9O8A8rd5G6QbwcTyzg&s"
                  alt="Business"
                  className="w-full h-20 object-cover rounded-full bg-yellow-400"
                />
              </div>
            </div>
            <div className="mb-3 my-4">
              <h4 className="font-semibold">Address</h4>
              <p className="text-sm text-gray-700 flex items-center my-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 text-green-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>
                123 Business Street, City
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <p className="text-sm text-gray-600">Phone: 123-456-7890</p>
              <p className="text-sm text-gray-600">
                Email: business@example.com
              </p>
              <button className="mt-2 px-2 p-1 flex items-center gap-1 justify-center bg-blue-600 text-white rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Send Email
              </button>
            </div>
          </div>
        </div>

        {/* Inquiry Section */}
        <GetbestPrice />

        {/* Business Info Section */}
        <div
          id="details"
          className="bg-gradient-to-r from-blue-100 via-white to-blue-50 shadow-lg p-6 rounded-lg mt-6 space-y-6"
        >
          {/* Business Name Section */}
          <div>
            <h3 className="text-3xl font-extrabold text-gray-800 mb-3">
              Business Details
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A few lines about the business to highlight key details and what
              makes it stand out in the industry. Focus on achievements, goals,
              or unique selling points.
            </p>
          </div>

          {/* CEO Details */}
          <div className="flex items-center gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVm6sv5tcZloULs0dhCSfNY5-epiw8kDFGow&s"
              className="w-24 object-contain rounded-md bg-blue-200 flex items-center justify-center text-white font-bold text-xl"
            />

            <div>
              <p className="text-lg font-semibold text-gray-700">JZ Traders</p>
              <p className="text-sm text-gray-500"> pakistan top traders</p>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {/* Old Business */}
            <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-start">
              <h4 className="text-lg font-bold text-gray-700 mb-2">
                Established Year
              </h4>
              <p className="text-sm text-gray-600">
                Operating since 1995, with a proven track record in delivering
                excellence.
              </p>
            </div>
            {/* Top Star Seller */}
            <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-start">
              <h4 className="text-lg font-bold text-gray-700 mb-2">
                Top Star Seller
              </h4>
              <p className="text-sm text-gray-600">
                Awarded as a Top Star Seller for three consecutive years for
                exceptional service.
              </p>
            </div>
            {/* Business Type */}
            <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-start">
              <h4 className="text-lg font-bold text-gray-700 mb-2">
                Business Type
              </h4>
              <p className="text-sm text-gray-600">
                E-commerce and wholesale, specializing in premium quality
                products.
              </p>
            </div>
            {/* Client Base */}

            {/* Certifications */}
            <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-start">
              <h4 className="text-lg font-bold text-gray-700 mb-2">
                Certifications
              </h4>
              <p className="text-sm text-gray-600">
                ISO 9001:2015 Certified for quality management and customer
                satisfaction.
              </p>
            </div>
          </div>

          {/* Call to Action */}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
