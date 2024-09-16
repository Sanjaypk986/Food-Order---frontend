import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import ThemeUi from "../ui/ThemeUi";
import { ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../services/userApi";
import { setUser } from "../../features/user/userSlice";
import { setAddress } from "../../features/address/addressSlice";

const UserHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { items: cartItems } = useSelector((state) => state.cart);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await userProfile();
        dispatch(setUser(response.data));
        dispatch(setAddress(response.data.address));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);
  // Get the number of items in the cart
const CartItemsTotal = cartItems.length;
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header>
      <nav className="py-2 px-2 border-gray-200 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/user" className="flex items-center gap-1">
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
              <Link to={"/user/cart"} className="relative inline-block">
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs font-bold">
                  {CartItemsTotal}
                </div>
                <ShoppingBag className="text-3xl" />
              </Link>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full lg:me-0 focus:ring-4 focus:ring-gray-300"
                id="user-menu-button"
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={user.profilePic}
                  alt="user photo"
                />
              </button>
            </div>
            {isDropdownOpen && (
              <div
                className="absolute top-8 right-5 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                id="user-dropdown"
              >
                <div className="px-2 py-2">
                  <span className="block text-sm text-gray-900">
                    {user.name}
                  </span>
                  <span className="block text-sm text-gray-500 truncate">
                    {user.email}
                  </span>
                </div>
                <ul className="py-2">
                  <li>
                    <Link
                      to="/user/logout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
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
              aria-controls="navbar-user"
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
            id="navbar-user"
          >
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent">
              <li>
                <Link
                  to="/user/#why-spicezy"
                  className="block py-1 px-3 font-semibold primary-text relative after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full"
                >
                  Why Spicezy?
                </Link>
              </li>
              <li>
                <Link
                  to="/user/order-now"
                  className="relative block py-1 px-3 after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full"
                >
                  Order Now
                </Link>
              </li>
              <li>
                <Link
                  to="/user/my-orders"
                  className="relative block py-1 px-3 after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full"
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/user/help"
                  className="relative block py-1 px-3 after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/user/contact"
                  className="relative block py-1 px-3 after:absolute after:left-0 after:bottom-0 after:w-0 after:rounded after:h-[3px] after:bg-[#EB0029] after:transition-[width] after:duration-500 hover:after:w-full"
                >
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

export default UserHeader;
