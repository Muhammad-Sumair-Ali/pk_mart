import { useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../../helper/paths";
import SidebarLinks from "../../../helper/constants/SidebarLinks";

export const SideMenu = () => {
  const links = SidebarLinks(); // Get the appropriate links for the user

  const user = false;
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full p-3 ml-1 shadow-lg
     transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          type="button"
          onClick={toggleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>

      {/* drawer component */}
      <div
        className={`fixed top-0 left-0 h-screen p-4 bg-white w-64 dark:bg-gray-800 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h5
          id="drawer-disable-body-scrolling-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 space-x-2"
        >
          Jz Mart
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          {!user ? (
            <div>
              <Link to={paths.profile}>
                <div className="flex items-center gap-2 p-2 bg-white border rounded-md dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {/* Profile Picture */}
                  <div className="relative w-8 h-8">
                    <svg
                      className="w-full h-full rounded-full bg-gradient-to-tr from-gray-200 via-gray-300 to-gray-400 text-gray-500 p-1.5 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                    </svg>
                  </div>

                  {/* Text Section */}
                  <div className="text-sm">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">
                      Hi, <em>Mr. Sumair</em>
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Welcome back!
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <div>
              <Link to={paths.login}>
                <div className="flex items-center gap-2 p-2 bg-white border rounded-md dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {/* Placeholder Icon */}
                  <div className="relative w-8 h-8">
                    <svg
                      className="w-full h-full rounded-full bg-gradient-to-tr from-gray-200 via-gray-300 to-gray-400 text-gray-500 p-1.5 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                    </svg>
                  </div>

                  {/* Text Section */}
                  <div className="text-sm">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">
                      Not Logged in !!
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Login to see profile
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
          <ul className="space-y-2 font-medium">
            <li>
              <Link to={paths.mymarket}>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                    />
                  </svg>

                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    My Market
                  </span>
                </button>
              </Link>
            </li>

            {links.map((link, index) => (
              <li key={index} className={`menu-item ${link.gap ? "mt-4" : ""}`}>
                <Link
                  to={link.path}
                  onClick={() => {
                    toggleDrawer();
                    link.onClick && link.onClick(); 
                  }}
                >
                  <button className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    {link.icon}
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      {link.name}
                    </span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
