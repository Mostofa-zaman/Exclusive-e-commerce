"use client";
import React from "react";
import Button2 from "../common/Button2";

const Heading = ({ title, description }) => {
  return (
    <div className="flex flex-col items-start gap-y-6">
      <Button2 className="text-[#DB4444] font-poppins">{title}</Button2>
      <h1 className="text-[36px] font-bold">{description}</h1>
    </div>
  );
};

export default Heading;