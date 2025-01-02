export const paths = {
  login: "/login",
  signup: "/signup",
  home: "/",
  messagesHome: "/chat/home",
  // products
  mymarket: "/user/market",
  products: "/products",
  productDetails: "/products/:id",
  subCategories: "/subCategories/:id",
  // account
  profile: "/profile",
  // account: "/account",
  accountDetails: "/account/:accountId",

  // admin
  admin: "/admin/dashboard",
  adminDashboardHome: "/admin/dashboard/home",
  adminProfile: "/admin/dashboard/profile",
  adminProducts: "/admin/dashboard/products",
  adminCategories: "/admin/dashboard/categories",
  adminSubcategories: "/admin/dashboard/subcategories",
  adminUsers: "/admin/dashboard/users",
  adminreports: "/admin/dashboard/reports",
  // adminapprovals: "/admin/dashboard/approvals",

  buyerDashboard: "/buyer/dashboard",
  buyerOrders: "/buyer/orders",
  buyerProfile: "/buyer/profile",
};


import { FaUser, FaBox, FaList, FaTags, FaUsers, FaChartBar, FaChartPie } from "react-icons/fa";

export const adminSidebarLinks = [
  { name: "Dashboard", path: "/admin/dashboard/home", icon: <FaChartPie /> },
  { name: "Categories", path: "/admin/dashboard/categories", icon: <FaList /> },
  { name: "Products", path: "/admin/dashboard/products", icon: <FaBox /> },
  { name: "Users", path: "/admin/dashboard/users", icon: <FaUsers /> },
  { name: "Reports", path: "/admin/dashboard/reports", icon: <FaChartBar /> },
  { name: "Profile", path: "/admin/dashboard/profile", icon: <FaUser /> },
];
