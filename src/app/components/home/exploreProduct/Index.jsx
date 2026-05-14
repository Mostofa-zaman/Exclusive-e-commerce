"use client";

import React from "react";
import ProductCommonLayout from "../../common/ProductCommonLayout";
import Container from "../../common/Container";
import ProductCard from "../../common/ProductCard";
import { useGetAllProductQuery } from "../../../features/api/ProductApi";
import Button from "../../common/Button";

const ExploreProduct = () => {
  const { data, error, isLoading } = useGetAllProductQuery();

  return (
    <section className="w-full overflow-hidden">
      <Container>
        <div className="flex flex-col items-center border-b border-black/10 mb-10 md:mb-14 lg:mb-16">

          <div className="w-full">
            <ProductCommonLayout
              ProductCard={ProductCard}
              heading="Our Products"
              description="Explore Our Products"
              isArrowsTrue={true}
              componentData={data?.products}
              rows={2}
              isLoading={isLoading}
            />
          </div>

          {/* BUTTON */}
          <div
            className="
              w-full
              flex
              justify-center
              items-center

              pt-6 md:pt-8 lg:pt-10
              pb-10 md:pb-14 lg:pb-20

              px-4
            "
          >
            <div
              className="
                w-full
                sm:w-auto

                max-w-[280px]
                sm:max-w-none
              "
            >
              <Button children={"View All Products"} />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ExploreProduct;