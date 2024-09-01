import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllFoods } from "../../../services/foodApi";

const foodItems = [
  {
    name: "Porotta",
    src: "https://static.vecteezy.com/system/resources/previews/044/813/491/non_2x/butter-paratha-isolated-on-transparent-background-free-png.png",
  },
  {
    name: "Biriyani",
    src: "https://static.vecteezy.com/system/resources/previews/041/856/038/non_2x/ai-generated-delicious-dum-handi-biryani-in-bowl-isolated-on-transparent-background-free-png.png",
  },
  {
    name: "Burgers",
    src: "https://static.vecteezy.com/system/resources/previews/023/522/928/non_2x/beef-burger-cutout-free-png.png",
  },
  {
    name: "Pizzas",
    src: "https://static.vecteezy.com/system/resources/previews/032/508/294/non_2x/pizza-with-cherry-tomatoes-and-mozzarella-on-wood-ai-generative-free-png.png",
  },
  {
    name: "Noodles",
    src: "https://static.vecteezy.com/system/resources/previews/038/034/333/non_2x/ai-generated-plate-of-noodles-isolated-on-transparent-background-free-png.png",
  },
  {
    name: "North Indian",
    src: "https://static.vecteezy.com/system/resources/previews/046/342/870/non_2x/vegetable-thai-food-isolated-on-transparent-background-free-png.png",
  },
];

const FoodItems = () => {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoodSearch = async () => {
      try {
        const response = await fetchAllFoods();
        setFoods(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFoodSearch();
  }, []);

  const handleSearch = (name) => {
    const searchParams = new URLSearchParams();
    searchParams.set('search', name);
    const url = `/order-now?${searchParams.toString()}`;
    navigate(url);
  };

  return (
    <div className="p-4 md:p-8 mb-8 mt-8">
      <h3 className="font-semibold text-2xl mb-5">What's on your mind?</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {foods.map((food) => (
          <div
            key={food._id}
            className="flex flex-col shadow-lg justify-center items-center gap-2 "
            onClick={() => handleSearch(food.name)}
          >
            <img
              className="rounded-full w-24 h-24 md:w-32 md:h-32 shadow-md "
              src={food.image}
              alt={food.name}
            />
            <p className="font-semibold text-sm md:text-base pb-2">{food.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
