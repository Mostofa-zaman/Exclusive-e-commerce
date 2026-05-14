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

        {/* MAIN GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-5
            gap-10
            pt-16 pb-10
          "
        >

          {/* NEWSLETTER */}
          <div className="lg:col-span-1">
            <h6 className="text-xl font-bold">Exclusive</h6>
            <p className="py-4 font-medium text-lg">Subscribe</p>
            <p className="mb-4 text-sm text-gray-300">
              Get 10% off your first order
            </p>

            <div className="relative w-full max-w-[240px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-2.5 px-4 rounded bg-gray-800 text-white"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                {send}
              </button>
            </div>
          </div>

          {/* ACCOUNT */}
          <div>
            <p className="text-lg font-medium mb-4">
              {footerLinks[0].title}
            </p>

            <ul className="space-y-2 text-sm text-gray-300">
              {footerLinks[0].links.map((item) => (
                <li key={item.label} className="hover:text-white cursor-pointer">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <p className="text-lg font-medium mb-4">Support</p>

            <div className="space-y-2 text-sm text-gray-300">
              <p>111 Bijoy Sarani, Dhaka</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p className="text-lg font-medium mb-4">
              {footerLinks[1].title}
            </p>

            <ul className="space-y-2 text-sm text-gray-300">
              {footerLinks[1].links.map((item) => (
                <li key={item.label} className="hover:text-white cursor-pointer">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* DOWNLOAD APP */}
          <div>
            <p className="text-lg font-medium mb-3">Download App</p>

            <p className="text-xs text-gray-400 mb-3">
              Save $3 with App New User Only
            </p>

            <div className="flex items-center gap-3">

              <div className="relative w-14 h-14">
                <Image
                  src={footerQr}
                  alt="qr"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-2">

                <div className="relative w-20 h-8">
                  <Image src={playStore} alt="play" fill className="object-contain" />
                </div>

                <div className="relative w-20 h-8">
                  <Image src={appleStore} alt="apple" fill className="object-contain" />
                </div>

              </div>

            </div>

            {/* SOCIAL */}
            <ul className="flex gap-4 mt-5">
              {socialLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="text-white text-xl hover:text-gray-400"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>

          </div>

        </div>

      </Container>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © Copyright Rimel 2022. All rights reserved
      </div>

    </footer>
  );
};

export default Footer;