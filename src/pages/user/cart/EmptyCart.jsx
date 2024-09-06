import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="my-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          className="w-44 h-36 md:h-72 md:w-80"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="empty cart"
        />
        <h4 className="text-lg md:text-xl font-semibold">Your cart is empty</h4>
        <p className="text-xs md:text-sm text-center text-gray-500">
          You can go to the home page to view more..
        </p>
        <Link
          to="/user"
          className="text-xs md:text-sm text-blue-500 hover:underline"
        >
          Go to Home Page
        </Link>
      </div>
    </section>
  );
};

export default EmptyCart;
