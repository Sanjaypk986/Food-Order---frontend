import React from "react";
import Banner from "./Banner";
import FoodItems from "./FoodItems";
import TopRestaurants from "./TopRestaurants";
import Features from "./Features";

const HomePage = () => {
  return (
    <main className="container mx-auto px-1">
      <section>
        <Banner />
      </section>
      <section className="my-10">
        <FoodItems />
      </section>
      <section>
        <TopRestaurants />
      </section>
      <section className="my-10" id="why-spicezy">
        <Features />
      </section>
    </main>
  );
};

export default HomePage;
