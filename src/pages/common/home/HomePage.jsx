import React, { useEffect } from "react";
import Banner from "./Banner";
import FoodItems from "./FoodItems";
import TopRestaurants from "./TopRestaurants";
import Features from "./Features";
import ScrollAnimation from "../../../hooks/ScrollAnimation";

const HomePage = () => {
  // animation while scroll
  ScrollAnimation()
  return (
    <main className="container mx-auto px-1">
      <section >
        <Banner />
      </section>
      <section className="my-10" data-aos="fade-down">
        <FoodItems />
      </section>
      <section data-aos="fade-up">
        <TopRestaurants />
      </section>
      <section className="my-10" id="why-spicezy" data-aos="fade-down">
        <Features />
      </section>
    </main>
  );
};

export default HomePage;
