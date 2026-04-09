"use client";

import React, { useEffect } from "react";
import ProductCommonLayout from "../../common/ProductCommonLayout";
import ProductCard from "../../common/ProductCard";
import Container from '../../common/Container'
import Button from '../../common/Button'
import { useGetAllProductQuery } from "@/app/features/api/ProductApi";

const FlashSale = () => {

    const { data, error, isLoading } = useGetAllProductQuery()
  return (
  <div className="">
     <Container>
      <div className="flex flex-col border-b-[1px] border-b-black mb-10">
        <ProductCommonLayout
          ProductCard={ProductCard}
          timeStamp={true}
          timeofOffer={1}
          isArrowsTrue={true}
          heading="Today's"
          description="Flash Sales"
           componentData={data?.products}
        isLoading={isLoading}
        />
        <div className="pb-20  mx-auto  w-[234px] ">
          <Button children={"View All Products"}/>
        </div>
    

      </div>
   </Container>
  </div>
  );
};

export default FlashSale;