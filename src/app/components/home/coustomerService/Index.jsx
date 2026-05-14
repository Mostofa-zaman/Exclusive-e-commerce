"use client";

import React from "react";
import Container from "../../common/Container";
import { FaCheck } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";

const CustomerService = () => {
  const service = [
    {
      id: 1,
      icon: (
        <TbTruckDelivery className="text-3xl md:text-4xl text-white bg-black w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full p-3" />
      ),
      tittle: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: (
        <TfiHeadphoneAlt className="text-3xl md:text-4xl text-white bg-black w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full p-3" />
      ),
      tittle: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: (
        <FaCheck className="text-3xl md:text-4xl text-white bg-black w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full p-3" />
      ),
      tittle: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="pb-16 md:pb-24 lg:pb-[140px] overflow-hidden">
      <Container>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-8 md:gap-10 lg:gap-6
          "
        >

          {service?.map((item) => (
            <div
              key={item.id}
              className="
                flex flex-col
                justify-center
                items-center
                text-center

                px-4
              "
            >

              {/* ICON */}
              <span className="inline-flex rounded-full p-2 md:p-3 bg-[rgb(47,46,48,0.3)]">
                {item.icon}
              </span>

              {/* TITLE */}
              <h1
                className="
                  text-base sm:text-lg lg:text-[20px]
                  font-semibold
                  font-poppins

                  pt-5 md:pt-6
                  pb-2

                  leading-snug
                "
              >
                {item.tittle}
              </h1>

              {/* DESCRIPTION */}
              <h3
                className="
                  text-sm md:text-[14px]
                  font-normal
                  font-poppins

                  leading-relaxed
                  max-w-[280px]
                "
              >
                {item.description}
              </h3>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default CustomerService;