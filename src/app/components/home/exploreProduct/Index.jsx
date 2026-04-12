
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
    <Container>
      <div className="flex flex-col items-center border-b-[1px] border-b-black mb-10">
        <ProductCommonLayout
          ProductCard={ProductCard}
          heading="Our Products"
          description="Explore Our Products"
          isArrowsTrue={true}
          componentData={data?.products}
          rows={2}
          isLoading={isLoading}
        />
        <div className="pb-20  mx-auto  w-58.5  ">
          <Button children={"View All Products"} />
        </div>
      </div>
    </Container>
  );
};

export default ExploreProduct;
