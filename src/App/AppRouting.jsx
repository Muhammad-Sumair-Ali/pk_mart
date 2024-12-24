import { Route, Routes } from "react-router-dom";
import { paths } from "../helper/paths";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetails";
import ProfilePage from "./pages/common/Profile";
import SubCategories from "./pages/SubCategories";
import ScrollRestoration from "./components/panel/ScrollRestoration";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";


const AppRouting = () => {
  return (
    <>
      <ScrollRestoration/>
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.products} element={<ProductListing />} />
      <Route path={paths.productDetails} element={<ProductDetail />} />
      <Route path={paths.profile} element={<ProfilePage />} />
      <Route path={paths.subCategories} element={<SubCategories />} />
      <Route path="/search" element={<ProductListing />} />
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.signup} element={<Signup />} />
     
      <Route path="*" element={<> Not Found </>} />
    </Routes>
    </>

  );
};
export default AppRouting;
