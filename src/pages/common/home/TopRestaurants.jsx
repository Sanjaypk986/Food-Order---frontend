import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import RestaurantCard from "../../../components/restaurant/RestaurantCard";
import { fetchAllRestaurant } from "../../../services/restaurantApi";
import { setAllRestaurants } from "../../../features/restaurant/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopRestaurants = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurant.restaurant);
  const [loading,setLoading] = useState(false)
  
  const user = useSelector((state) => state.user.user);
  const isUserLoggedIn = user && Object.keys(user).length > 0;
  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true)
      try {
        const response = await fetchAllRestaurant();
        dispatch(setAllRestaurants(response.data));
        setLoading(false)
        
      } catch (error) {
        console.log(error);
        setLoading(false)
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
        {restaurants?.map((restaurant) => (
          <div key={restaurant._id} className="px-2">
            <Link to={isUserLoggedIn  ? `/user/restaurant/${restaurant._id}` : `/restaurant/${restaurant._id}`}>
            {loading ? (
              <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            ):(
              <RestaurantCard
              restaurant={restaurant}
            />
            )}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopRestaurants;
