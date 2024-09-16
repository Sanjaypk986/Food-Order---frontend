import React from 'react'
import { Link } from 'react-router-dom'
import delivery from '../../assets/express.png';
import contactless from '../../assets/contactless.png';
import payment from '../../assets/payment.png';

const RestaurantHome = () => {
  return (
    <main className="container mx-auto px-1">
      <section className='my-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center p-4 md:p-8 mb-8 mt-8">
      <div className="flex flex-col gap-6 md:gap-8 justify-center text-center md:text-left order-2 md:order-1">
        <span className="text-2xl md:text-3xl font-semibold primary-text">Welcome</span>
        <h2 className="text-2xl md:text-4xl font-semibold leading-snug md:leading-tight">
          <span className="text-primary">Ready to serve?</span> Ready to manage your orders effortlessly?.
          <span className="hidden md:block">Easily serve your customers.</span>
        </h2>
        <div className='flex justify-center items-center md:justify-start gap-4'>
          <Link to={'/restaurants/orders'}  className="btn primary-bg text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-primary-hover transition text-center">
            Orders
          </Link>
          <Link to= {'/restaurants/contact'} className="btn secondary-bg text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-primary-hover transition text-center">
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
      </section>
      <section className='my-8'id="why-spicezy">
      <div className="p-4 md:p-8 mb-8 mt-8">
      <h3 className="text-3xl font-semibold text-center mb-6 primary-text underline">Why Spicezy?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <img
            src={delivery}
            alt="Express Delivery"
            className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4"
          />
          <h5 className="text-xl font-semibold mb-2">Order Management</h5>
          <p className="text-sm md:text-base">
          Easily track and manage all incoming orders, view details, and update statuses to streamline operations.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={contactless}
            alt="Contactless Delivery"
            className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4"
          />
          <h5 className="text-xl font-semibold mb-2">Menu Management</h5>
          <p className="text-sm md:text-base">
          Effortlessly update your menu items, prices, and descriptions to keep offerings fresh and aligned with customer preferences.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={payment}
            alt="Multiple Payment Options"
            className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4"
          />
          <h5 className="text-xl font-semibold mb-2">Promotions and Discounts</h5>
          <p className="text-sm md:text-base">
          Set up and manage special promotions, discount codes, and loyalty programs to attract and retain customers.
          </p>
        </div>
      </div>
    </div>
      </section>
      </main>
  )
}

export default RestaurantHome
