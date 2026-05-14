"use client";

import React, { useState, useEffect } from "react";
import ProductCart from "../common/ProductCard";
import { useGetAllProductQuery } from "../../features/api/ProductApi";

const ProductPageRight = ({ selectedCategory }) => {
  const [page, setPage] = useState(1);
  const limit = 9;

  const { data, isLoading } = useGetAllProductQuery();

  const allProducts = data?.products || [];

  const filtered =
    selectedCategory !== "All"
      ? allProducts.filter(
          (item) =>
            item.category?.toLowerCase() === selectedCategory?.toLowerCase()
        )
      : allProducts;

  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filtered.length / limit);

  const start = (page - 1) * limit;

  const current = filtered.slice(start, start + limit);

  return (
    <div>

      {/* GRID */}
      {isLoading ? (
        <p className="text-center py-10">Loading...</p>
      ) : (
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            gap-4 md:gap-6
          "
        >
          {current.map((item) => (
            <ProductCart key={item.id} itemData={item} />
          ))}
        </div>
      )}

      {/* PAGINATION */}
      <div className="flex justify-center mt-10 flex-wrap gap-2">

        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-2 border"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-2 border ${
              page === i + 1 ? "bg-black text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className="px-3 py-2 border"
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default ProductPageRight;