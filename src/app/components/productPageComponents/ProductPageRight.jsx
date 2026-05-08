"use client";

import React, { useState, useEffect } from "react";
import ProductCart from "../common/ProductCard";
import { useGetAllProductQuery } from "../../features/api/ProductApi";

const ProductPageRight = ({ selectedCategory }) => {
  const [page, setPage] = useState(1);
  const limit = 9;

  const { data, isLoading } = useGetAllProductQuery();

  const allProducts = data?.products || [];

  // ✅ FILTER
  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? allProducts.filter(
          (item) =>
            item.category?.toLowerCase() ===
            selectedCategory?.toLowerCase()
        )
      : allProducts;

  // reset page on category change
  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / limit);

  const startIndex = (page - 1) * limit;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + limit
  );

  return (
    <div className="w-[78%]">
      {/* PRODUCTS */}
      {isLoading ? (
        <p className="text-center mt-10">Loading products...</p>
      ) : (
        <div className="flex flex-wrap justify-between gap-y-10 mt-6">
          {currentProducts?.map((item) => (
            <div key={item.id} className="w-[30%]">
              <ProductCart itemData={item} />
            </div>
          ))}
        </div>
      )}

      {/* PAGINATION */}
      <div className="flex justify-center mt-10">
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-4 py-2 border"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 border ${
                page === i + 1 ? "bg-black text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setPage((p) => Math.min(p + 1, totalPages))
            }
            className="px-4 py-2 border"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPageRight;