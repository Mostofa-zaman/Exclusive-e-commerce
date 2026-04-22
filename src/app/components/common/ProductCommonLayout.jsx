
"use client";

import React, { useRef } from "react";
import Heading from "../common/Heading";
import Timer from "../common/Timer";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import ProductSkeleton from "../../helpers/ProductSkeleton";
import Container from "./Container.jsx";
import dynamic from "next/dynamic";

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
    infinite: true,
    speed: 500,
    slidesToShow: partialItemShow || 4,
    slidesToScroll: partialItemShow - 1,
    rows: rows,
    autoplay: false,
     arrows: false, 
  };

const next = () => {
  sliderRef.current.slickNext();
};

const prev = () => {
  sliderRef.current.slickPrev();
};
const Slider = dynamic(() => import("react-slick"), { ssr: false });

  return (
    <div className="mt-[140px] mb-[60px] ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex  gap-x-[87px]  gap-y-3">
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

          {viewButton && (
            <div className="bg-[#DB4444]  text-md font-popins font-medium text-white px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
              View All
            </div>
          )}
        </div>
       <div className="slider-container pt-10">
      <Slider ref={sliderRef} {...settings}>
           {isLoading ?
           [... new Array (6)]?.map((_, index) => (
              <div
                key={index}
                className={partialItemShow > 4 ? "pr-8" : "pr-6"}
              >
               <ProductSkeleton/>
              </div>
            )) :
           componentData?.map((item, index) => (
              <div
                  className={`${partialItemShow > 4 ? "pr-8" : "pr-6"} py-4 px-3` } 
                key={item.key}
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