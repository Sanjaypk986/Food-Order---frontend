import React, { useState } from "react";
import ScrollAnimation from "../../../hooks/ScrollAnimation";

const foodMenu = [
  {
    name: "Vada 1 nos",
    price: "₹18",
    rating: "286",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/11/2b2b6126-0218-44cf-b368-184f9e5098e8_546f62ce-0275-491a-84d1-01db05c78441.png",
    description:
      "A delicious, crispy lentil doughnut with a savory taste, perfect for one serving and full of flavor.",
  },
  {
    name: "Udupi masala dosa",
    price: "₹110",
    rating: "422",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/11/033976ec-42da-47ca-b2a0-a93a9ca78a6d_7c9e9156-1922-4d08-8a6f-bfb281d431b5.png",
    description:
      "A delicious, crispy lentil doughnut with savory flavors, reminiscent of Udupi-style Masala Dosa, serves one.",
  },
];

const RecommendedFoods = () => {
    ScrollAnimation()
  const [active, setActive] = useState(true);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <section className="p-6">
      <div className="lg:w-10/12 mx-auto flex flex-col gap-2">
        <h4 className="md:text-base font-bold mb-4"></h4>

        <div className="py-2 border-y-8 border-gray-100">
          <div className="collapse collapse-arrow">
            <div
              className="collapse-title md:text-base font-bold mb-4 cursor-pointer"
              onClick={handleToggle}
            >
              Recommended ({foodMenu.length})
            </div>

            <div className={`${active ? "block" : "hidden "}`}data-aos="zoom-in-up" data-aos-duration="1000">
              {foodMenu.map((food, index) => (
                <div
                  key={index}
                  className="mb-2 flex justify-between items-start p-1 pb-3 border-b"
                >
                  <div className="flex flex-col justify-start gap-1">
                    <p className="font-bold">{food.name}</p>
                    <p className="font-semibold">{food.price}</p>
                    <div className="flex gap-3 items-center justify-start text-sm">
                      <i className="fa-solid fa-star text-green-600"> 4.4</i>
                      <span>({food.rating})</span>
                    </div>
                    <p className="hidden md:flex text-sm md:w-3/4 text-gray-600">
                      {food.description}
                    </p>
                  </div>

                  <div className="relative">
                    <img
                      className="w-20 h-20 md:w-36 md:h-36 rounded-xl"
                      src={food.image}
                      alt={food.name}
                    />
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                      <button className="text-green-600 font-semibold text-sm md:text-lg py-1 px-4 md:px-6 rounded-lg bg-white">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedFoods;
