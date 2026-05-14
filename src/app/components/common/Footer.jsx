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

        <div className="py-14 space-y-12">

          {/* ROW 1 → ACCOUNT + SUPPORT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* ACCOUNT */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                {footerLinks[0].title}
              </h2>

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
              <h2 className="text-lg font-semibold mb-4">Support</h2>

              <div className="space-y-2 text-sm text-gray-300">
                <p>111 Bijoy Sarani, Dhaka, Bangladesh</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
              </div>
            </div>

          </div>

          {/* ROW 2 → QUICK LINKS + DOWNLOAD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* QUICK LINKS */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                {footerLinks[1].title}
              </h2>

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
              <h2 className="text-lg font-semibold mb-3">Download App</h2>

              <p className="text-xs text-gray-400 mb-4">
                Save $3 with App New User Only
              </p>

              <div className="flex items-center gap-4">

                <div className="relative w-16 h-16">
                  <Image
                    src={footerQr}
                    alt="qr"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="relative w-24 h-10">
                    <Image src={playStore} alt="play" fill className="object-contain" />
                  </div>

                  <div className="relative w-24 h-10">
                    <Image src={appleStore} alt="apple" fill className="object-contain" />
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ROW 3 → NEWSLETTER */}
          <div className="max-w-md">
            <h2 className="text-lg font-semibold mb-3">Exclusive</h2>

            <p className="text-sm text-gray-400 mb-3">
              Subscribe & get 10% off
            </p>

            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-3 pl-4 pr-12 rounded bg-gray-800 text-white"
              />

              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                {send}
              </button>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="text-xl hover:text-gray-400 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </div>

      </Container>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © Copyright Rimel 2022. All rights reserved
      </div>

    </footer>
  );
};

export default Footer;