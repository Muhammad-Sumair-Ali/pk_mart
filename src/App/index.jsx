import { useLocation } from "react-router-dom";
import AppRouting from "./AppRouting";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { paths } from "../helper/paths";

function App() {
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
    <div >
      {!hideNavbarFooter && <Navbar />}
      <div className="w-screen m-auto lg:max-w-[1210px]">
        <AppRouting />
      </div>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
