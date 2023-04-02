import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Hero() {
  const slides = [
    {
      url: "../src/img/healthcare.webp",
    },
    {
      url: "../src/img/health02.jpeg",
    },
    {
      url: "../src/img/health03.webp",
    },

    {
      url: "../src/img/hospital.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div
      className="flex flex-col h-screen items-center justify-center gap-8 
    bg-center bg-cover bg-blend-overlay  bg-black/30 duration-1000 ease-in-out relative delay-400"
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    >
      <div className="flex w-full justify-between absolute">
        {/* Left Arrow */}
        <div className="hidden sm:inline-block w-1/9  left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden sm:inline-block w-1/9 top-[70%]  right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>

      <h4 className="text-xl text-white">in search of</h4>
      <h1 className="text-white text-5xl uppercase font-bold">Health care</h1>
      <button className="bg-blue-400 hover:bg-blue-400/70 hover:text-white px-6 py-3 uppercase rounded-2xl text-white">
        contact us
      </button>
      <div className="flex bottom-8 justify-center py-2 absolute items-end">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer text-white"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
