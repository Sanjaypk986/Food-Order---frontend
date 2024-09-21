import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

// for animation scroll hook
const ScrollAnimation = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);
  return null;
};

export default ScrollAnimation;
