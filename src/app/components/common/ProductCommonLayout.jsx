"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

// Local imports
import Heading from "../common/Heading";
import Timer from "../common/Timer";
import ProductSkeleton from "../../helpers/ProductSkeleton";
import Container from "./Container.jsx";

// Dynamic import for react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { 
  ssr: false,
  loading: () => <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"><ProductSkeleton /></div>
});

const ProductCommonLayout = ({
  ProductCard = () => <ProductSkeleton />,
  timeStamp = false,
  timeofOffer = 0,
  isArrowsTrue = false,
  heading = "today's",
  description = "flash sale",
  partialItemShow = 4,
  componentData = [],
  isLoading,
  viewButton = false,
  rows = 1,
}) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: componentData?.length > partialItemShow,
    speed: 500,
    slidesToShow: partialItemShow,
    slidesToScroll: 1,
    rows: rows,
    autoplay: false,
    arrows: false,
    swipeToSlide: true, // Better touch experience
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(partialItemShow, 4),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="mt-12 md:mt-24 lg:mt-[140px] mb-10 md:mb-[60px]">
      <Container>
        {/* HEADER SECTION */}
        <div className="flex flex-col gap-y-6 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 lg:gap-x-[87px]">
            <Heading title={heading} description={description} />
            {timeStamp && (
              <div className="pb-1">
                <Timer timeofOffer={timeofOffer} />
              </div>
            )}
          </div>

          {/* ACTIONS (Arrows & View All) */}
          <div className="flex items-center justify-between md:justify-end gap-x-4">
            {isArrowsTrue && (
              <div className="flex items-center gap-x-2 md:gap-x-4">
                <button
                  aria-label="Previous Slide"
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="w-10 h-10 md:w-[46px] md:h-[46px] bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 active:scale-90"
                >
                  <IoMdArrowBack className="text-xl" />
                </button>
                <button
                  aria-label="Next Slide"
                  onClick={() => sliderRef.current?.slickNext()}
                  className="w-10 h-10 md:w-[46px] md:h-[46px] bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 active:scale-90"
                >
                  <IoArrowForward className="text-xl" />
                </button>
              </div>
            )}

            {viewButton && (
              <button className="bg-[#DB4444] text-sm md:text-base font-medium text-white px-6 md:px-[48px] py-3 md:py-4 rounded hover:bg-[#e05a5a] transition-colors duration-300">
                View All
              </button>
            )}
          </div>
        </div>

        {/* SLIDER SECTION */}
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {isLoading
              ? [...Array(6)].map((_, index) => (
                  <div key={`skeleton-${index}`} className="px-2 md:px-4">
                    <ProductSkeleton />
                  </div>
                ))
              : componentData?.map((item) => (
                  <div 
                    key={item.id || item.key} 
                    className="px-2 md:px-4 py-2"
                  >
                    <ProductCard itemData={item} />
                  </div>
                ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default ProductCommonLayout;