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

              <span
                className="px-1 hidden md:block"
                onClick={handleDropdownToggle}
              >
                <svg
                  className="rounded-full border-2 w-12 h-12 bg-gray-300 text-gray-400 p-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                </svg>
              </span>
              <LeftDrawer />

              {isOpen && (
                <div className="absolute top-12 right-0 z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-gray-50 shadow dark:divide-gray-600 dark:bg-gray-700">
                  <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                    <li>
                      <button className="w-full bg-blue-600 text-white p-2 rounded-lg">
                        Login
                      </button>
                    </li>
                    <li className="text-center">
                      <a
                        href="#"
                        title=""
                        className=" text-xs w-full items-center my-3"
                      >
                        Don't have an account?{" "}
                        <span className="text-blue-700">Register</span>
                      </a>
                    </li>
                    <li>
                      <Link to={paths.profile}
                        title="profile"
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={paths.profile}
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Settings
                      </Link>
                    </li>
                  </ul>
                  <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                    <a
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Sign Out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
