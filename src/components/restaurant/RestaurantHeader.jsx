import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import ThemeUi from "../ui/ThemeUi";
import { AuthRestaurantProfile } from "../../services/restaurantApi";
import { setRestaurant } from "../../features/restaurant/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";

const RestaurantHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch()
  const restaurant = useSelector((state) => state.restaurant.restaurant);
  

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await AuthRestaurantProfile();  
        dispatch(setRestaurant(response.data));
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <header>
      <nav className="py-2 px-2 border-gray-200 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <Link to="/restaurants" className="flex items-center gap-1">
            <img src={logo} className="h-10" alt="logo" />
            <span className="self-center text-xl sm:text-2xl font-bold whitespace-nowrap primary-text">
              Spicezy
            </span>
          </Link>
          <div className="relative flex items-center lg:order-2 space-x-3 rtl:space-x-reverse">
            <div className="flex justify-center items-center gap-2 sm:gap-6">
              <div className="hidden lg:flex">
                <ThemeUi />
              </div>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full lg:me-0 focus:ring-4 focus:ring-gray-300"
                id="restaurant-menu-button"
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={restaurant?.restaurant?.image}
                  alt="restaurant photo"
                />
              </button>
            </div>
            {isDropdownOpen && (
              <div
                className="absolute top-8 right-5 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                id="restaurant-dropdown"
              >
                <div className="px-2 py-2">
                  <span className="block text-sm text-gray-900">{restaurant?.restaurant?.name}</span>
                  <span className="block text-sm text-gray-500 truncate">{restaurant?.restaurant?.email}</span>
                </div>
                <ul className="py-2">
                  <li>
                    <Link to={'/restaurants/logout'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleNav}
              aria-controls="navbar-restaurant"
              aria-expanded={isNavOpen}
            >
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
            className={`w-full lg:w-auto ${
              isNavOpen ? "block" : "hidden"
            } lg:block lg:flex lg:items-center`}
            id="navbar-restaurant"
          >
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent">
              <li>
                <Link to="/restaurants/#why-spicezy" className="block py-1 px-3 font-semibold primary-text relative after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full primary-text">
                  Why Spicezy?
                </Link>
              </li>
              <li>
                <Link to="/restaurants/orders" className="block py-1 px-3 font-semibold  relative after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/restaurants/foods" className="block py-1 px-3 font-semibold  relative after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full">
                  Foods
                </Link>
              </li>
              <li>
                <Link to="/restaurants/contact" className="block py-1 px-3 font-semibold  relative after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full">
                  Contact
                </Link>
              </li>
              <li className="flex lg:hidden">
                <ThemeUi />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default RestaurantHeader;
