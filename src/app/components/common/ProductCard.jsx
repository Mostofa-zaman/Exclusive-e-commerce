import React from "react";
import allImages from "../../helpers/imageProvider";
import { allIcon } from "../../helpers/IconProvider";
import useCalculateDiscount from "@/app/coustomHooks/useCalculateDiscount";
import RatingStars from "./RatingStars";
import Link from "next/link";

const ProductCard = ({ itemData }) => {
  const { gammingImage } = allImages;
  const { eye, navIcon } = allIcon;

  return (
    <div className="group w-full min-w-0 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-2 md:p-3">
      
      {/* IMAGE SECTION */}
      <div className="bg-[#F5F5F5] overflow-hidden rounded-[4px] py-10 md:py-[75px] px-4 flex justify-center relative">
        
        {/* Discount Badge */}
        {itemData?.discountPercentage && (
          <div className="px-2 md:px-3 py-1 bg-[#DB4444] text-white absolute rounded-[4px] top-3 left-3 text-xs md:text-sm">
            -{itemData.discountPercentage}%
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex h-fit flex-col absolute right-2 top-2 md:right-[17px] md:top-[17px] gap-y-2">
          <button className="bg-primary p-2 md:p-[10px] inline-flex rounded-full cursor-pointer text-base md:text-xl">
            {navIcon[0].icon}
          </button>

          <button className="bg-primary p-2 md:p-[10px] inline-flex rounded-full cursor-pointer text-base md:text-xl">
            {eye}
          </button>
        </div>

        <Link href={`/product/${itemData?.id}`}>
          <div className="relative cursor-pointer w-full">
            <figure className="flex justify-center">
              <img
                src={itemData?.thumbnail || gammingImage}
                alt="product"
                className="w-full max-w-[140px] md:max-w-[190px] h-auto max-h-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </figure>

            <button className="absolute -right-15 -bottom-19 w-[300px] flex justify-center items-center py-2 md:py-[10px] bg-black text-white text-sm md:text-base title16PXMedium opacity-0 translate-y-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
              Add To Cart
            </button>
          </div>
        </Link>
      </div>

      {/* PRODUCT INFO */}
      <div className="mt-4 space-y-2">
        
        <div>
          <p className="title16PXMedium text-text2 text-sm md:text-base line-clamp-2 min-h-[40px]">
            {itemData?.title || "HAVIT HV-G92 Gamepad"}
          </p>

          <p className="flex items-center flex-wrap gap-x-2 gap-y-1">
            <span className="text-secondary2 title16PXMedium text-sm md:text-base">
              $
              {useCalculateDiscount(
                itemData?.price,
                itemData?.discountPercentage
              ).toFixed(2)}
            </span>

            <del className="text-[#00000071] title16PXMedium text-sm md:text-base">
              ${itemData?.price?.toFixed(2) || "160.00"}
            </del>
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-x-2 md:gap-x-4 flex-wrap">
          <RatingStars rating={itemData?.rating} />

          <h3 className="title14PXSemiBold text-[#00000071] text-xs md:text-sm">
            ({itemData?.reviews?.length || 0})
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;