import React from "react";

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
  return (
    <div className="p-4 md:p-8 mb-8 mt-8">
      <h3 className="font-semibold text-2xl mb-5">What's on your mind?</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {foodItems.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center gap-2">
            <img
              className="rounded-lg w-24 h-24 md:w-32 md:h-32 shadow-md"
              src={item.src}
              alt={item.name}
            />
            <p className="font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
