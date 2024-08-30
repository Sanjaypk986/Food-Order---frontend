import React from 'react';
import Slider from 'react-slick';
import RestaurantCard from '../../../components/restaurant/RestaurantCard';

const TopRestaurants = () => {
  const restaurantData = [
    {
      image: 'https://res.cloudinary.com/du0bpdpzb/image/upload/v1723885980/f5aena3dwpyutcfh2tgq.jpg',
      name: 'Arabian Grills',
      location: 'Location 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      image: 'https://res.cloudinary.com/du0bpdpzb/image/upload/v1723885980/f5aena3dwpyutcfh2tgq.jpg',
      name: 'Arabian Grills',
      location: 'Location 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      image: 'https://res.cloudinary.com/du0bpdpzb/image/upload/v1723885980/f5aena3dwpyutcfh2tgq.jpg',
      name: 'Arabian Grills',
      location: 'Location 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    // Add more restaurant data as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 md:p-8 mb-8 mt-8">
      <h3 className="font-semibold text-2xl mb-5">Top Restaurants</h3>
      <Slider {...settings}>
        {restaurantData.map((restaurant, index) => (
          <div key={index} className="px-2">
            <RestaurantCard
              image={restaurant.image}
              name={restaurant.name}
              location={restaurant.location}
              description={restaurant.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopRestaurants;
