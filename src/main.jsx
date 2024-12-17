import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <App />
      </SearchProvider>
      
    </BrowserRouter>
  </StrictMode>
);
