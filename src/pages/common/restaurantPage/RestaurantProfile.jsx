import { GitCommitVertical } from "lucide-react";
import React from "react";

const RestaurantProfile = ({restaurant}) => {
  return (
    <section className=" mt-3 md:mt-7 p-6 mx-auto">
      <div className="lg:w-10/12 mx-auto text-black">
        <h2 className="text-lg md:text-xl font-bold mb-4">{restaurant.name}</h2>
        <div className="relative px-1 sm:px-2 pb-1 sm:pb-2 w-full">
          <div className="absolute top-4 bg-gray-100 rounded-3xl shadow-[0px_8px_15px_rgba(0,0,0,0.2)] -left-3 -right-3 -bottom-3"></div>

          <div className="relative flex px-6 flex-col w-full items-start gap-3  border border-gray-300 rounded-3xl p-3 text-sm  font-bold z-10 bg-white">
            <div className="flex gap-3 items-center justify-start ">
              <i className="fa-solid fa-star text-green-600"></i>
              <span>4.4 (2.8K+ ratings)</span>
            </div>
            <h5 className="primary-text underline">{restaurant.category.join(', ')}</h5>
            <div className="flex items-center justify-start gap-3">
              <GitCommitVertical />
              <div className="flex flex-col gap-3">
                <p>
                  Outlet<span className="font-normal ml-2">{restaurant.location}</span>
                </p>
                <span>{restaurant.makingTime}</span>
              </div>
            </div>
            <div className="border-t w-full px-2 pt-2 flex justify-start items-center">
              <p className="primary-text  flex items-center gap-3 text-xs ">
                <i className="text-base fa-solid fa-truck"></i>
                Special Opening Offer: Free Delivery for All Orders!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantProfile;
