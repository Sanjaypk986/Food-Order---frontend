import React, { useRef } from 'react';
import RestaurantCard from '../../../components/restaurant/RestaurantCard';

const TopRestaurants = () => {
  const containerRef = useRef(null);

  const restaurantData = [
    {
      image: 'https://res.cloudinary.com/du0bpdpzb/image/upload/v1723885980/f5aena3dwpyutcfh2tgq.jpg',
      name: 'Arabian Grills',
      location: 'Location 1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis maiores porro incidunt quia autem! Repellat ratione tempore.',
    },
    {
      image: 'https://res.cloudinary.com/du0bpdpzb/image/upload/v1723885980/f5aena3dwpyutcfh2tgq.jpg',
      name: 'Arabian Grills',
      location: 'Location 2',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis maiores porro incidunt quia autem! Repellat ratione tempore.',
    },
    {
      image: 'https://res.cloudinary.com/du0bpdpzb/image/upload/v1723885980/f5aena3dwpyutcfh2tgq.jpg',
      name: 'Arabian Grills',
      location: 'Location 3',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis maiores porro incidunt quia autem! Repellat ratione tempore.',
    },
    // Add more data as needed
  ];

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative p-4 md:p-8 mb-8 mt-8">
      <h3 className="font-semibold text-2xl mb-5">Top Restaurants</h3>
      <div className="relative">
        <button 
          onClick={scrollLeft} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md focus:outline-none"
          aria-label="Scroll Left"
        >
          &lt;
        </button>
        <button 
          onClick={scrollRight} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md focus:outline-none"
          aria-label="Scroll Right"
        >
          &gt;
        </button>
        <div ref={containerRef} className="flex overflow-x-auto gap-6 scrollbar-hide">
          {restaurantData.map((restaurant, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-2"
            >
              <RestaurantCard
                image={restaurant.image}
                name={restaurant.name}
                location={restaurant.location}
                description={restaurant.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRestaurants;
