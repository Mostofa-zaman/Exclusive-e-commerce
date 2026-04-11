"use client";

import React, { useEffect, useState } from "react";
import exprerienceImag from "../../../assets/experience.png";
import Timer from "../../common/Timer";
import Image from "next/image";
import Container from "../../common/Container";

const Experience = () => {
  return (
    <div className="my-[120px] overflow-hidden ">
      <Container>
        <div className="flex ">
          <div className="w-1/2 py-[69px] px-10 bg-black ">
            <h3 className="text-[#00FF66] text-[16px] font-semibold font-popins">
              Categories
            </h3>
            <h2 className="text-[48px] font-inter font-semibold text-white leading-[60px] mt-[32px]">
              Enhance Your Music Experience
            </h2>

            <div className="">
              <Timer isCircle={true} />
            </div>
            <div className="bg-[#00FF66] inline-block mt-[40px]  text-md font-popins font-medium text-white px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
              Buy Now
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center imagShadow bg-black ">
            <Image src={exprerienceImag} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
