import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();


  useEffect(() => {
    const scrollPosition = localStorage.getItem(`scroll-position-${location.pathname}`);
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

  
    return () => {
      localStorage.setItem(`scroll-position-${location.pathname}`, window.scrollY);
    };
  }, [location.pathname]);

  return null;
};

export default ScrollRestoration;
