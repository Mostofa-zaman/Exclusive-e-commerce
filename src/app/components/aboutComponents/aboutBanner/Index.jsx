
"use client";

import React from "react";
import Image from "next/image";
import BreadCrumb from "../../common/BreadCrumb";
import Container from "../../common/Container";
import allImages from "@/app/helpers/imageProvider";

const AboutBanner = () => {
  return (
    <section className="mb-20 lg:mb-[140px]">
      <Container>
        <BreadCrumb />

        <div className="mt-10 flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-20">
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="mb-8 font-inter text-4xl font-semibold leading-tight md:text-5xl lg:text-[54px]">
              Our Story
            </h1>

            <div className="space-y-6 font-poppins text-base leading-8 text-gray-600">
              <p>
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by a wide range of tailored marketing, data, and
                service solutions, Exclusive has over 10,500 sellers and
                300 brands, serving more than 3 million customers across
                the region.
              </p>

              <p>
                Exclusive offers more than 1 million products and continues
                to grow rapidly. The platform provides a diverse assortment
                of products across multiple categories, delivering quality,
                convenience, and value to customers every day.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-end">
              <Image
                src={allImages.aboutimg}
                alt="About Exclusive"
                priority
                className="h-auto w-full max-w-[700px] object-cover"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutBanner;

