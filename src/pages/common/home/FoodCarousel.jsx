import React from 'react';
import Slider from 'react-slick';

const FoodCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,   
    autoplaySpeed: 3000, 
    arrows: false,    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
      <Slider {...settings}>
        <div>
          <img
            src="https://img.freepik.com/free-photo/people-ramadan-celebration_23-2151344683.jpg?t=st=1725017891~exp=1725021491~hmac=72eef3d530d20c7a1a61840ec50d1ff0571f3892e202058eb73eb3119eb4bac7&w=740"
            alt="Food 1"
            className="w-full object-cover max-h-96 rounded-lg shadow-md"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/fresh-tasty-burger-table_144627-39486.jpg?w=740&t=st=1725017891~exp=1725021491~hmac=72eef3d530d20c7a1a61840ec50d1ff0571f3892e202058eb73eb3119eb4bac7"
            alt="Food 2"
            className="w-full object-cover max-h-96 rounded-lg shadow-md"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/italian-pasta-spaghetti-with-seafood_2829-20241.jpg?w=740&t=st=1725017891~exp=1725021491~hmac=72eef3d530d20c7a1a61840ec50d1ff0571f3892e202058eb73eb3119eb4bac7"
            alt="Food 3"
            className="w-full object-cover max-h-96 rounded-lg shadow-md"
          />
        </div>
      </Slider>
    </div>
  );
};

export default FoodCarousel;
