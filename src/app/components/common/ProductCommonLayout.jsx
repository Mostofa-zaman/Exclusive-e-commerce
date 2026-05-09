"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";

import Heading from "../common/Heading";
import Timer from "../common/Timer";
import ProductSkeleton from "../../helpers/ProductSkeleton";
import Container from "./Container.jsx";

import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

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

  const Slider = dynamic(() => import("react-slick"), { ssr: false });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: partialItemShow,
    slidesToScroll: 1,
    rows: rows,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(partialItemShow, 4),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  return (
    <section className="mt-16 sm:mt-20 lg:mt-[140px] mb-10 sm:mb-14 lg:mb-[60px]">
      <Container>

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-[87px]">
            <Heading title={heading} description={description} />
            {timeStamp && <Timer timeofOffer={timeofOffer} />}
          </div>

          {/* ARROWS + BUTTON */}
          <div className="flex items-center gap-3 sm:gap-4">

            {isArrowsTrue && (
              <>
                <button
                  onClick={prev}
                  className="w-10 sm:w-[46px] h-10 sm:h-[46px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-400 hover:text-white transition"
                >
                  <IoMdArrowBack />
                </button>

                <button
                  onClick={next}
                  className="w-10 sm:w-[46px] h-10 sm:h-[46px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-400 hover:text-white transition"
                >
                  <IoArrowForward />
                </button>
              </>
            )}

            {viewButton && (
              <button className="bg-[#DB4444] text-white text-sm sm:text-base font-medium px-6 sm:px-[48px] py-2 sm:py-4 rounded hover:opacity-80 transition">
                View All
              </button>
            )}
          </div>
        </div>

        {/* SLIDER */}
        <div className="slider-container pt-6 sm:pt-8 lg:pt-10">
          <Slider ref={sliderRef} {...settings}>
            {isLoading
              ? [...new Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3"
                  >
                    <ProductSkeleton />
                  </div>
                ))
              : componentData?.map((item, index) => (
                  <div
                    key={item?.id || index}
                    className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3"
                  >
                    <ProductCard itemData={item || {}} />
                  </div>
                ))}
          </Slider>
        </div>

      </Container>
    </section>
  );
};

export default ProductCommonLayout;