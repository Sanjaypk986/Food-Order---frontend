import { GitCommitHorizontal, Search, Vegan } from "lucide-react";
import React from "react";

const MenuRestaurant = () => {
  return (
    <section className="p-6">
      <div className="lg:w-10/12 mx-auto">
        <h5 className="justify-center text-sm font-semibold flex items-center gap-2 my-3">
          <GitCommitHorizontal />
          <span>MENU</span>
          <GitCommitHorizontal />
        </h5>
        <div className="mx-auto flex justify-center mb-4 items-center gap-2 bg-gray-100 p-2 px-4 rounded-xl">
          <input
            type="text"
            placeholder="Search for dishes..."
            className="p-2 w-full border-none outline-none text-center bg-gray-100 text-sm text-gray-700"
          />
          <Search className="w-6 h-6 text-gray-500 cursor-pointer" />
        </div>
        <div className="my-3 flex justify-start items-center gap-2">
          <div className="p-2 border border-gray-300 rounded-3xl inline-block">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-green-600 flex justify-center items-center gap-1"><img className="w-4 h-4" src="https://img.icons8.com/?size=96&id=61083&format=png" alt="vegitarian" />Pure-veg</span>
            </div>
          </div>
          <div className="p-2 border border-gray-300 rounded-3xl inline-block">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold flex justify-center items-center gap-1"><img className="w-4 h-4" src="https://img.icons8.com/?size=48&id=61082&format=png" alt="Non-veg" />Non-veg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuRestaurant;
