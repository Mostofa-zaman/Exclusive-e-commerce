"use client";

import React from "react";
import Container from "../../common/Container";
import Heading from "../../common/Heading";
import newArrivalLeftImage from "../../../assets/playstaatio.png";
import womenCollection from "../../../assets/womenCollection.png";
import spekar from "../../../assets/spekar.png";
import perfume from "../../../assets/perfume.png"
import Image from "next/image";

const NewArrival = () => {
  return (
    <div className="pt-10 pb-40">
      <Container>
       <div className="flex justify-center">
         <Heading title={"Featured"} description={"New Arrival"} />
       </div>

        <div className="flex justify-between h-[600px] mt-[60px]">
         <div className="w-[58%] bg-black relative h-full">
            {/* Image */}
            <Image
              src={newArrivalLeftImage}
              alt={newArrivalLeftImage}
              className="w-full h-full rounded-sm"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end text-white p-6 pl-[32px] pb-[32px]">
              <h1 className="text-[24px] font-semibold font-inter">PlayStation 5</h1>
              <h3 className="text-[14px] font-normal font-poppins pt-[16px] pb-[16px] w-[250px]">
                Black and White version of the PS5 coming out on sale.
              </h3>
              <a href="#" className="underline text-[16px] font-medium font-poppins ">
                Shop Now
              </a>
            </div>
          </div>
           <div className="w-[40%]  bg-white flex flex-col items-start gap-y-[16px] ">
            <div className="w-full h-1/2 relative rounded-sm">
              <Image
                src={womenCollection}
                alt={womenCollection}
                className="w-full h-full object-cover rounded-sm"
              />
                <div className="absolute inset-0 flex flex-col justify-end text-white p-6 pl-[32px] pb-[32px]">
              <h1 className="text-[24px] font-semibold font-inter">Women’s Collections</h1>
              <h3 className="text-[14px] font-normal font-poppins pt-[16px] pb-[16px] w-[230px]">
              Featured woman collections that give you another vibe.
              </h3>
              <a href="#" className="underline text-[16px] font-medium font-poppins ">
                Shop Now
              </a>
            </div>
            </div>

            <div className="flex gap-x-[16px] h-[50%] w-full ">
              <div className="w-1/2 bg-black relative h-full">
                <Image
                  src={spekar}
                  alt={spekar}
                  className="w-[270px] h-[284px] object-cover p-4 rounded-sm"
                />
                  <div className="absolute inset-0 flex flex-col justify-end text-white p-6 pl-[32px] pb-[32px]">
              <h1 className="text-[24px] font-semibold font-inter">Speakers</h1>
              <h3 className="text-[14px] font-normal font-poppins pt-[8px] pb-[8px]">
             Amazon wireless speakers
              </h3>
              <a href="#" className="underline text-[16px] font-medium font-poppins ">
                Shop Now
              </a>
            </div>
              </div>
              <div className="w-1/2 bg-black relative h-full">
                <Image
                  src={perfume}
                  alt={perfume}
                  className="w-[270px] h-[284px] object-cover p-4 rounded-sm"
                />
                  <div className="absolute inset-0 flex flex-col justify-end text-white p-6 pl-[32px] pb-[32px]">
              <h1 className="text-[24px] font-semibold font-inter">Perfume</h1>
              <h3 className="text-[14px] font-normal font-poppins pt-[8px] pb-[8px] ">
               GUCCI INTENSE OUD EDP
              </h3>
              <a href="#" className="underline text-[16px] font-medium font-poppins ">
                Shop Now
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
