import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Reset searchQuery when route changes
  useEffect(() => {
    setSearchQuery("");
  }, [location.pathname]); // Runs whenever the route changes

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
