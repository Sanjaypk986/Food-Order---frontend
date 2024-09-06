import React from 'react';
import { Percent, ShoppingCart, Tag } from 'lucide-react'; // Importing icons from Lucide

const CouponCard = ({ handleCoupon }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {/* First Coupon */}
      <div
        className="border rounded-lg p-2 shadow-sm bg-gray-100 cursor-pointer flex items-center justify-between"
        onClick={() => handleCoupon("WELCOME50%")}
      >
        <div>
          <h4 className="text-sm font-medium text-blue-600">WELCOME50%</h4>
          <p className="text-xs text-gray-500">Only for first order</p>
        </div>
        <Percent className="w-6 h-6 text-blue-600" /> {/* Percent icon */}
      </div>

      {/* Second Coupon */}
      <div
        className="border rounded-lg p-2 shadow-sm bg-gray-100 cursor-pointer flex items-center justify-between"
        onClick={() => handleCoupon("ORDER500")}
      >
        <div>
          <h4 className="text-sm font-medium text-blue-600">ORDER500</h4>
          <p className="text-xs text-gray-500">Order above 500</p>
        </div>
        <ShoppingCart className="w-6 h-6 text-blue-600" /> {/* Shopping cart icon */}
      </div>

      {/* Third Coupon */}
      <div
        className="border rounded-lg p-2 shadow-sm bg-gray-100 cursor-pointer flex items-center justify-between"
        onClick={() => handleCoupon("ORDER1000")}
      >
        <div>
          <h4 className="text-sm font-medium text-blue-600">ORDER1000</h4>
          <p className="text-xs text-gray-500">Order above 1000</p>
        </div>
        <Tag className="w-6 h-6 text-blue-600" /> {/* Tag icon */}
      </div>
    </div>
  );
};

export default CouponCard;
