import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../../helper/paths'

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2 px-4 lg:px-14 2xl:px-20">
      <div className="grid md:grid-cols-2 items-center gap-5 md:gap-5 2xl:gap-8 max-w-6xl w-full">
        {/* Welcome Section */}
        <div>
        <h2 className="md:text-4xl text-xl 2xl:text-5xl font-extrabold lg:leading-[50px] text-gray-900">

            Welcome to<span className='text-blue-500'> JZ Mart </span>, Your B2B Marketplace
          </h2>
          <p className="text-sm md:text-md 2xl:text-lg mt-3 text-gray-800">
            Simplify your business needs with JZ Mart. Log in to access an
            extensive range of products and services tailored to elevate your
            business experience.
          </p>
          <p className="text-sm mt-4 md:mt-10 text-gray-800">
            Don't have an account?{' '}
            <Link
              to={paths.signup}
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Register here
            </Link>
          </p>
        </div>

        {/* Login Form */}
        <form className="max-w-md md:ml-auto w-full">
          <h3 className="text-gray-800 text-3xl font-extrabold mb-8">Sign in</h3>
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required=""
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                placeholder="Email address"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                name="password"
                type={passwordVisible ? 'text' : 'password'}
                autoComplete="current-password"
                required=""
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute top-1/2 right-4 text-sm transform -translate-y-1/2 text-gray-600"
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <input
                name="confirmPassword"
                type={confirmPasswordVisible ? 'text' : 'password'}
                autoComplete="off"
                required=""
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                className="absolute top-1/2 right-4 text-sm transform -translate-y-1/2 text-gray-600"
              >
                {confirmPasswordVisible ? 'Hide' : 'Show'}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="javascript:void(0);"
                  className="text-blue-600 hover:text-blue-500 font-semibold"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <div className="!mt-4">
            <button
              type="button"
              className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Log in
            </button>
          </div>

          {/* Google Sign-In */}
          <div className="space-y-2 flex flex-col items-center mt-4">
            <button
              type="button"
              className="border-none outline-none flex items-center justify-center gap-2 w-3/4 hover:bg-gray-100 py-3 px-4 rounded-md shadow-md"
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
                  fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                />
                <path
                  fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                />
                <path
                  fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                />
                <path
                  fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
