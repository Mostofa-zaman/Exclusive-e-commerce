"use client";

import React, { useEffect, useState } from "react";
import BreadCrumb from "@/app/components/common/BreadCrumb";

const ProductDetails = ({ params }) => {
  const { id } = params;

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/${id}`
        );
        const data = await res.json();

        setProduct(data);

        // SAFE fallback image set
        setMainImage(
          data.thumbnail || data.images?.[0] || ""
        );
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="p-10 text-center text-lg font-semibold">
        Loading product...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-10">
      <BreadCrumb />

      <h1 className="text-xl font-bold mb-4">
        Product ID: {product.id}
      </h1>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">

            {/* MAIN IMAGE */}
            <img
              src={mainImage || product.thumbnail}
              alt={product.title}
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />

            {/* THUMBNAILS */}
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">

              {(product.images && product.images.length > 0
                ? product.images
                : [product.thumbnail]
              ).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Thumbnail"
                  onClick={() => setMainImage(img)}
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">

            <h2 className="text-3xl font-bold mb-2">
              {product.title}
            </h2>

            <p className="text-gray-600 mb-4">
              Brand: {product.brand}
            </p>

            {/* PRICE */}
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">
                ${product.price}
              </span>

              <span className="text-gray-500 line-through">
                $
                {(
                  product.price +
                  (product.price * product.discountPercentage) / 100
                ).toFixed(2)}
              </span>
            </div>

            {/* RATING */}
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-xl">
                {"★".repeat(Math.round(product.rating || 0))}
              </span>

              <span className="ml-2 text-gray-600">
                {product.rating} (
                {product.reviews?.length || 0} reviews)
              </span>
            </div>

            <p className="text-gray-700 mb-6">
              {product.description}
            </p>

            {/* COLOR */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Color:
              </h3>

              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">
                Quantity:
              </label>

              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 text-center rounded-md border-gray-300 shadow-sm"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                Add to Cart
              </button>

              <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
                Wishlist
              </button>
            </div>

            {/* FEATURES */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Key Features:
              </h3>

              <ul className="list-disc list-inside text-gray-700">
                <li>Category: {product.category}</li>
                <li>Stock: {product.stock}</li>
                <li>Brand: {product.brand}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;