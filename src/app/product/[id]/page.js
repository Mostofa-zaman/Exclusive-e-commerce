"use client";

import BreadCrumb from "@/app/components/common/BreadCrumb";
import React from "react";

const ProductDetails = ({ params }) => {
  const { id } = params;

  return (
    <div className="p-10">
      <BreadCrumb/>
     
      
    </div>
  );
};

export default ProductDetails;