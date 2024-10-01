import React from "react";

const RestaurantCoupon = () => {
  const couponArray = [
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/welcome",
      title: "Extra ₹25 Off",
      descrption: "Only for First order",
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
      title: "Flat ₹100 Off",
      descrption: "Order above 500 rs",
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day",
      title: "Flat ₹200 Off",
      descrption: "Order above 1000 rs",
    },
  ];

  return (
    <section className=" p-6">
      <div className="lg:w-10/12 mx-auto">
        <h4 className=" md:text-lg font-bold mb-4">Deals for you</h4>
        <div className="grid grid-cols-span-1 md:grid-cols-3 gap-2 cursor-pointer">
          {couponArray?.map((coupon, index) => (
            <div className="p-2 border rounded-3xl" key={index}>
              <div className="flex item-center gap-2 ">
                <img className="w-10 h-10" src={coupon.image} alt="coupon" />
                <div>
                  <span className="font-bold text-sm md:text-base">
                    {coupon.title}
                  </span>
                  <p className="text-xs">{coupon.descrption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantCoupon;
