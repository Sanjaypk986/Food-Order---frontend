import React from 'react';
import delivery from '../../../assets/express.png';
import contactless from '../../../assets/contactless.png';
import payment from '../../../assets/payment.png';

const Features = () => {
  return (
    <div className="p-4 md:p-8 mb-8 mt-8">
      <h3 className="text-3xl font-semibold text-center mb-6 primary-text underline">Why Spicezy?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <img
            src={delivery}
            alt="Express Delivery"
            className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4"
          />
          <h5 className="text-xl font-semibold mb-2">Express Delivery</h5>
          <p className="text-sm md:text-base">
            Receive your food in record time with our fast and reliable delivery service.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={contactless}
            alt="Contactless Delivery"
            className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4"
          />
          <h5 className="text-xl font-semibold mb-2">Contactless Delivery</h5>
          <p className="text-sm md:text-base">
            Safe and hygienic delivery without direct contact, ensuring a secure and convenient experience.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={payment}
            alt="Multiple Payment Options"
            className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4"
          />
          <h5 className="text-xl font-semibold mb-2">Multiple Payment Options</h5>
          <p className="text-sm md:text-base">
            Choose from various payment methods like credit cards, digital wallets, or cash on delivery for flexibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
