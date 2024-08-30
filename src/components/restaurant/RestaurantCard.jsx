import React from 'react';

const RestaurantCard = ({ image, name, location, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 p-4 bg-stone-100 rounded-lg shadow-lg">
      <img
        className="w-full rounded-lg shadow-md object-cover"
        src={image}
        alt={name}
      />
      <div className="mt-4">
        <h5 className="font-semibold text-lg md:text-xl text-gray-800">{name}</h5>
        <p className="text-sm md:text-base text-gray-700">{location}</p>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
