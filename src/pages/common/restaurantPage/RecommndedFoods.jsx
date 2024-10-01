import React, { useState } from "react";
import ScrollAnimation from "../../../hooks/ScrollAnimation";
import RestaurantAccordion from "../../../components/restaurant/RestaurantAccordion";

const RecommendedFoods = ({ foods, handleCart }) => {
  const limitedFoods = foods.slice(0, 3);
  ScrollAnimation();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="p-6">
      <div className="lg:w-10/12 mx-auto flex flex-col gap-2">
        <div className="py-2 border-y-8 border-gray-100">
          <div className="collapse collapse-arrow">
            <div
              className="collapse-title md:text-base font-bold mb-4 cursor-pointer"
              onClick={() => handleToggle(0)}
            >
              Recommended ({limitedFoods.length})
            </div>

            <div
              className={`${activeIndex === 0 ? "block" : "hidden"}`}
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {limitedFoods.map((food, index) => (
                <RestaurantAccordion
                  key={index}
                  food={food}
                  handleCart={handleCart}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="py-2 border-y-8 border-gray-100">
          <div className="collapse collapse-arrow">
            <div
              className="collapse-title md:text-base font-bold mb-4 cursor-pointer"
              onClick={() => handleToggle(1)}
            >
              All Items ({foods.length})
            </div>

            <div
              className={`${activeIndex === 1 ? "block" : "hidden"}`}
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {foods.map((food, index) => (
                <RestaurantAccordion
                  key={index}
                  food={food}
                  handleCart={handleCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedFoods;
