"use client";

import BreadCrumb from "@/app/components/common/BreadCrumb";
import Container from "@/app/components/common/Container";
import { useGetSingleProductQuery } from "@/app/features/api/ProductApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const params = useParams();
  const id = params?.id;
  const { data, error, isLoading } = useGetSingleProductQuery(Number(id));

  const images = data?.images || [];

  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);

  const [zoomStyle, setZoomStyle] = useState({});

  // HANDLE ZOOM
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)", // zoom level
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
    });
  };
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="bg-gray-100">
      <Container>
        <BreadCrumb />
      </Container>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* LEFT - IMAGES */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            {/* MAIN IMAGE WITH ZOOM */}
            <div
              className="overflow-hidden rounded-lg shadow-lg cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={mainImage}
                alt="Product"
                className="w-full h-auto transition-transform duration-200 ease-in-out"
                style={zoomStyle}
              />
            </div>

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

            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-xl">★★★★★</span>
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>

            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">$349.99</span>
              <span className="text-gray-500 line-through">$399.99</span>
            </div>

            <p className="text-gray-700 mb-6 border-b-1 pb-5">
              Experience premium sound quality and industry-leading noise
              cancellation with these wireless headphones.
            </p>

            <div className="space-y-6">
              {/* COLORS */}
              <div className="flex items-center gap-6 ">
                <h3 className="text-[20px] font-normal font-inter mb-2">Colours:</h3>
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 rounded-full border border-gray-300 bg-white cursor-pointer"></div>
                  <div className="w-5 h-5 rounded-full bg-red-400 cursor-pointer"></div>
                </div>
              </div>

              {/* SIZE */}
              <div>
                <h3 className="text-[20px] font-normal font-inter mb-2">Size:</h3>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1 border rounded hover:bg-black hover:text-white transition"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* QUANTITY + BUY */}
              <div className="flex items-center gap-5">
                {/* quantity */}
                <div className="flex items-center border rounded ">
                  <button className="px-3 py-1 border-r">−</button>
                  <span className="px-8">2</span>
                  <button className="px-3 py-1 border-l">+</button>
                </div>

                {/* buy button */}
                <button className="bg-red-500 text-white px-18 py-2 rounded hover:bg-red-600 transition">
                  Buy Now
                </button>

                {/* wishlist */}
                <button className="border py-2 px-4 rounded">♥</button>
              </div>

              {/* DELIVERY BOX */}
              <div className="border rounded p-4 space-y-4">
                {/* Free delivery */}
                <div className="flex gap-3 items-start">
                  <span className="text-xl">🚚</span>
                  <div>
                    <h4 className="font-medium">Free Delivery</h4>
                    <p className="text-sm text-gray-500">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>

                <hr />

                {/* Return */}
                <div className="flex gap-3 items-start">
                  <span className="text-xl">🔄</span>
                  <div>
                    <h4 className="font-medium">Return Delivery</h4>
                    <p className="text-sm text-gray-500">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
