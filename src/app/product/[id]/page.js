"use client";

import React, { useState } from "react";

const ProductDetails = () => {
  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944",
    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c",
    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">

        <div className="flex flex-wrap -mx-4">

          {/* LEFT - IMAGES */}
          <div className="w-full md:w-1/2 px-4 mb-8">

            {/* MAIN IMAGE */}
            <img
              src={mainImage}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />

            {/* THUMBNAILS */}
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className={`size-16 sm:size-20 object-cover rounded-md cursor-pointer transition duration-300 ${
                    mainImage === img
                      ? "opacity-100 border-2 border-indigo-500"
                      : "opacity-60 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT - DETAILS */}
          <div className="w-full md:w-1/2 px-4">

            <h2 className="text-3xl font-bold mb-2">
              Premium Wireless Headphones
            </h2>

            <p className="text-gray-600 mb-4">
              SKU: WH1000XM4
            </p>

            {/* PRICE */}
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">
                $349.99
              </span>
              <span className="text-gray-500 line-through">
                $399.99
              </span>
            </div>

            {/* RATING */}
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-xl">
                ★★★★★
              </span>
              <span className="ml-2 text-gray-600">
                4.5 (120 reviews)
              </span>
            </div>

            <p className="text-gray-700 mb-6">
              Experience premium sound quality and industry-leading noise
              cancellation with these wireless headphones.
            </p>

            {/* COLOR */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
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
                defaultValue={1}
                min={1}
                className="w-16 text-center rounded-md border-gray-300 shadow-sm"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                Add to Cart
              </button>

              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
                Wishlist
              </button>
            </div>

            {/* FEATURES */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Key Features:
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Noise cancellation</li>
                <li>30-hour battery</li>
                <li>Touch control</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;