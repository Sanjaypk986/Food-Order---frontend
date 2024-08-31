import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ThemeUi from "./ui/ThemeUi";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header>
      <nav className="px-2 border-gray-200 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-10" alt="logo" />
            <span className="self-center text-2xl font-bold whitespace-nowrap primary-text">
              Spicezy
            </span>
          </Link>
          <div className="relative flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
            <div className="hidden md:flex mr-6">
              <ThemeUi />
            </div>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleNav}
              aria-controls="navbar-user"
              aria-expanded={isNavOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full items-center justify-center md:w-auto ${
              isNavOpen ? "block" : "hidden"
            } md:block md:flex md:items-center`}
            id="navbar-user"
          >
            <ul className="font-medium flex flex-col p-4 mt-4  rounded-lg md:flex-row gap-3 md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  to="/#why-spicezy"
                  className="block py-1 px-3 font-semibold primary-text relative after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full"
                >
                  Why Spicezy?
                </Link>
              </li>
              <li>
                <Link
                  to="/order-now"
                  className="relative block py-1 px-3 after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full"
                >
                  Order Now
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="relative block py-1 px-3 after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full"
                >
                  Help
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="relative block py-1 px-3 after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block text-center py-1 px-6 text-white font-semibold rounded-full primary-bg"
                >
                  Login
                </Link>
              </li>
              <li className="flex items-center justify-center md:hidden">
                <ThemeUi />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
