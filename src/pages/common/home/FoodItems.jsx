import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoryImages from '../../../assets/FoodCategoryImages'



const FoodItems = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const isUserLoggedIn = user && Object.keys(user).length > 0;


  const handleSearch = (name) => {
    const searchParams = new URLSearchParams();
    searchParams.set("search", name);
    const url = isUserLoggedIn
      ? `/user/order-now?${searchParams.toString()}`
      : `/order-now?${searchParams.toString()}`;

    navigate(url);
  };

  return (
    <div className="p-4 md:p-8 mb-8 mt-8">
      <h3 className="font-semibold text-2xl mb-5">What's on your mind?</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {
        CategoryImages?.map((image,index)=>(
          <div
            key={index}
            className="flex flex-col w-36  h-44 justify-center items-center gap-2 rounded-full"
            onClick={() => handleSearch(image.name)}
          >
            {
              image.image? <img  src={image.image} alt={image.name} key={index} className="rounded-lg transition-transform duration-300 transform hover:scale-105"/>:
              <div className="skeleton w-24 h-24 rounded-full"></div>
            }
          
          </div>
        ))
         
      }
      </div>
    </div>
  );
};

export default FoodItems;
