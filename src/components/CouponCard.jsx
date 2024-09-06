import React from 'react';

const CouponCard = ({ handleCoupon }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {/* First Coupon */}
      <div className="border rounded p-2 shadow-sm bg-gray-200 text-center"
           onClick={() => handleCoupon("WELCOME50%")}> {/* Pass the coupon code */}
        <h4 className="text-base font-medium text-blue-600">WELCOME50%</h4>
        <p className="text-xs text-gray-500">Only for first order</p>
      </div>

      {/* Second Coupon */}
      <div className="border rounded p-2 shadow-sm bg-gray-200 text-center"
           onClick={() => handleCoupon("ORDER500")}>
        <h4 className="text-base font-medium text-blue-600">ORDER500</h4>
        <p className="text-xs text-gray-500">Order above 500</p>
      </div>

      {/* Third Coupon */}
      <div className="border rounded p-2 shadow-sm bg-gray-200 text-center"
           onClick={() => handleCoupon("ORDER1000")}>
        <h4 className="text-base font-medium text-blue-600">ORDER1000</h4>
        <p className="text-xs text-gray-500">Order above 1000</p>
      </div>
    </div>
  );
};

export default CouponCard;
