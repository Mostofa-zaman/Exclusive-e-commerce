"use client"

import React from "react";
import Container from "../../common/Container";
import { id } from "zod/locales";
import { FaCheck } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";

const CustomerService = () => {
  const service = [
    {
      id: 1,
      icon: (
        <TbTruckDelivery className="text-4xl text-white bg-black w-[70px] h-[70px] rounded-full p-3" />
      ),
      tittle: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: (
        <TfiHeadphoneAlt className="text-4xl text-white bg-black w-[70px] h-[70px] rounded-full p-3" />
      ),
      tittle: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: (
        <FaCheck className="text-4xl text-white bg-black w-[70px] h-[70px] rounded-full p-3" />
      ),
      tittle: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
    },
  ];
  return (
    <div className="pb-[140px]">
      <Container>
        <div className="flex items-center justify-around">
          {service?.map((item) => (
            <div key={item.id} className="flex flex-col justify-center items-center">
              <span className="inline-block rounded-full p-3 bg-[rgb(47,46,48,0.3)]">
                {item.icon}
              </span>
              <h1 className="text-[20px] font-semibold font-poppins pt-[24px] pb-[8px]">
                {item.tittle}
              </h1>

              <h3 className="text-[14px] font-normal font-poppins">
                {item.description}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CustomerService;
