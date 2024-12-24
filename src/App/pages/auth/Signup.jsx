import React, { useState } from "react";
import { paths } from "../../../helper/paths";
import { Link } from "react-router-dom";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center py-4 px-4 lg:px-14 2xl:px-20">
        <div className="grid md:grid-cols-2 items-center gap-3 md:gap-8 2xl:gap-10 max-w-6xl w-full">
          {/* Left Section: Introduction */}
          <div>
            <h2 className="md:text-4xl text-xl 2xl:text-5xl font-extrabold lg:leading-[50px] text-gray-900">
              Seamless Sign Up for <span className="text-blue-500">Exclusive Access </span>
            </h2>
            <p className="text-sm md:text-md 2xl:text-lg mt-3 text-gray-800">
            Join us today to unlock the full potential of our B2B marketplace.
              Explore products, connect with vendors, and grow your business.
            </p>
            <p className="text-sm mt-4 md:mt-10 text-gray-800">
              Already have an account?{" "}
              <Link
                to={paths.login}
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Log in here
              </Link>
            </p>
          </div>

          {/* Right Section: Signup Form */}
          <form className="max-w-md md:ml-auto w-full">
            <h3 className="text-gray-800 text-2xl md:text-3xl font-extrabold mb-4 md:mb-8">
              Sign Up
            </h3>
            <div className="space-y-2 md:space-y-4">
              {/* Full Name Field */}
              <div>
                <input
                  name="fullname"
                  type="text"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Full Name"
                />
              </div>
              {/* Email Field */}
              <div>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Email Address"
                />
              </div>
              {/* Password Field */}
              <div className="relative">
                <input
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-4 text-sm flex items-center text-gray-600"
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
              {/* Confirm Password Field */}
              <div className="relative">
                <input
                  name="confirm-password"
                  type={passwordVisible ? "text" : "password"}
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-4  text-sm flex items-center text-gray-600"
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Signup Button */}
            <div className="!mt-8">
              <button
                type="submit"
                className="w-full shadow-xl py-2 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Sign Up
              </button>
            </div>

            {/* Google Signup Button */}
            <div className="flex justify-center mt-8">
              <button
                type="button"
                className="flex items-center gap-2 bg-white border border-gray-300 rounded-md py-2 px-4 hover:shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  />
                </svg>
                Sign up with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
