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
    <div className="pb-20">
      <Container>
        <div className="flex  items-stretch   ">
          {/* left part */}
          <div className="w-[20%] h-[517px] border-r-[1.5px]  border-[#0000007b] ">
            <ul className="pt-8">
              {category?.map((items) => (
                <div className="flex justify-between hover:bg-gray-200 transition-all items-center pr-5">
                  <li className="title14PXRegular py-4 cursor-pointer hover:px-5 transition-all">
                    {items.category}
                  </li>
                  <span> {allIcon.righiangle} </span>
                </div>
              ))}
            </ul>
          </div>
          {/* right part */}
       <div className="w-[80%] pt-11 pl-5 relative">
            <Slider {...settings} className="custom-slider">
              {Array(5)
                .fill(allImages.bannerimg)
                .map((imgSrc, idx) => (
                  <div key={idx}>
                    <Image
                      src={imgSrc}
                      alt={`Banner ${idx + 1}`}
                      height={450}
                      className="w-full h-[473px] "
                    />
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
