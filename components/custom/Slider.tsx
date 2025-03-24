"use client";
import { leftIcon, rightIcon } from "@/constants/Images";
import Image from "next/image";
import { ReactNode, useEffect, useState, Children } from "react";

interface CustomSliderProps {
  items: { img: string; text: string }[];
  children: ReactNode;
}

export const CustomSlider = ({ children }: CustomSliderProps) => {
  const slidesArray = Children.toArray(children); // Ensures children is an array
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const totalSlides = slidesArray.length;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex >= totalSlides) {
      setCurrentIndex(totalSlides + 1);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(-1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (currentIndex === totalSlides + 1) {
      setIsAnimating(false);
      setCurrentIndex(1);
    }
    if (currentIndex === -1) {
      setIsAnimating(false);
      setCurrentIndex(totalSlides);
    }
    setTimeout(() => setIsAnimating(true), 50);
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`flex ${
          isAnimating ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Clone last slide for smooth looping */}
        <div className="flex-shrink-0 w-full">
          {slidesArray[totalSlides - 1]}
        </div>

        {/* Actual slides */}
        {slidesArray.map((child, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {child}
          </div>
        ))}

        {/* Clone first slide for smooth looping */}
        <div className="flex-shrink-0 w-full">{slidesArray[0]}</div>
      </div>

      <Image
        onClick={nextSlide}
        src={rightIcon}
        alt="Next"
        width={25}
        height={20}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
      />

      <Image
        onClick={prevSlide}
        src={leftIcon}
        alt="Previous"
        width={25}
        height={20}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
      />
    </div>
  );
};
