
"use client";

import React from 'react'
import ProductCommonLayout from '../../common/ProductCommonLayout';
import ProductCard from '../../common/ProductCard';
import { useGetAllProductQuery } from '@/app/features/api/ProductApi';

const BestSelling = () => {
      const { data, error, isLoading } = useGetAllProductQuery()
  return (
    <div>
        <ProductCommonLayout
         ProductCard={ProductCard}
          heading="This Month"
          description="Best Selling Products"
          partialItemShow={4}
          componentData={data?.products}
          isLoading={isLoading}
          viewButton={true}
        />
    </div>
  )
}

export default BestSelling