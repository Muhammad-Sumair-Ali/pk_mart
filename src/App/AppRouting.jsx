import { Route, Routes } from "react-router-dom";
import { paths } from "../helper/paths";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetails";
import ProfilePage from "./pages/common/Profile";
import SubCategories from "./pages/SubCategories";


const AppRouting = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.products} element={<ProductListing />} />
      <Route path={paths.productDetails} element={<ProductDetail />} />
      <Route path={paths.profile} element={<ProfilePage />} />
      <Route path={paths.subCategories} element={<SubCategories />} />

      {/* <Route path={paths.login} element={<Login />} />
      <Route path={paths.signup} element={<Signup />} /> */}
     
      <Route path="*" element={<> Not Found </>} />
    </Routes>
  );
};
export default AppRouting;
