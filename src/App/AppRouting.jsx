import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { paths } from "../helper/paths";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetails";
import ProfilePage from "./pages/common/SellerProfile";
import SubCategories from "./pages/SubCategories";
import ScrollRestoration from "./components/panel/ScrollRestoration";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ChatPage from "./pages/ChatPage";
import MessagePanel from "./components/MessagePanel";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import MyMarketListPage from "./pages/MyMarket";
import AdminProducts from "./pages/admin/products.admin";
import AdminCategories from "./pages/admin/categories.admin";
import AdminSubcategories from "./pages/admin/subcats.admin";
import AdminUsers from "./pages/admin/users.admin";
import AdminRouting from "./pages/admin/AdminRouting";
import AdminReports from "./pages/admin/reports.admin";
import AdminDashboard from "./pages/admin/common/dashboard.admin";
import AdminProfile from "./pages/admin/common/profile.admin";
import UserProfile from "./pages/common/UserProfile";
import NotificationAdmin from "./pages/admin/notification.admin";

const AppRouting = () => {
  const location = useLocation();

  const noNavFooterRoutes = [
    paths.login,
    paths.signup,
    "/chat/home",
    "/chat/:id",
    "/chat/user/:id",
    "/admin",
  ];

  const hideNavbarFooter = noNavFooterRoutes.some((route) =>
    location.pathname.startsWith(route.replace(":id", ""))
  );

  return (
    <>
      <ScrollRestoration />

      {!hideNavbarFooter && <Navbar />}

      {/* client Routes */}
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.products} element={<ProductListing />} />
        <Route path={paths.productDetails} element={<ProductDetail />} />
        <Route path={paths.profile} element={<ProfilePage />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path={paths.subCategories} element={<SubCategories />} />
        <Route path="/search" element={<ProductListing />} />
        <Route path={paths.mymarket} element={<MyMarketListPage />} />

        {/* Admin routes */}
        <Route path={paths.admin} element={<AdminRouting />}>
          <Route path={paths.adminDashboardHome} element={<AdminDashboard />} />
          <Route path={paths.adminProducts} element={<AdminProducts />} />
          <Route path={paths.adminCategories} element={<AdminCategories />} />
          <Route path={paths.adminSubcategories} element={<AdminSubcategories />} />
          <Route path={paths.adminUsers} element={<AdminUsers />} />
          <Route path={paths.adminreports} element={<AdminReports />} />
          <Route path={paths.adminNotification} element={<NotificationAdmin />} />
          <Route path={paths.adminProfile} element={<AdminProfile />} />
        </Route>

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

export default AppRouting;
