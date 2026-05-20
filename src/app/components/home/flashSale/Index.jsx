"use client";

import React from "react";
import ProductCommonLayout from "../../common/ProductCommonLayout";
import ProductCard from "../../common/ProductCard";
import Container from "../../common/Container";
import Button from "../../common/Button";
import { useGetAllProductQuery } from "@/app/features/api/ProductApi";

const FlashSale = () => {
  const { data, isLoading } = useGetAllProductQuery();

  return (
    <section className="w-full overflow-hidden bg-white">
      <Container>
        {/* Main Wrapper with adaptive padding & border */}
        <div className="flex flex-col border-b border-black/10 pb-10 sm:pb-14 md:pb-16 lg:pb-20">
          
          {/* PRODUCT SECTION */}
          <div className="w-full">
            <ProductCommonLayout
              ProductCard={ProductCard}
              timeStamp={true}
              timeofOffer={1}
              isArrowsTrue={true}
              heading="Today's"
              description="Flash Sales"
              partialItemShow={4} // Laptop/Desktop e 4ti dekhabe
              componentData={data?.products}
              isLoading={isLoading}
            />
          </div>

          {/* VIEW ALL BUTTON SECTION */}
         <div className="flex justify-center items-center mt-6 sm:mt-10 md:mt-14 px-4">
  <div className="w-full sm:w-auto flex justify-center">
    <Button
      className="
        w-full
        sm:w-auto
        py-3 sm:py-4
        px-6 sm:px-12
        text-sm sm:text-base
        font-medium
        rounded
        hover:bg-[#E04444]
        transition-all
        duration-300
        active:scale-95
      "
    >
      View All Products
    </Button>
  </div>
</div>

        </div>
      </Container>
    </section>
  );
};

export default FlashSale; 