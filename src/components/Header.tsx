import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icons from './Icons'

// From  here: https://larainfo.com/blogs/react-responsive-navbar-menu-with-tailwind-css-example
export function Header() {
  const [navbar, setNavbar] = useState(false)

  return (
    <div>
      <nav className="bg-blue-500 shadow z-20">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 bg-blue-500">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <h2 className="text-2xl font-bold text-white">
                  <img alt="logo-wheel" src="images/ship-wheel-white.svg" className="h-10" />
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <Icons.Close /> : <Icons.Bars3 />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/about">About</Link>
                </li>
              </ul>

              {/*
              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <Link
                  to="/"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Sign in
                </Link>
                <Link
                  to="/"
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                  Sign up
                </Link>
              </div>
              */}
            </div>
          </div>
          {/*
          <div className="hidden space-x-2 md:inline-block">
            <Link
              to="/"
              className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
              Sign in
            </Link>
            <Link
              to="/"
              className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
              Sign up
            </Link>
          </div>
          */}
        </div>
      </nav>
    </div>
  )
}
