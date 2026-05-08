"use client";

import React from "react";

const ProductPageLeft = ({
  categoryData,
  isLoading,
  setSelectedCategory,
}) => {
  return (
    <div className="w-[20%]">
      <h1 className="text-[20px] font-bold font-poppins pt-10">
        Shop by Category
      </h1>

      {isLoading ? (
        <ul>
          {Array(8).fill("").map((_, index) => (
            <li
              key={index}
              className="animate-pulse bg-gray-300 h-6 my-3 rounded"
            ></li>
          ))}
        </ul>
      ) : (
        <ul className="pt-8">
          <li
            onClick={() => setSelectedCategory("All")}
            className="py-3 cursor-pointer font-poppins hover:bg-gray-200"
          >
            All
          </li>

          {categoryData?.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedCategory(item)}
              className="py-3 cursor-pointer capitalize font-poppins hover:bg-gray-200"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductPageLeft;