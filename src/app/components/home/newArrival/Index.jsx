"use client";

import React from "react";
import Container from "../../common/Container";
import Heading from "../../common/Heading";
import newArrivalLeftImage from "../../../assets/playstaatio.png";
import Image from "next/image";

const NewArrival = () => {
  return (
    <div>
      <Container>
        <Heading title={"Featured"} description={"New Arrival"} />

        <div className="flex justify-between h-[600px] mt-[60px]">
          <div className="w-[58%] bg-black  h-full">
            <Image
              src={newArrivalLeftImage}
              alt="New Arrival"
              fill
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
