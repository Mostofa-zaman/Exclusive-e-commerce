"use client";

import React, { useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import Container from "../components/common/Container";
import ProductPageLeft from "../components/productPageComponents/ProductPageLeft";
import ProductPageRight from "../components/productPageComponents/ProductPageRight";
import { useGetAllProductCategoryListQuery } from "../features/api/ProductApi";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data, error, isLoading } =
    useGetAllProductCategoryListQuery();

  return (
    <div className="py-10">
      <Container>
        <BreadCrumb />

        <div className="flex justify-between">
          <ProductPageLeft
            categoryData={data}
            error={error}
            isLoading={isLoading}
            setSelectedCategory={setSelectedCategory}
          />

          <ProductPageRight selectedCategory={selectedCategory} />
        </div>
      </Container>
    </div>
  );
}