import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/reuseable/Breadcrumb";
import GetbestPrice from "../components/reuseable/GetbestPrice";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [mainImage, setMainImage] = useState("");

  // let seller;

  useEffect(() => {
    setNotFound(false);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setMainImage(res.data.thumbnail); 
        setLoading(false);
      })
      .catch((err) => {
        setNotFound(true);
        setLoading(false);
        console.log(err);
      });
  }, [id]);

  // console.log(product);
  return (
    <div className="md:container px-4 md:px-10 mx-auto">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { name: "Home", link: "/" },
          { name: "Products", link: "/products" },
          { name: product.title },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-2 md:gap-8 mt-2">
        {/* Left Section - Images */}
        <div className="lg:w-2/3 flex flex-row lg:flex-row gap-2 md:gap-6">
          {/* Side Images */}
          <div className="flex flex-col gap-2">
            {product?.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                onClick={() => setMainImage(image)}
                className="md:w-24 w-16 h-24 object-cover rounded-lg shadow-md cursor-pointer hover:ring-2 hover:ring-blue-400"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-full md:h-2/3 object-contain max-w-lg mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="lg:w-1/3">
          {/* Product Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>

          {/* Price and Reviews */}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-xl font-bold text-green-600">
              PKR {product?.price}
            </span>
            {/* <span className="text-sm text-gray-500">
              ({product.rating} ★) | {product.stock} in stock
            </span> */}
          </div>

          {/* Additional Info */}
          <div className="mt-6 space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Minimum Order:</span>{" "}
              {product?.minimumOrderQuantity || "Not specified"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-row gap-4">
            <Link to="/chat/home">
            <button 
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
               rounded-lg text-sm px-4 py-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700
                dark:focus:ring-blue-800"
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
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
              </svg>
              Contact Seller
            </button>
                  </Link>
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
               rounded-lg text-sm px-4 py-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700
                dark:focus:ring-blue-800"
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              View Phone
            </button>
          </div>
        </div>
      </div>
      <div className="md:px-4 px-1 mt-4 lg:-mt-12">
        <div className="bg-gradient-to-r from-blue-100 via-white to-blue-50 shadow-xl p-2 md:p-4 rounded-lg ">
          <h3 className="text-md md:text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            Get the Best Deals, Faster and Smarter
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 md:w-6 md:h-6 text-blue-500 drop-shadow-lg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </span>
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-1">
            Let us help you get the best deals quickly and efficiently. Fill in
            the details below!
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-4 ">
            <input
              type="text"
              placeholder="Product/Service Name"
              className="md:p-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm w-full"
            />
            <input
              type="text"
              placeholder="Email/Contact No."
              className="md:p-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm w-full"
            />
            <input
              type="number"
              placeholder="Qty"
              className="md:p-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
            <button
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg
             hover:from-blue-600 hover:to-blue-700 transition-all duration-200 w-auto min-w-32 md:w-40 md:p-3 m-auto"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 mb-5 border rounded-lg">
        <div className="overflow-x-auto">
          <div className="table-auto border-collapse border border-gray-300 w-full shadow-lg  rounded-lg overflow-hidden">
            <div>
              <div className="bg-blue-100 flex justify-around items-center">
                <h2 className=" p-2 text-center font-semibold text-gray-800">
                  Product Details
                </h2>
                <h2 className=" p-2 py-3 text-center font-semibold text-gray-800">
                  Business/Seller Details
                </h2>
              </div>
            </div>
            <div>
              {/* Product Details Section */}
              <div className="bg-white hover:bg-gray-50 flex md:flex-row lg:flex-row flex-col  ">
                <div className=" border-gray-300 md:p-4 w-full p-2 align-top">
                  <div className="grid grid-cols-2 ">
                    <div className="font-medium text-gray-700 border border-gray-300 p-2">
                      Price:{" "}
                    </div>
                    <div className="text-gray-600 border border-gray-300 p-2">
                      {product.price}
                    </div>

                    <div className="font-medium text-gray-700 border border-gray-300 p-2">
                      Category:
                    </div>
                    <div className="text-gray-600 border border-gray-300 p-2">
                      {product.category}
                    </div>

                    <div className="font-medium text-gray-700 border border-gray-300 p-2">
                      Brand:
                    </div>
                    <div className="text-gray-600 border border-gray-300 p-2">
                      {product.brand}
                    </div>

                    <div className="font-medium text-gray-700 border border-gray-300 p-2">
                      Available Stock:
                    </div>
                    <div className="text-gray-600 border border-gray-300 p-2">
                      {product.stock}
                    </div>

                    <div className="font-medium text-gray-700 border border-gray-300 p-2">
                      Rating:
                    </div>
                    <div className="text-gray-600 border border-gray-300 p-2">
                      {" "}
                      {product.rating}{" "}
                    </div>

                    <div className="font-medium text-gray-700 border border-gray-300 p-2">
                      Minimum Order:
                    </div>
                    <div className="text-gray-600 border border-gray-300 p-2">
                      {" "}
                      {product.minimumOrderQuantity}{" "}
                    </div>

                    <div className="font-medium text-gray-700 border border-gray-300 p-2">
                      Warranty:
                    </div>
                    <div className="text-gray-600 border border-gray-300 p-2">
                      {" "}
                      {product.warrantyInformation}{" "}
                    </div>

                    <div className="font-medium text-gray-700 border border-gray-300 p-2">
                      returnPolicy:
                    </div>
                    <div className="text-gray-600 border border-gray-300 p-2">
                      {" "}
                      {product.returnPolicy}{" "}
                    </div>
                  </div>
                </div>

                {/* Business/Seller Details Section */}
                <div className="border border-gray-300 p-2 md:w-2/3 md:p-4 align-top">
                  <div className="space-y-4">
                    {/* Business Name */}
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Business Name:
                      </h4>
                      <p className="text-gray-600">JZ Traders</p>
                    </div>

                    {/* Achievements & Badges */}
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Achievements & Badges:
                      </h4>
                      <div className="flex items-center gap-3 mt-2">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlhLyldCWnKUR1OGFxFnA7Rv6qgDKXxZJoQ&s"
                          alt="Badge 1"
                          className="w-10 h-10 rounded-full object-cover border border-gray-300"
                        />
                        <img
                          src="https://png.pngtree.com/png-clipart/20230107/original/pngtree-best-quality-seller-badge-with-round-shape-gold-color-png-image_8883383.png"
                          alt="Badge 2"
                          className="w-10 h-10 rounded-full object-cover border border-gray-300"
                        />
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWScyrQiMYaGHZvDdC9O8A8rd5G6QbwcTyzg&s"
                          alt="Badge 3"
                          className="w-10 h-10 rounded-full object-cover border border-gray-300"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <h4 className="font-semibold text-gray-800">Address:</h4>
                      <p className="text-gray-600">123 Business Street, City</p>
                    </div>

                    {/* Contact Details */}
                    <div>
                      <h4 className="font-semibold text-gray-800">Contact:</h4>
                      <p className="text-gray-600">Phone: +92-123-4567890</p>
                      <p className="text-gray-600">WhatsApp: +92-987-6543210</p>
                      <p className="text-gray-600">
                        Email: business@example.com
                      </p>
                      <p className="text-gray-600">
                        Website:{" "}
                        <a href="#" className="text-blue-500">
                          www.business.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
