"use client";

import React, { useState } from "react";
import Container from "./Container";
import { menuItems } from "../../helpers/ProjectArrays";
import allIcon from "../../helpers/IconProvider";
import Link from "next/link";

const Navbar = () => {
  const { navIcon, searchIcon } = allIcon;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white">
      <Container>
        <div className="flex items-center justify-between py-4">

          {/* LOGO */}
          <h6 className="text-lg sm:text-xl font-bold">Exclusive</h6>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-x-8 lg:gap-x-12">
            {menuItems.map((item) => (
              <li
                key={item.id}
             className="relative cursor-pointer py-[2px] overflow-hidden after:absolute after:content-[''] after:h-[2px] after:w-full after:bg-gray-300 after:bottom-0 after:-left-full hover:after:left-0 after:transition-all after:duration-300"
              >
                <Link href={item.path} className="text-sm lg:text-base">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* SEARCH + ICONS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-x-5 lg:gap-x-7">

            {/* SEARCH */}
            <div className="relative w-[180px] lg:w-[260px]">
              <input
                type="text"
                placeholder="Search..."
              className="w-full py-2 px-4 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                {searchIcon}
              </button>
            </div>

            {/* ICONS */}
            <ul className="flex gap-x-3 lg:gap-x-4">
              {navIcon.map((item) => (
                <li
                  key={item.id}
                 className="relative cursor-pointer p-2 lg:p-3 rounded-full hover:bg-gray-200 transition text-lg flex items-center justify-center"
                >
                  {item.icon}

                  {item.to === "/addtocart" && (
                    <span className="absolute -top-0.5  text-[10px] bg-black text-white rounded-full h-4 w-4 inline-flex items-center justify-center">
                      2
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-4">

            {/* MENU ITEMS */}
            <ul className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="block py-2 text-sm border-b"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* SEARCH */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 border rounded-full text-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                {searchIcon}
              </button>
            </div>

            {/* ICONS */}
            <ul className="flex gap-4 justify-start">
              {navIcon.map((item) => (
                <li
                  key={item.id}
                  className="relative p-3 rounded-full hover:bg-gray-200 text-xl"
                >
                  {item.icon}

                  {item.to === "/addtocart" && (
                    <span className="absolute -top-1 -right-1 text-xs bg-black text-white rounded-full h-5 w-5 inline-flex items-center justify-center">
                      2
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;