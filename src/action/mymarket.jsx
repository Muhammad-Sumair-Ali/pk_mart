import { useEffect, useState } from "react";

export const useMyMarketAction = () => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : { products: [], sellers: [] };
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item, type) => {
    setWishlist((prev) => {
      const alreadyExists = prev[type].some((i) => i.id === item.id);
      if (alreadyExists) {
        alert(`${type.slice(0, -1).toUpperCase()} already in wishlist`);
        return prev;
      }
      alert(`${type.slice(0, -1).toUpperCase()} added to wishlist`);
      return { ...prev, [type]: [...prev[type], item] };
    });
  };

  const removeFromWishlist = (id, type) => {
    setWishlist((prev) => ({
      ...prev,
      [type]: prev[type].filter((i) => i.id !== id),
    }));
  };

  return {
    wishlist,
    addProductToWishlist: (product) => addToWishlist(product, "products"),
    removeProductFromWishlist: (id) => removeFromWishlist(id, "products"),
    addSellerToWishlist: (seller) => addToWishlist(seller, "sellers"),
    removeSellerFromWishlist: (id) => removeFromWishlist(id, "sellers"),
  };
};
