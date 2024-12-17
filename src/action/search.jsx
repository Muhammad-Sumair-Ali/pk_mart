import axios from "axios";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useSearchItems = () => {
    const { searchQuery, setSearchQuery } = useSearch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);
  
    // Handle search by query
    const handleSearch = async (e) => {
      e?.preventDefault();
      if (searchQuery.trim()) {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(
            `https://dummyjson.com/products/search?q=${encodeURIComponent(
              searchQuery
            )}`
          );
          const fetchedProducts = response?.data?.products || [];
  
          setResults(fetchedProducts);
  
          navigate("/products", {
            state: {
              products: fetchedProducts,
              searchQuery,
              error: fetchedProducts.length > 0 ? null : "No products found.",
            },
          });
        } catch (error) {
          setError("Something went wrong. Please try again.");
          navigate("/products", {
            state: {
              products: [],
              searchQuery,
              error: "Something went wrong. Please try again.",
            },
          });
        } finally {
          setLoading(false);
        }
      }
    };
  
    // Handle search by category
    const handleCategorySearch = async (category) => {
      if (!category) return;
  
      setLoading(true);
      setError(null);
      try {
        // API call to fetch products by category
        const response = await axios.get(
          `https://dummyjson.com/products/category/${encodeURIComponent(category)}`
        );
        const fetchedProducts = response?.data?.products || [];
  
        setResults(fetchedProducts);
  
        navigate("/products", {
          state: {
            products: fetchedProducts,
            searchQuery: category,
            error: fetchedProducts.length > 0 ? null : "No products found.",
          },
        });
      } catch (error) {
        setError("Something went wrong. Please try again.");
        navigate("/products", {
          state: {
            products: [],
            searchQuery: category,
            error: "Something went wrong. Please try again.",
          },
        });
      } finally {
        setLoading(false);
      }
    };
  
    return {
      handleSearch,
      handleCategorySearch, // New function added
      searchQuery,
      setSearchQuery,
      loading,
      error,
      results,
    };
  };
  