import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ProductApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
   GetAllProduct : build.query({
    query: ()=> "/products"
   }),
  GetAllProductCategoryList : build.query({
    query: ()=> "/products/category-list"
  }),
  GetSingleProduct: build.query({
  query: (id) => `/products/${id}`,
}),
  }),
});

export const { useGetAllProductQuery ,useGetAllProductCategoryListQuery,useGetSingleProductQuery } = ProductApi;