"use client";

import React from "react";

const ProductPageLeft = ({
  categoryData,
  isLoading,
  setSelectedCategory,
}) => {
  return (
    <div
      className="
        w-full
        md:w-[35%]
        lg:w-[20%]
      "
    >
      {/* TITLE */}
      <h1 className="text-lg md:text-xl font-bold font-poppins pt-6 md:pt-10">
        Shop by Category
      </h1>

      {/* LOADING */}
      {isLoading ? (
        <ul className="pt-6 md:pt-8 space-y-3">
          {Array(8)
            .fill("")
            .map((_, index) => (
              <li
                key={index}
                className="animate-pulse bg-gray-300 h-6 rounded"
              ></li>
            ))}
        </ul>
      ) : (
        /* CATEGORY LIST */
        <ul className="pt-6 md:pt-8 space-y-1">

          {/* ALL */}
          <li
            onClick={() => setSelectedCategory("All")}
            className="
              py-2 md:py-3
              px-2
              cursor-pointer
              font-poppins
              hover:bg-gray-200
              rounded
              transition
            "
          >
            All
          </li>

          {/* DYNAMIC CATEGORIES */}
          {categoryData?.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedCategory(item)}
              className="
                py-2 md:py-3
                px-2
                cursor-pointer
                capitalize
                font-poppins
                hover:bg-gray-200
                rounded
                transition
              "
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