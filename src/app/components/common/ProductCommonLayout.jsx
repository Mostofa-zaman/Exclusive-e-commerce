
"use client";

import React, { useRef } from "react";
import Heading from "../common/Heading";
import Timer from "../Common/Timer";
import Slider from "react-slick";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import ProductSkeleton from "../../helpers/ProductSkeleton";
import Container from "./Container.jsx";

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
  rows = 1,
}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: partialItemShow || 4,
    // slidesToScroll: partialItemShow - 1,
    rows: rows,
    autoplay: false,
  };

 const next = () => {
    sliderRef.current.slickNext(); // Next = Next slide
};

const prev = () => {
    sliderRef.current.slickPrev(); // Prev = Previous slide
};

  return (
    <div className="mt-[140px] mb-[60px] ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-end gap-x-[87px]">
            <Heading title={heading} description={description} />
            {timeStamp && <Timer timeofOffer={timeofOffer} />}
          </div>
          {isArrowsTrue && (
            <div className="flex items-center gap-x-4">
              <h1
                onClick={next}
                className="cursor-pointer w-[46px] h-[46px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-400 hover:text-white_FFFFFF transition"
              >
                <span className="text-xl">
                  <IoMdArrowBack />
                </span>
              </h1>
              <h1
                onClick={prev}
                className="cursor-pointer w-[46px] h-[46px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-400 hover:text-white_FFFFFF transition"
              >
                <span className="text-xl">
                  <IoArrowForward />
                </span>
              </h1>
            </div>
          )}
{/* 
          {viewButton && (
            <div className="bg-redDB4444  text-md font-popins font-medium text-white_FFFFFF px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
              View All
            </div>
          )} */}
        </div>
       <div className="slider-container pt-10">
      <Slider ref={sliderRef} {...settings}>
       {componentData?.map((item, index) => (
              <div
                key={index}
                className={partialItemShow > 4 ? "pr-8" : "pr-6"}
              >
                <ProductCard itemData = {item ? item : {}} />
              </div>
            ))}
      </Slider>
    </div>
    </Container>
      </div>
    
  );
};

export default ProductCommonLayout;