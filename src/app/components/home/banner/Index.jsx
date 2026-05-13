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
  var settings = {
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
    <div className="pb-8 md:pb-0">
      <Container>
        <div className="flex flex-col md:flex-row items-stretch">
          {/* left part (Sidebar) */}
          <div className="w-full md:w-[25%] lg:w-[20%] md:border-r-[1.5px] border-b-[1.5px] md:border-b-0 border-[#00000030] md:h-[517px]">
            <ul className="pt-4 md:pt-8 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar">
              {category?.map((items, id) => (
                <li
                  key={id}
                  className="flex flex-shrink-0 justify-between items-center pr-5 hover:bg-gray-100 transition-all group"
                >
                  <span className="title14PXRegular py-3 md:py-4 px-4 md:px-0 cursor-pointer group-hover:md:pl-5 transition-all whitespace-nowrap">
                    {items.category}
                  </span>
                  <span className="hidden md:block">{allIcon.righiangle}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* right part (Slider) */}
          <div className="w-full md:w-[75%] lg:w-[80%] pt-6 md:pt-11 md:pl-5 relative">
            <Slider {...settings} className="custom-slider">
              {Array(5)
                .fill(allImages.bannerimg)
                .map((imgSrc, idx) => (
                  <div key={idx} className="outline-none">
                    <div className="relative h-[200px] sm:h-[300px] md:h-[473px] w-full">
                      <Image
                        src={imgSrc}
                        alt={`Banner ${idx + 1}`}
                        fill
                        className="rounded-md md:rounded-none"
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