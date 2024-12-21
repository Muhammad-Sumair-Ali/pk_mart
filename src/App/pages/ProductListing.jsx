
import Breadcrumb from "../components/reuseable/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/reuseable/ProductCard";

const ProductListingPage = () => {
  const location = useLocation();
  const { products, searchQuery, error } = location.state || {
    products: [],
    searchQuery: "",
    error: "",
  };

  return (
    <>
    
      <Breadcrumb
        items={[
          { name: "Home", link: "/" },
          { name: "Products", link: "/products" },
          { name: searchQuery },
        ]}
      />
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <h2 className="text-lg md:text-xl mb-4">
          Search Results for: <span className="font-bold px-1"> {searchQuery}</span>
        </h2>

       
        {error && <p className="text-red-500">{error}</p>}

        {products?.length > 0 ? (
          <div className="grid grid-cols-2  md:grid-cols-5 gap-2 md:gap-4 mb-10">
            {products?.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        ) : (
          !error && <p>No products found.</p>
        )}
      </div>
    </>
  );
};

export default ProductListingPage;
