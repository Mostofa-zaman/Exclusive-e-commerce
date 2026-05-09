"use client";

import React from "react";
import Image from "next/image";
import Container from "../../common/Container";
import { category } from "../../../../../data/data";
import { allIcon } from "../../../helpers/IconProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import allImages from "../../../helpers/imageProvider";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="w-full">
      <Container>
        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-5 lg:gap-0">
          
          {/* Left Sidebar */}
          <div className="w-full lg:w-[2%] xl:w-[20%] border border-gray-200 lg:border-r-[1.5px] lg:border-t-0 lg:border-l-0 lg:border-b-0 rounded-lg lg:rounded-none overflow-hidden">
            <ul className="py-4 lg:pt-8 bg-white">
              {category?.map((items, id) => (
                <li
                  key={id}
                  className="flex justify-between items-center px-4 lg:pr-5 hover:bg-gray-100 transition-all duration-300"
                >
                  <span className="title14PXRegular py-3 lg:py-4 cursor-pointer hover:pl-3 transition-all duration-300 text-sm sm:text-base">
                    {items.category}
                  </span>

                  <span className="text-sm">{allIcon.righiangle}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Banner Slider */}
          <div className="w-full lg:w-[75%] xl:w-[80%] lg:pt-11 lg:pl-5 relative">
            <Slider {...settings} className="custom-slider">
              {Array(5)
                .fill(allImages.bannerimg)
                .map((imgSrc, idx) => (
                  <div key={idx}>
                    <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[473px] overflow-hidden rounded-lg">
                      <Image
                        src={imgSrc}
                        alt={`Banner ${idx + 1}`}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;