"use client";

import React from "react";
import ProductCommonLayout from "../common/ProductCommonLayout";
import CategoryCart from "../common/CategoryCart";

const Category = () => {
  return (
    <div>
      <ProductCommonLayout
        heading={"Categories"}
        description={"Browse By Category"}
        isArrowsTrue={true}
        ProductCard={CategoryCart}
        partialItemShow={6}
      />
    
    </div>
  );
};

export default Category;
