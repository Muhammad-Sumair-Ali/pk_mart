import Logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../../helper/paths";
import SearchBarNav from "../reuseable/SearchBarNav";
import { SideMenu } from "../reuseable/SideMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="backdrop-blur-sm hover:bg-gray-50/75 dark:bg-gray-800 antialiased shadow-lg sticky top-0 bg-gray-100/25 z-50">
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

              <button className="hidden lg:block">
                  <Link
                    to={paths.messagesHome}
                    className="flex   items-center text-sm  py-2  sm:py-1 p-2 rounded-md text-white hover:bg-blue-700 bg-blue-600 group"
                  >

                    <span className="p-1  whitespace-nowrap">
                      Messages
                    </span>
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
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>
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
