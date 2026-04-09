"use client";

import React from "react";
import ProductCommonLayout from "../../common/ProductCommonLayout";
import CategoryCart from "../../common/CategoryCart";
import { categorybrowse } from "../../../../../data/data";

const Category = () => {
  return (
    <div className="flex flex-col">
      <ProductCommonLayout
        heading={"Categories"}
        description={"Browse By Category"}
        isArrowsTrue={true}
        ProductCard={CategoryCart}
        partialItemShow={6}
        componentData={categorybrowse}
      />
    </div>
  );
};

export default Category;
