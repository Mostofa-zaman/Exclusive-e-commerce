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
    <section className="w-full">
      <Container>

        <div className="border-b border-black/10">

          {/* PRODUCT SECTION */}
          <div className="w-full overflow-hidden">
            <ProductCommonLayout
              ProductCard={ProductCard}
              timeStamp={true}
              timeofOffer={1}
              isArrowsTrue={true}
              heading="Today's"
              description="Flash Sales"

              // FIX: better for responsive slider control
              partialItemShow={4}

              componentData={data?.products}
              isLoading={isLoading}
            />
          </div>

          {/* BUTTON SECTION */}
          <div className="flex justify-center pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-14 md:pb-20 px-4">
            <div className="w-full max-w-[220px] sm:max-w-[240px]">
              <Button className="w-full text-sm sm:text-base">
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