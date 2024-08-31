import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import RestaurantCard from "../../../components/restaurant/RestaurantCard";
import { fetchAllRestaurant } from "../../../services/restaurantApi";

const TopRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetchAllRestaurant();
        setRestaurants(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRestaurants();
  }, []);

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
        {restaurants.map((restaurant, index) => (
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
