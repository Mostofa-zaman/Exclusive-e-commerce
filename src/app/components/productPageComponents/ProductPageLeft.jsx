"use client"

import React from "react";

const ProductPageLeft = ({ categoryData, isLoading }) => {
  return (
    <div className="w-[20%]  ">
      <h1 className="text-[20px] font-bold font-poppins pt-10 cursor-pointer">
        Shop by Category
      </h1>
      {isLoading ? (
        <ul>
          {/* Simulate 5 loading skeleton items */}
          {Array(10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between hover:bg-gray-200 transition-all"
              >
                <li className="flex animate-pulse bg-gray-300 rounded w-full h-6 my-3"></li>
              </div>
            ))}
        </ul>
      ) : (
        <ul className="pt-8">
          {categoryData?.map((items) => (
            <div className="flex justify-between hover:bg-gray-200 transition-all items-center">
              <li className=" py-4 cursor-pointer hover:px-5 transition-all text-md text-black font-normal py-3 cursor-pointer capitalize font-poppins ">
                {items}
              </li>
            </div>
          ))}
        </ul>
      )}
      <div className="">
        <h1 className="text-[20px] font-bold font-poppins pt-10 cursor-pointer">
          Shop by Color
        </h1>
        <ul className="pt-8">
          <li className="  cursor-pointer hover:px-5 transition-all text-md text-black font-normal py-3 capitalize font-poppins ">
            <div className="flex gap-3">
              <span className="inline-block w-5 h-5 rounded-full bg-black"></span>
              <p>Black</p>
            </div>
          </li>
          <li className="  cursor-pointer hover:px-5 transition-all text-md text-black font-normal py-3 capitalize font-poppins ">
            <div className="flex gap-3">
              <span className="inline-block w-5 h-5 rounded-full bg-red-500"></span>
              <p>Red</p>
            </div>
          </li>
          <li className="  cursor-pointer hover:px-5 transition-all text-md text-black font-normal py-3 capitalize font-poppins ">
            <div className="flex gap-3">
              <span className="inline-block w-5 h-5 rounded-full bg-[#00FF38]"></span>
              <p>Green</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPageLeft;
