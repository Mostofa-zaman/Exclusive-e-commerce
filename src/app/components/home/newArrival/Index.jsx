"use client";

import React from "react";
import Container from "../../common/Container";
import Heading from "../../common/Heading";
import newArrivalLeftImage from "../../../assets/images/playstaatio.png";

const NewArrival = () => {
  return (
    <div>
      <Container>
        <Heading title={"Featured"} description={"New Arrival"} />
        <div className="flex justify-between h-[600px] mt-[60px]">
          <div className="w-[58%] bg-black  h-full">
            <img
              src={newArrivalLeftImage}
              alt={newArrivalLeftImage}
              className="w-full h-full o rounded-sm"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
