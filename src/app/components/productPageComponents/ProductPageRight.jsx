"use client"

import React, { useState } from "react";
import ProductCart from "../common/ProductCard";
import { useGetAllProductQuery } from "../../features/api/ProductApi";

const ProductPageRight = () => {
  const [page, setPage] = useState(1);
  const limit = 9;

  const { data, error, isLoading } = useGetAllProductQuery();

  const allProducts = data?.products || [];

  const totalPages = Math.ceil(allProducts.length / limit);

  const startIndex = (page - 1) * limit;
  const currentProducts = allProducts.slice(
    startIndex,
    startIndex + limit
  );

  return (
    <div className="w-[78%]">
      {/* Top controls */}
      <div className="flex items-center justify-end gap-x-2">
        <h2 className="title16PXRegular">Show :</h2>
        <select
          className="px-3 bg-slate-200 rounded-sm py-1"
          onChange={(e) => setPage(1)}
        >
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
      </div>

      {/* Loading state */}
      {isLoading && (
        <p className="text-center mt-10">Loading products...</p>
      )}

      {/* Product grid */}
      <div className="flex flex-wrap justify-between gap-y-10 mt-6">
        {currentProducts?.map((item) => (
          <div key={item.id} className="w-[30%]">
            <ProductCart itemData={item} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10">
        <ul className="flex gap-2 items-center">

          {/* Previous */}
          <li>
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Previous
            </button>
          </li>

          {/* Page numbers */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <button
                onClick={() => setPage(index + 1)}
                className={`px-4 py-2 border ${
                  page === index + 1 ? "bg-black text-white" : ""
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}

          {/* Next */}
          <li>
            <button
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={page === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default ProductPageRight;