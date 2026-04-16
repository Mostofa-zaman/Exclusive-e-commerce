"use client";
import React from "react";
import BreadCrumb from "../../common/BreadCrumb";
import allImages from "@/app/helpers/imageProvider";
import Image from "next/image";
import Container from "../../common/Container";

const AboutBanner = () => {
  return (
    <div className="mb-[140px]">
      <Container>
        <BreadCrumb />

        <div className="flex items-center justify-between">
          <div className="w-[40%]">
            <h1 className=" text-[54px] font-semibold font-inter mb-10">Our Story</h1>

            <p className="font-popins text-[16px] font-normal ">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
              <span className="mt-10 block">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </span>
            </p>
          </div>

          <div className="right-[-11%]">
            <Image src={allImages.aboutimg} alt="" />
          </div>
         
        </div>
     <div className="mt-20 flex justify-center">

</div>
      </Container>
    </div>
  );
};

export default AboutBanner;
