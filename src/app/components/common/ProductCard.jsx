import React from "react";
import allImages from "../../helpers/imageProvider";
import { allIcon } from "../../helpers/IconProvider";
import useCalculateDiscount from "@/app/coustomHooks/useCalculateDiscount";
import RatingStars from "./RatingStars";
import Link from "next/link";
const ProductCard = ({ itemData }) => {
  // for images & icons
  // console.log("items", itemData);
  const { gammingImage } = allImages;
  const { eye, navIcon, star } = allIcon;

  return (
    <div className="group w-full min-w-0 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-2">
      <div className="bg-[#F5F5F5] overflow-hidden rounded-[4px] py-[75px] flex justify-center relative">
        {/* Discount Badge */}
        {itemData.discountPercentage && (
          <div className="px-3 py-1 bg-[#DB4444] text-white absolute rounded-[4px] top-3 left-3">
            -{itemData ? itemData.discountPercentage : 41}%
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex h-fit flex-col absolute right-[17px] gap-y-2 top-[17px]">
          <button className="bg-primary p-[10px] inline-block rounded-full cursor-pointer text-xl">
            {navIcon[0].icon}
          </button>

          <button className="bg-primary p-[10px] inline-block rounded-full cursor-pointer text-xl">
            {eye}
          </button>
        </div>
        <Link href={`/product/${itemData?.id}`}>
          <div className="relative cursor-pointer">
            <figure>
              <img
                src={itemData ? itemData.thumbnail : gammingImage}
                alt="product"
                className="max-w-[190px] max-h-[180px] object-cover"
              />
            </figure>

            <button
              className="absolute w-full duration-700 ease-in-out 
                 -bottom-[40%] opacity-0 
                 group-hover:-bottom-[75px] group-hover:opacity-100 
                 py-[10px] bg-black text-white title16PXMedium"
            >
              Add To Cart
            </button>
          </div>
        </Link>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <div>
          <p className="title16PXMedium text-text2 truncate">
            {itemData ? itemData.title : "HAVIT HV-G92 Gamepad"}
          </p>

          <p>
            <span className="text-secondary2 title16PXMedium">
              ${" "}
              {useCalculateDiscount(
                itemData.price,
                itemData.discountPercentage,
              ).toFixed(2)}
            </span>

            <del className="text-[#00000071] title16PXMedium ml-4">
              ${itemData ? itemData.price.toFixed(2) : "160.00"}
            </del>
          </p>
        </div>

        {/* Rating */}
        <div className="flex gap-x-4">
          <RatingStars rating={itemData && itemData.rating} />
          <h3 className="title14PXSemiBold text-[#00000071]">
            {`(${itemData?.reviews?.length})`}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
