import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { paths } from "../helper/paths";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetails";
import ProfilePage from "./pages/common/Profile";
import SubCategories from "./pages/SubCategories";
import ScrollRestoration from "./components/panel/ScrollRestoration";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ChatPage from "./pages/ChatPage";
import MessagePanel from "./components/MessagePanel";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";


 const AppRouting = () => {
  const location = useLocation();

  const noNavFooterRoutes = [
    paths.login,
    paths.signup,
    "/chat/home",
    "/chat/:id",
    "/chat/user/:id",
  ];

  const hideNavbarFooter = noNavFooterRoutes.some((route) =>
    location.pathname.startsWith(route.replace(":id", ""))
  );

  return (
    <>
      <ScrollRestoration />

      {!hideNavbarFooter && <Navbar />}

      {/* Routes */}
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.products} element={<ProductListing />} />
        <Route path={paths.productDetails} element={<ProductDetail />} />
        <Route path={paths.profile} element={<ProfilePage />} />
        <Route path={paths.subCategories} element={<SubCategories />} />
        <Route path="/search" element={<ProductListing />} />

        {/* Chat Pages */}
        <Route path="/chat/home" element={<ChatPage />} />
        <Route path="/chat/:id" element={<ChatPage />} />
        <Route path="/chat/user/:id" element={<MessagePanel />} />

        {/* Auth Pages */}
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<Signup />} />

        <Route path="*" element={<>Not Found</>} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
};

export default AppRouting