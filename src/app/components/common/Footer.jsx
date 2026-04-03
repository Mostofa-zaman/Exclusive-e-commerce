import React from "react";
import Container from "./Container";
import { allIcon } from "../../helpers/IconProvider";
import { footerLinks } from "../../helpers/ProjectArrays";
import allImages from "../../helpers/imageProvider";
import Image from "next/image";

const Footer = () => {
  const { appleStore, playStore, footerQr } = allImages;
  const { send, socialLinks } = allIcon;

  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="grid grid-cols-5 gap-x-12 pt-20 pb-16">
          {/* Newsletter */}
          <div>
            <h6 className="text-xl font-bold">Exclusive</h6>
            <p className="py-4 font-medium text-lg">Subscribe</p>
            <p className="mb-4 text-sm text-gray-100">
              Get 10% off your first order
            </p>
            <div className="relative w-[220px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-2.5 px-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition duration-300">
                {send}
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <p className="text-lg font-medium mb-4">Support</p>
            <p className=" text-gray-100 mb-1">
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh
            </p>
            <p className=" text-gray-100 mb-1">exclusive@gmail.com</p>
            <p className=" text-gray-100">+88015-88888-9999</p>
          </div>

          {/* Footer Links 1 */}
          <div>
            <p className="text-lg font-medium mb-4">{footerLinks[0].title}</p>
            <ul className="space-y-2">
              {footerLinks[0].links.map((item) => (
                <li
                  key={item.label}
                  className="cursor-pointer text-sm text-gray-100 hover:text-orange-500 transition"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Links 2 */}
            <div>
                <p className="text-lg font-medium mb-4">{footerLinks[1].title}</p>
                <ul className="space-y-2">
                {footerLinks[1].links.map((item) => (
                    <li
                    key={item.label}
                    className="cursor-pointer text-sm text-gray-100 hover:text-orange-500 transition"
                    >
                    {item.label}
                    </li>
                ))}
                </ul>
            </div>

          {/* App Download + Social */}
          <div>
            <p className="text-lg font-medium mb-2">Download App</p>
            <p className="text-xs text-gray-100 mb-2">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src={footerQr}
                  alt="footer-qr"
                  fill
                  className="object-contain cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative w-24 h-10">
                  <Image
                    src={playStore}
                    alt="playstore"
                    fill
                    className="object-contain cursor-pointer"
                  />
                </div>
                <div className="relative w-24 h-10">
                  <Image
                    src={appleStore}
                    alt="applestore"
                    fill
                    className="object-contain cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <ul className="flex gap-4">
              {socialLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target="_blank"
                    className="text-white text-xl hover:text-gray-400 transition"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright */}
      <div className="pt-4 pb-6 border-t border-gray-700">
        <p className="text-center text-gray-500 text-sm">
          © Copyright Rimel 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
