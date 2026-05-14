"use client";

import React from "react";
import Container from "../../common/Container";
import Heading from "../../common/Heading";
import newArrivalLeftImage from "../../../assets/playstaatio.png";
import womenCollection from "../../../assets/womenCollection.png";
import spekar from "../../../assets/spekar.png";
import perfume from "../../../assets/perfume.png";
import Image from "next/image";

const NewArrival = () => {
  return (
    <section className="pt-10 md:pt-14 lg:pt-20 pb-16 md:pb-24 lg:pb-40 overflow-hidden">
      <Container>

        {/* HEADING */}
        <div className="flex justify-center">
          <Heading title={"Featured"} description={"New Arrival"} />
        </div>

        {/* MAIN GRID */}
        <div
          className="
            mt-10 md:mt-14 lg:mt-[60px]

            flex flex-col lg:flex-row
            gap-4 md:gap-5 lg:gap-6
          "
        >

          {/* LEFT BIG CARD */}
          <div
            className="
              w-full lg:w-[58%]
              bg-black
              relative
              overflow-hidden
              rounded-md
              min-h-[320px] sm:min-h-[420px] lg:min-h-[600px]
            "
          >
            <Image
              src={newArrivalLeftImage}
              alt="PlayStation 5"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end text-white p-5 sm:p-6 lg:p-8">
              <h1 className="text-xl sm:text-2xl font-semibold font-inter">
                PlayStation 5
              </h1>

              <h3
                className="
                  text-sm
                  font-normal
                  font-poppins
                  pt-3 pb-3
                  max-w-[250px]
                "
              >
                Black and White version of the PS5 coming out on sale.
              </h3>

              <a
                href="#"
                className="underline text-sm sm:text-base font-medium font-poppins"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              w-full lg:w-[40%]

              flex flex-col
              gap-4 md:gap-5 lg:gap-6
            "
          >

            {/* WOMEN COLLECTION */}
            <div
              className="
                relative
                overflow-hidden
                rounded-md

                min-h-[250px]
                sm:min-h-[320px]
              "
            >
              <Image
                src={womenCollection}
                alt="Women Collection"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex flex-col justify-end text-white p-5 sm:p-6 lg:p-8">
                <h1 className="text-xl sm:text-2xl font-semibold font-inter">
                  Women’s Collections
                </h1>

                <h3
                  className="
                    text-sm
                    font-normal
                    font-poppins
                    pt-3 pb-3
                    max-w-[230px]
                  "
                >
                  Featured woman collections that give you another vibe.
                </h3>

                <a
                  href="#"
                  className="underline text-sm sm:text-base font-medium font-poppins"
                >
                  Shop Now
                </a>
              </div>
            </div>

            {/* BOTTOM 2 CARDS */}
            <div className="flex gap-4 md:gap-5 lg:gap-6">

              {/* SPEAKER */}
              <div
                className="
                  w-1/2
                  bg-black
                  relative
                  overflow-hidden
                  rounded-md

                  min-h-[180px]
                  sm:min-h-[220px]
                  md:min-h-[260px]
                "
              >
                <Image
                  src={spekar}
                  alt="Speaker"
                  className="w-full h-full object-cover p-3 md:p-4"
                />

                <div className="absolute inset-0 flex flex-col justify-end text-white p-4 md:p-5 lg:p-6">
                  <h1 className="text-lg sm:text-xl font-semibold font-inter">
                    Speakers
                  </h1>

                  <h3 className="text-xs sm:text-sm font-normal font-poppins pt-2 pb-2">
                    Amazon wireless speakers
                  </h3>

                  <a
                    href="#"
                    className="underline text-sm font-medium font-poppins"
                  >
                    Shop Now
                  </a>
                </div>
              </div>

              {/* PERFUME */}
              <div
                className="
                  w-1/2
                  bg-black
                  relative
                  overflow-hidden
                  rounded-md

                  min-h-[180px]
                  sm:min-h-[220px]
                  md:min-h-[260px]
                "
              >
                <Image
                  src={perfume}
                  alt="Perfume"
                  className="w-full h-full object-cover p-3 md:p-4"
                />

                <div className="absolute inset-0 flex flex-col justify-end text-white p-4 md:p-5 lg:p-6">
                  <h1 className="text-lg sm:text-xl font-semibold font-inter">
                    Perfume
                  </h1>

                  <h3 className="text-xs sm:text-sm font-normal font-poppins pt-2 pb-2">
                    GUCCI INTENSE OUD EDP
                  </h3>

                  <a
                    href="#"
                    className="underline text-sm font-medium font-poppins"
                  >
                    Shop Now
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewArrival;