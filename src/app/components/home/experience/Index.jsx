"use client";

import React from "react";
import exprerienceImag from "../../../assets/experience.png";
import Timer from "../../common/Timer";
import Image from "next/image";
import Container from "../../common/Container";

const Experience = () => {
  return (
    <section className="w-full">
      <Container>
        <div
          className="
            flex flex-col lg:flex-row
            items-center
            bg-black
            rounded-xl
            overflow-hidden
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              w-full lg:w-1/2
              px-5 sm:px-8 md:px-10 lg:px-12
              py-10 md:py-14 lg:py-16
            "
          >
            <h3
              className="
                text-[#00FF66]
                text-sm md:text-base
                font-semibold font-popins
              "
            >
              Categories
            </h3>

            <h2
              className="
                text-white
                font-inter font-semibold
                leading-snug md:leading-[60px]

                text-2xl sm:text-3xl md:text-4xl lg:text-[48px]

                mt-4 md:mt-6 lg:mt-8
              "
            >
              Enhance Your Music Experience
            </h2>

            {/* TIMER */}
            <div className="mt-6 md:mt-8">
              <Timer isCircle={true} />
            </div>

            {/* BUTTON */}
            <div
              className="
                bg-[#00FF66]
                inline-block
                mt-6 md:mt-8 lg:mt-10

                text-sm md:text-base
                font-popins font-medium
                text-white

                px-6 md:px-10 lg:px-[48px]
                py-3 md:py-4

                rounded
                cursor-pointer
                hover:opacity-80
                transition
              "
            >
              Buy Now
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              w-full lg:w-1/2
              flex justify-center items-center
              bg-black
              p-4 md:p-6 lg:p-10
            "
          >
            <Image
              src={exprerienceImag}
              alt="Experience Music"
              className="
                w-full
                max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]
                h-auto
                object-contain
              "
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;