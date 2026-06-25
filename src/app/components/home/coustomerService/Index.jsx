
"use client";

import React from "react";
import Container from "../../common/Container";
import { FaCheck } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";

const services = [
  {
    id: 1,
    icon: TbTruckDelivery,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: TfiHeadphoneAlt,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: FaCheck,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const CustomerService = () => {
  return (
    <section className="pb-16 md:pb-24 lg:pb-[140px]">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group flex flex-col items-center text-center
                  px-4 transition-all duration-300
                "
              >
                {/* Icon */}
                <div className="mb-6 inline-flex rounded-full bg-[rgba(47,46,48,0.3)] p-3">
                  <Icon
                    className="
                      h-[60px] w-[60px]
                      rounded-full bg-black p-3 text-white
                      transition-transform duration-300
                      group-hover:scale-110
                      md:h-[70px] md:w-[70px]
                    "
                  />
                </div>

                {/* Title */}
                <h2
                  className="
                    mb-2
                    text-base font-semibold
                    leading-snug
                    sm:text-lg
                    lg:text-xl
                  "
                >
                  {item.title}
                </h2>

                {/* Description */}
                <p
                  className="
                    max-w-[280px]
                    text-sm text-gray-600
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CustomerService;

