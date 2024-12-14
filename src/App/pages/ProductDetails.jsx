import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/reuseable/Breadcrumb";

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
  }, []);


  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Breadcrumb/>
      </div>
      {loading ? (
        <h1 className="text-center text-3xl font-bold">Loading...</h1>
      ) : notFound ? (
        <h1 className="text-center text-3xl font-bold text-red-500">
          Product Not Found
        </h1>
      ) : (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Product Image */}
          <div className="lg:col-span-2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-64 object-contain bg-blue-100 rounded-md shadow-md"
            />
            {/* Product Details */}
            <div className="mt-6">
              <h1 className="text-4xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h1>
              <p className="text-lg text-gray-500">{product.category}</p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Right Column: Seller Info */}
          <aside className="space-y-6">
            {/* Product Pricing */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Price {product.price}
              </h2>
              <p className="text-sm text-gray-500">Inclusive of all taxes</p>
              <p className="w-full mt-2 text-sm py-2 px-4 bg-gray-100 rounded-lg hover:bg-indigo-100">
               {product.description}
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Seller Information
              </h3>
              <div className="text-gray-700">
                <p className="mb-2">
                  <span className="font-medium">Name:</span> John Doe
                </p>
                <p className="mb-2">
                  <span className="font-medium">Contact:</span> +123 456 7890
                </p>
                <p className="mb-2">
                  <span className="font-medium">Location:</span> New York, USA
                </p>
              </div>
              <button className="w-full mt-4 py-2 px-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700">
                Contact Seller
              </button>
              <button className="w-full mt-2 py-2 px-4 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300">
                View Phone Number
              </button>
            </div>
          

            {/* Product Specifications */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Product Specifications
              </h3>
              <table className="w-full text-sm text-left text-gray-600">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Color</td>
                    <td className="py-2 text-gray-900">Blue</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Size</td>
                    <td className="py-2 text-gray-900">Medium</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Quantity</td>
                    <td className="py-2 text-gray-900">4</td>
                  </tr>
                  <tr>
                    <td className="py-2">Brand</td>
                    <td className="py-2 text-gray-900">{product.brand}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Seller Information */}
           
          </aside>
        </section>
      )}
    </div>
  );
}

export default ProductDetail;
