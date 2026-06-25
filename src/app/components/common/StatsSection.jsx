
"use client";

import React from "react";
import {
  FaStore,
  FaDollarSign,
  FaBox,
  FaMoneyBill,
} from "react-icons/fa";
import Container from "./Container";

const statsData = [
  {
    id: 1,
    icon: <FaStore />,
    value: "10.5k",
    label: "Sellers active on our site",
  },
  {
    id: 2,
    icon: <FaDollarSign />,
    value: "33k",
    label: "Monthly Product Sale",
  },
  {
    id: 3,
    icon: <FaBox />,
    value: "45.5k",
    label: "Customers active on our site",
  },
  {
    id: 4,
    icon: <FaMoneyBill />,
    value: "25k",
    label: "Annual gross sales on our site",
  },
];

const StatsSection = () => {
  return (
    <section className="pb-24 lg:pb-32">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="
                group rounded-lg border border-gray-200
                bg-white p-8 text-center
                shadow-sm transition-all duration-300 ease-in-out
                hover:scale-105 hover:border-[#DB4444]
                hover:bg-[#DB4444] hover:text-white
                hover:shadow-xl
              "
            >
              {/* Icon */}
              <div
                className="
                  mx-auto mb-5 flex h-16 w-16 items-center justify-center
                  rounded-full bg-gray-100 text-2xl text-black
                  transition-all duration-300
                  group-hover:bg-white
                  group-hover:text-[#DB4444]
                "
              >
                {item.icon}
              </div>

              {/* Value */}
              <h2 className="text-3xl font-bold md:text-4xl">
                {item.value}
              </h2>

              {/* Label */}
              <p className="mt-3 text-sm leading-6 opacity-90">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;

