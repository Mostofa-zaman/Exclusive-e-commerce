"use client";

import React from "react";

const ProductPageLeft = ({
  categoryData,
  isLoading,
  setSelectedCategory,
}) => {
  return (
    <div className="bg-white border rounded-md p-4">

      {/* TITLE */}
      <h1 className="text-lg font-semibold font-poppins mb-4">
        Categories
      </h1>

      {/* LIST */}
      {isLoading ? (
        <ul className="space-y-2">
          {Array(8).fill("").map((_, i) => (
            <li
              key={i}
              className="h-5 bg-gray-200 animate-pulse rounded"
            />
          ))}
        </ul>
      ) : (
        <ul className="space-y-1 max-h-[70vh] overflow-y-auto pr-2">

          <li
            onClick={() => setSelectedCategory("All")}
            className="cursor-pointer px-2 py-2 rounded hover:bg-gray-100 transition"
          >
            All Products
          </li>

          {categoryData?.map((item, i) => (
            <li
              key={i}
              onClick={() => setSelectedCategory(item)}
              className="cursor-pointer px-2 py-2 rounded hover:bg-gray-100 capitalize transition"
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