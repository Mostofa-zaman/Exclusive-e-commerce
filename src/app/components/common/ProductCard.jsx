"use client";

import React from "react";
import allImages from "../../helpers/imageProvider";
import { allIcon } from "../../helpers/IconProvider";
import useCalculateDiscount from "@/app/coustomHooks/useCalculateDiscount";
import RatingStars from "./RatingStars";
import Link from "next/link";

const ProductCard = ({ itemData }) => {
  const { gammingImage } = allImages;
  const { eye, navIcon } = allIcon;

  // ✅ Safe data handling
  const price = itemData?.price || 0;
  const discount = itemData?.discountPercentage || 0;

  // ✅ Hook properly used
  const discountedPrice = useCalculateDiscount(price, discount);

  // ✅ Add to cart handler
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // 👉 ekhane tumi redux / context / api call dite parba
  };

  return (
    <div className="group w-full min-w-0 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-2">
      
      {/* Image Section */}
      <div className="bg-[#F5F5F5] overflow-hidden rounded-[4px] py-[75px] flex justify-center relative">
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="px-3 py-1 bg-[#DB4444] text-white absolute rounded-[4px] top-3 left-3">
            -{discount}%
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col absolute right-[17px] gap-y-2 top-[17px]">
          <button className="bg-primary p-[10px] rounded-full cursor-pointer text-xl">
            {navIcon[0].icon}
          </button>

          <button className="bg-primary p-[10px] rounded-full cursor-pointer text-xl">
            {eye}
          </button>
        </div>

        {/* Product Image + Link */}
        <div className="relative w-full flex justify-center">
          <Link href={`/product/${itemData?.id}`}>
            <figure>
              <img
                src={itemData?.thumbnail || gammingImage}
                alt={itemData?.title || "product"}
                className="max-w-[190px] max-h-[180px] object-cover"
              />
            </figure>
          </Link>

          {/* ✅ Button outside Link */}
          <button
            onClick={() => handleAddToCart(itemData)}
            className="absolute w-full cursor-pointer duration-300 ease-in-out -bottom-[18%] group-hover:bottom-0 py-[10px] bg-black text-white title16PXMedium"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <div>
          <p className="title16PXMedium text-text2 truncate">
            {itemData?.title || "HAVIT HV-G92 Gamepad"}
          </p>

          <p>
            <span className="text-secondary2 title16PXMedium">
              ${discountedPrice?.toFixed(2) || "0.00"}
            </span>

            <del className="text-[#00000071] title16PXMedium ml-4">
              ${price.toFixed(2)}
            </del>
          </p>
        </div>

        {/* Rating */}
        <div className="flex gap-x-4">
          <RatingStars rating={itemData?.rating || 0} />
          <h3 className="title14PXSemiBold text-[#00000071]">
            ({itemData?.reviews?.length || 0})
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;