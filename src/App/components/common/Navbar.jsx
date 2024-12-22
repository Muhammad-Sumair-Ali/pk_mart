import { LeftDrawer } from "../reuseable/LeftDrawer";
import Logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../../helper/paths";
import SearchBarNav from "../reuseable/SearchBarNav";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };




  return (
    <>
      <nav className="backdrop-blur-sm hover:bg-gray-50/75 dark:bg-gray-800 antialiased shadow-lg sticky top-0 bg-gray-100/25 z-50">
        <div className="w-full px-1 md:px-4 mx-auto 2xl:px-0 py-2">
          <div className="flex items-center justify-between ">
            <div className="flex items-center md:space-x-2 ">
              <Link to={paths.home}>
                <img src={Logo} className="w-16 h-full sm:w-16  md:w-20" />
              </Link>

              <div className="shrink-0">
                <button className="btn p-2 rounded-md hidden md:block bg-slate-300">
                  Enter Market
                </button>
              </div>
            </div>
           

           {/* search bar  */}
          <SearchBarNav/>
            <div className="flex items-center lg:space-x-2 relative">
              <button className="text-xs hidden md:p-2 rounded-md bg-blue-600 text-white md:flex items-center gap-1">
                Get Best Price{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
              </button>

             
              <LeftDrawer />

             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
