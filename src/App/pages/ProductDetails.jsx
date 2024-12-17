import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/reuseable/Breadcrumb";
import GetbestPrice from "../components/reuseable/GetbestPrice";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNotFound(false);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setNotFound(true);
        setLoading(false);
        console.log(err);
      });
  }, [id]);
  

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { name: "Home", link: "/" },
          { name: "Products", link: "/products" },
          { name: product.title },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 mt-6">
        {/* Left Section - Images */}
        <div className="lg:w-2/3 flex flex-col lg:flex-row gap-6">
          {/* Side Images */}
          <div className="flex flex-col gap-4">
            {product?.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg shadow-md cursor-pointer hover:ring-2 hover:ring-blue-400"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-auto max-w-lg mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="lg:w-1/3">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>

          {/* Price and Reviews */}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-xl font-bold text-green-600">
              PKR {product?.price}
            </span>
            <span className="text-sm text-gray-500">
              ({product.rating} ★) | {product.stock} in stock
            </span>
          </div>

          {/* Additional Info */}
          <div className="mt-6 space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Minimum Order:</span>{" "}
              {product?.minimumOrderQuantity || "Not specified"}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Return Policy:</span>{" "}
              {product.returnPolicy || "No return policy"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-4">
            <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 shadow-lg">
              Contact Seller
            </button>
            <button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 shadow-lg">
              View Mobile Number
            </button>
          </div>

          {/* Seller Information */}
          <div className="bg-gradient-to-l from-blue-100 via-blue-50  shadow-md px-4 py-2 rounded-md mt-2">
            <h3 className="text-lg font-bold mb-2">Business Details</h3>
            <p className="text-blue-800 font-sans font-semibold  text-xl ">
              Jz Traders
            </p>
           
            <div className="my-2 mb-4">
              <h4 className="font-semibold block">Achivements & Bages</h4>

              <div className="grid grid-cols-5 gap-2 mt-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlhLyldCWnKUR1OGFxFnA7Rv6qgDKXxZJoQ&s"
                  alt="Business"
                  className="w-14 h-14 object-cover rounded-full bg-blue-400"
                />
                <img
                  src="https://png.pngtree.com/png-clipart/20230107/original/pngtree-best-quality-seller-badge-with-round-shape-gold-color-png-image_8883383.png"
                  alt="Business"
                  className="w-14 h-14 object-cover rounded-full bg-slate-400"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWScyrQiMYaGHZvDdC9O8A8rd5G6QbwcTyzg&s"
                  alt="Business"
                  className="w-14 h-14 object-cover rounded-full bg-yellow-400"
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
              <p className="text-sm text-gray-600">
                Website: business@example.com
              </p>
            
            </div>
          </div>
          
        </div>

        
      </div>
      <div className="px-4 md:px-10 py-2">

       <GetbestPrice/>
      </div>
       {/* Bottom Section: Detailed Table */}
       <div className="mt-2 px-4 md:px-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Product Specifications
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Brand</td>
                <td className="border border-gray-300 px-4 py-2">{product.brand}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Category</td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.category}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Discount</td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.discountPercentage}%
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Stock</td>
                <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Rating</td>
                <td className="border border-gray-300 px-4 py-2">{product.rating}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Minimum Order</td>
                <td className="border border-gray-300 px-4 py-2">
                  {product?.minimumOrderQuantity || "Not specified"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
