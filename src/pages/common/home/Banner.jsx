import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Banner = () => {
    const user = useSelector((state) => state.user.user);
    const isUserLoggedIn = user && Object.keys(user).length > 0;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center p-4 md:p-8 mb-8 mt-8">
      <div className="flex flex-col gap-6 md:gap-8 justify-center text-center md:text-left order-2 md:order-1">
        <span className="text-2xl md:text-3xl font-semibold primary-text">Welcome</span>
        <h2 className="text-2xl md:text-4xl font-semibold leading-snug md:leading-tight">
          <span className="text-primary">Hungry?</span> We're here to satisfy your cravings.
          <span className="hidden md:block"> Place your order now!</span>
        </h2>
        <div className='flex justify-center items-center md:justify-start gap-4'>
          <Link to={isUserLoggedIn ? '/user/order-now' : '/order-now'}  className="btn primary-bg text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-primary-hover transition text-center">
            Order Now
          </Link>
          <Link to= {isUserLoggedIn?'/user/contact':'/contact'} className="btn secondary-bg text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-primary-hover transition text-center">
            Contact
          </Link>
        </div>
      </div>
      
      <div className="flex justify-center items-center order-1 md:order-2">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-md p-1"
          src="https://static.vecteezy.com/system/resources/previews/036/078/249/non_2x/ai-generated-watercolor-painting-of-a-delicious-looking-burger-and-fries-free-png.png"
          alt="food banner"
        />
      </div>
    </div>
  );
};

export default Banner;
