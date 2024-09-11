import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import RestaurantCard from "../../../components/restaurant/RestaurantCard";
import { fetchAllRestaurant } from "../../../services/restaurantApi";
import { setAllRestaurants } from "../../../features/restaurant/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopRestaurants = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurant.data);
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetchAllRestaurant();
        dispatch(setAllRestaurants(response.data));
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
        {restaurants?.map((restaurant, index) => (
          <div key={index} className="px-2">
            <Link to={`/restaurant/${restaurant._id}`}>
            <RestaurantCard
              image={restaurant.image}
              name={restaurant.name}
              location={restaurant.location}
              description={restaurant.description}
            />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopRestaurants;
