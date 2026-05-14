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
    <section className="py-8 md:py-10 lg:py-12">

      <Container>

        <BreadCrumb />

        {/* MAIN WRAPPER */}
        <div
          className="
            flex flex-col lg:flex-row
            gap-6 md:gap-8 lg:gap-10
            mt-6 md:mt-8 lg:mt-10
          "
        >

          {/* LEFT SIDEBAR (DARAZ STYLE) */}
          <aside
            className="
              w-full
              lg:w-[20%]
              lg:sticky
              lg:top-20
              h-fit
            "
          >
            <ProductPageLeft
              categoryData={data}
              error={error}
              isLoading={isLoading}
              setSelectedCategory={setSelectedCategory}
            />
          </aside>

          {/* RIGHT PRODUCTS */}
          <main className="w-full lg:w-[80%]">
            <ProductPageRight selectedCategory={selectedCategory} />
          </main>

        </div>

      </Container>

    </section>
  );
}