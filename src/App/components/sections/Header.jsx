import { SearchInput } from "../reuseable/SearchInput";
import ButtonGroup from "../reuseable/UserButton";

const Header = () => {
  return (
    <>
      <section className="bg-cover bg-center  bg-no-repeat bg-[url('/src/assets/svg/wave.svg')] overflow-hidden bg-gray-100">
        <div className="py-8  px-4 mx-auto max-w-screen text-center lg:py-16 lg:px-12 pb-16 bg-gray-400/25 ">
          <a
            href="#"
            className="flex flex-wrap md:flex-nowrap justify-between items-center gap-2 p-1 md:p-3 mb-4 text-sm bg-gray-100 rounded-xl  
  text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-all max-w-lg m-auto"
            role="alert"
          >
            <span className="text-xs bg-primary-600 text-blue-600 px-3 py-1 rounded-full">
              New
            </span>
            <span className="flex-1 text-sm font-medium text-center md:text-left">
              Pakistan's Marketplace Explore a World of Products
            </span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <h1
            className="mb-2 text-3xl font-extrabold  text-gray-900 md:text-6xl lg:text-6xl dark:text-white mt-4 "
          >
            Find Anything Around You
          </h1>
          <p className="mb-4 text-lg font-normal text-gray-700  lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Welcome to the ultimate multivendor marketplace! Connect with
            trusted sellers and discover unique products tailored to your needs
          </p>
       <ButtonGroup/>

          <div className="mb-4">
            <SearchInput />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
