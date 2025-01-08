import { HomeIcon, UserCircleIcon, InboxIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { paths } from "../paths";
import { useAuth } from "../../context/AuthContext";
import { FaInfo, FaWpforms } from 'react-icons/fa';

// Logout function placeholder
const Logout = () => {
  console.log("User logged out");
};

// Admin-specific links
const adminLinks = [
  {
    name: "Dashboard",
    icon: <HomeIcon className="w-6 h-6" />,
    path: paths.adminDashboard,
  },
  {
    name: "Categories",
    icon: <HomeIcon className="w-6 h-6" />,
    path: paths.createCategory,
  },
  {
    name: "Products",
    icon: <InboxIcon className="w-6 h-6" />,
    path: paths.allProducts,
  },
  {
    name: "Profile",
    icon: <UserCircleIcon className="w-6 h-6" />,
    path: paths.adminProfile,
  },
  {
    name: "Logout",
    icon: <ArrowRightOnRectangleIcon className="w-6 h-6" />,
    onClick: Logout,
  },
];

// Buyer-specific links
const buyerLinks = [
  {
    name: "My Dashboard",
    icon: <HomeIcon className="w-6 h-6" />,
    path: paths.buyerDashboard,
  },
  {
    name: "My Orders",
    icon: <InboxIcon className="w-6 h-6" />,
    path: paths.buyerOrders,
  },
  {
    name: "Profile",
    icon: <UserCircleIcon className="w-6 h-6" />,
    path: paths.buyerProfile,
  },
  {
    name: "Logout",
    icon: <ArrowRightOnRectangleIcon className="w-6 h-6" />,
    onClick: Logout,
  },
];

// Default links for unauthenticated users
const defaultLinks = [
  {
    name: "Home",
    icon: <HomeIcon className="w-6 h-6" />,
    path: paths.home,
  },
  {
    name: "Login",
    icon: <ArrowRightOnRectangleIcon className="w-6 h-6" />,
    path: paths.login,
  },
  {
    name: "About us",
    icon: <FaInfo className="w-6 h-6" />,
    path: paths.aboutus,
  },
  {
    name: "Contact us",
    icon: <FaWpforms className="w-6 h-6" />,
    path: paths.contactus,
  },
];

const SidebarLinks = () => {
  const { auth } = useAuth(); // Extract user data from the context
  const role = auth?.user?.role; // Get user role (`admin` or `buyer`)

  // Return links based on the role
  if (role === "admin") {
    return adminLinks;
  } else if (role === "buyer") {
    return buyerLinks;
  }

  // Default links for unauthenticated users
  return defaultLinks;
};

export default SidebarLinks;
