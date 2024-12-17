import ProductCardDefault from "../components/reuseable/ProductCardDefault";
import Breadcrumb from "../components/reuseable/Breadcrumb";
import { useLocation } from "react-router-dom";

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
      <div className="px-2 md:px-8 py-4">
        <h2 className="text-2xl mb-4">
          Search Results for: <span className="font-bold px-1"> {searchQuery}</span>
        </h2>

       
        {error && <p className="text-red-500">{error}</p>}

        {products?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {products?.map((product, index) => (
              <ProductCardDefault product={product} key={index} />
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
