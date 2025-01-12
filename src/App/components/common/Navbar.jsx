import Logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../../helper/paths";
import SearchBarNav from "../reuseable/SearchBarNav";
import { SideMenu } from "../reuseable/SideMenu";
import NavGetbestPriceModal from "../modal/NavGetbestPrice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="backdrop-blur-sm hover:bg-gray-50/75 dark:bg-gray-800 antialiased shadow-lg sticky top-0 bg-gray-100/25 z-50 xl:px-12 2xl:px-16">
        <div className="w-full px-1 md:px-4 mx-auto 2xl:px-0 py-2">
          <div className="flex items-center  justify-between ">
            <div className="flex items-center md:space-x-2 ">
              <Link to={paths.home}>
                <img src={Logo} className="w-16 h-full sm:w-16  md:w-20" />
              </Link>

              <div className="shrink-0">
                <Link to={paths.mymarket}>
                <button className="btn p-2 rounded-md hidden md:block bg-slate-300">
                  My Market
                </button>
                </Link>
              </div>
            </div>

            {/* search bar  */}
            <SearchBarNav />
            <div className="flex items-center lg:space-x-2 relative gap-1">
              <NavGetbestPriceModal/>

              <button className="hidden lg:block">
                  <Link
                    to={paths.sellproduct}
                    className="flex   items-center text-sm  py-2  sm:py-1 p-2 rounded-md text-white hover:bg-fuchsia-700 bg-fuchsia-800 group"
                  >

                    <span className="p-1  whitespace-nowrap">
                      Sell Product
                    </span>
                  </Link>
              </button>
              <SideMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
