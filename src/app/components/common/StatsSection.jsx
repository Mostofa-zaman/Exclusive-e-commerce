"use client";

import React from "react";
import { FaStore, FaDollarSign, FaBox, FaMoneyBill } from "react-icons/fa";
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
    label: "Customer active in our site",
  },
  {
    id: 4,
    icon: <FaMoneyBill />,
    value: "25k",
    label: "Annual gross sale in our site",
  },
];

const StatsSection = () => {
  return (
    <div className="pb-30">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="
                rounded-lg border p-6 text-center shadow-sm
                bg-white
                transition-all duration-300
                hover:bg-[#DB4444]
                hover:text-white
                hover:scale-105
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14 h-14 mx-auto flex items-center justify-center
                  rounded-full mb-4
                  bg-gray-100 text-black
                  group-hover:bg-white
                "
              >
                <span className="text-xl">{item.icon}</span>
              </div>

              {/* Value */}
              <h2 className="text-3xl font-bold">{item.value}</h2>

              {/* Label */}
              <p className="text-sm mt-2 opacity-80">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StatsSection;
