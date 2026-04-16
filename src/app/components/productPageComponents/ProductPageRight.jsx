"use client"

import React from "react";
import ProductCart from "../common/ProductCard"
import { useGetAllProductQuery } from "../../features/api/ProductApi";
const ProductPageRight = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  return (
    <div className="w-[78%]">
      <div className="flex items-center justify-end gap-x-2">
        <h2 className="title16PXRegular">Show : </h2>
        <select name="" id="" className="px-3 bg-slate-200 rounded-sm py-1">
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
      </div>
      {/* product part */}
      <div className="flex flex-wrap justify-between gap-y-10  ">
        {data?.products?.slice(0, 9).map((item) => (
          <div className="w-[30%]">
            <ProductCart itemData={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPageRight;
